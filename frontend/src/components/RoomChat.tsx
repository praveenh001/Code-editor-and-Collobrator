import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare } from 'lucide-react';

export interface ChatMessage {
  userId: string;
  userName: string;
  message: string;
  timestamp: string | Date;
}

interface RoomChatProps {
  messages: ChatMessage[];
  onSendMessage: (msg: string) => void;
  currentUserId: string;
}

const RoomChat: React.FC<RoomChatProps> = ({ messages, onSendMessage, currentUserId }) => {
  const [text, setText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text.trim());
      setText('');
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getRandomColor = (userId: string): string => {
    const colors = [
      'text-blue-400',
      'text-green-400',
      'text-purple-400',
      'text-pink-400',
      'text-indigo-400',
      'text-teal-400',
      'text-orange-400',
      'text-red-400'
    ];
    const index = userId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  const formatTime = (time: any) => {
    const date = time instanceof Date ? time : new Date(time);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="bg-gray-900 border-t border-gray-700 h-full flex flex-col text-white">
      {/* Header */}
      <div className="flex items-center gap-2 p-3 bg-gray-950 border-b border-gray-800 justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-semibold text-gray-200">Room Chat</span>
        </div>
        <span className="text-xs px-2 py-0.5 bg-gray-800 rounded text-gray-400">
          {messages.length} msgs
        </span>
      </div>

      {/* Messages List */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3" style={{ scrollbarWidth: 'thin' }}>
        {messages.map((msg, index) => {
          const isSelf = msg.userId === currentUserId;
          return (
            <div
              key={index}
              className={`flex flex-col max-w-[85%] ${
                isSelf ? 'ml-auto items-end' : 'mr-auto items-start'
              }`}
            >
              {/* Sender & Time */}
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500 mb-0.5 px-1">
                {!isSelf && (
                  <span className={`font-medium ${getRandomColor(msg.userId)}`}>
                    {msg.userName}
                  </span>
                )}
                <span>{formatTime(msg.timestamp)}</span>
              </div>

              {/* Message Bubble */}
              <div
                className={`px-3 py-2 rounded-xl text-sm break-words whitespace-pre-wrap ${
                  isSelf
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700'
                }`}
              >
                {msg.message}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />

        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 py-8">
            <MessageSquare className="w-8 h-8 mb-2 opacity-30" />
            <p className="text-xs">No messages yet.</p>
            <p className="text-[10px] mt-1">Start the conversation!</p>
          </div>
        )}
      </div>

      {/* Message Input */}
      <form onSubmit={handleSend} className="p-2 bg-gray-950 border-t border-gray-800 flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="p-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-800 text-white rounded-lg transition-colors flex items-center justify-center disabled:text-gray-500"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};

export default RoomChat;
