import React, { useEffect, useRef, useMemo } from 'react';
import Editor from '@monaco-editor/react';

const getColorFromUsername = (username: string): string => {
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colors = [
    '#3b82f6', // blue
    '#ef4444', // red
    '#10b981', // green
    '#f59e0b', // orange
    '#8b5cf6', // purple
    '#ec4899', // pink
    '#06b6d4', // cyan
    '#14b8a6', // teal
  ];
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

interface CodeEditorProps {
  fileName: string;
  content: string;
  language: string;
  onChange: (value: string) => void;
  onCursorChange?: (position: any) => void;
  theme?: string;
  remoteCursors?: {
    [userId: string]: { userName: string; position: { lineNumber: number; column: number }; fileName: string };
  };
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  fileName,
  content,
  language,
  onChange,
  onCursorChange,
  theme = 'vs-dark',
  remoteCursors
}) => {
  const editorRef = useRef<any>(null);
  const monacoRef = useRef<any>(null);
  const decorationsRef = useRef<{ [userId: string]: string[] }>({});

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
    
    // Listen for cursor position changes
    editor.onDidChangeCursorPosition((e: any) => {
      if (onCursorChange) {
        onCursorChange({
          lineNumber: e.position.lineNumber,
          column: e.position.column
        });
      }
    });
    
    // Configure editor options
    editor.updateOptions({
      fontSize: 14,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      automaticLayout: true,
      tabSize: 2,
      insertSpaces: true
    });
  };

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      onChange(value);
    }
  };

  useEffect(() => {
    if (!editorRef.current || !monacoRef.current) return;

    const editor = editorRef.current;
    const monaco = monacoRef.current;

    const currentCursors = remoteCursors
      ? Object.entries(remoteCursors).filter(([_, cursor]) => cursor.fileName === fileName)
      : [];

    const activeUsers = new Set<string>();

    currentCursors.forEach(([userId, cursor]) => {
      activeUsers.add(userId);
      const { lineNumber, column } = cursor.position;
      const prevDecs = decorationsRef.current[userId] || [];

      const model = editor.getModel();
      if (!model) return;

      const lineCount = model.getLineCount();
      const maxLine = Math.min(lineNumber, lineCount);
      const maxCol = Math.min(column, model.getLineMaxColumn(maxLine));

      const newDecs = editor.deltaDecorations(prevDecs, [
        {
          range: new monaco.Range(maxLine, maxCol, maxLine, maxCol),
          options: {
            beforeContentClassName: `remote-cursor remote-cursor-${userId.replace(/[^a-zA-Z0-9-_]/g, '')}`,
            hoverMessage: { value: `${cursor.userName} is here` }
          }
        }
      ]);
      decorationsRef.current[userId] = newDecs;
    });

    // Remove decorations of users who left or switched files
    Object.keys(decorationsRef.current).forEach((userId) => {
      if (!activeUsers.has(userId)) {
        editor.deltaDecorations(decorationsRef.current[userId], []);
        delete decorationsRef.current[userId];
      }
    });

    return () => {
      if (editorRef.current) {
        Object.keys(decorationsRef.current).forEach((userId) => {
          editorRef.current.deltaDecorations(decorationsRef.current[userId], []);
        });
        decorationsRef.current = {};
      }
    };
  }, [remoteCursors, fileName]);

  const getLanguageFromFileName = (fileName: string): string => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    
    switch (extension) {
      case 'js':
      case 'jsx':
        return 'javascript';
      case 'ts':
      case 'tsx':
        return 'typescript';
      case 'py':
        return 'python';
      case 'html':
        return 'html';
      case 'css':
        return 'css';
      case 'json':
        return 'json';
      case 'md':
        return 'markdown';
      default:
        return 'plaintext';
    }
  };

  const cursorStyles = useMemo(() => {
    return remoteCursors
      ? Object.entries(remoteCursors)
          .map(([userId, cursor]) => {
            const className = `remote-cursor-${userId.replace(/[^a-zA-Z0-9-_]/g, '')}`;
            const color = getColorFromUsername(cursor.userName);
            return `
              .${className} {
                border-left-color: ${color} !important;
              }
              .${className}::after {
                content: "${cursor.userName}";
                position: absolute;
                top: 19px;
                left: 0;
                background-color: ${color};
                color: white;
                font-size: 10px;
                font-weight: 600;
                padding: 2px 6px;
                border-radius: 3px;
                white-space: nowrap;
                pointer-events: none;
                z-index: 10;
                font-family: system-ui, -apple-system, sans-serif;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
                line-height: 1.2;
              }
            `;
          })
          .join('\n')
      : '';
  }, [remoteCursors]);

  return (
    <div className="h-full w-full relative">
      <style>{cursorStyles}</style>
      <Editor
        height="100%"
        language={getLanguageFromFileName(fileName)}
        value={content}
        theme={theme}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false,
          cursorStyle: 'line',
          automaticLayout: true,
          glyphMargin: true,
          folding: true,
          lineNumbers: 'on',
          wordWrap: 'on',
          scrollBeyondLastLine: false,
          minimap: { enabled: true },
          fontSize: 14,
          fontFamily: 'JetBrains Mono, Consolas, Monaco, monospace'
        }}
      />
    </div>
  );
};

export default CodeEditor;