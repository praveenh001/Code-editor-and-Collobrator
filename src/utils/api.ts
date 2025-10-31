// Detect environment and set backend API base URL
const API_BASE_URL =
  import.meta.env.MODE === 'production'
    ? 'https://code-editor-and-collobrator.onrender.com/api' // Render backend URL
    : 'http://localhost:3001/api'; // Local development

export const api = {
  // 🔹 Create a new room
  createRoom: async () => {
    const response = await fetch(`${API_BASE_URL}/rooms/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  },

  // 🔹 Check if a room exists
  checkRoom: async (roomId: string) => {
    const response = await fetch(`${API_BASE_URL}/rooms/${roomId}`);
    return response.json();
  },

  // 🔹 Execute code
  executeCode: async (code: string, language: string, roomId: string) => {
    const response = await fetch(`${API_BASE_URL}/execute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, language, roomId }),
    });
    return response.json();
  },

  // 🔹 Health check
  healthCheck: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      return response.json();
    } catch (error) {
      throw new Error('Server is not responding');
    }
  },
};
