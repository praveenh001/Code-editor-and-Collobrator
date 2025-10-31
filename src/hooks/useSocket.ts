import { useEffect, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

interface UseSocketReturn {
  socket: Socket | null;
  isConnected: boolean;
  error: string | null;
}

// 👇 Use Render backend URL in production
const BACKEND_URL =
  import.meta.env.MODE === 'production'
    ? 'https://code-editor-and-collobrator.onrender.com' // your live backend
    : 'http://localhost:3001'; // local dev

const useSocket = (serverUrl: string = BACKEND_URL): UseSocketReturn => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(() => {
    try {
      const newSocket = io(serverUrl, {
        transports: ['websocket', 'polling'],
        timeout: 20000,
        autoConnect: true,
      });

      newSocket.on('connect', () => {
        console.log('✅ Connected to server:', serverUrl);
        setIsConnected(true);
        setError(null);
      });

      newSocket.on('disconnect', (reason) => {
        console.log('⚠️ Disconnected from server:', reason);
        setIsConnected(false);
      });

      newSocket.on('connect_error', (error) => {
        console.error('❌ Connection error:', error);
        setError('Failed to connect to server');
      });

      setSocket(newSocket);
      return newSocket;
    } catch (err) {
      setError('Failed to initialize socket connection');
      console.error('Socket initialization error:', err);
      return null;
    }
  }, [serverUrl]);

  useEffect(() => {
    const socketInstance = connect();

    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
      }
    };
  }, [connect]);

  return { socket, isConnected, error };
};

export default useSocket;
