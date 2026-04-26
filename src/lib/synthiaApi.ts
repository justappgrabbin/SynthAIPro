export const SYNTHIA_API_URL =
  import.meta.env.VITE_SYNTHIA_API_URL || "http://localhost:3002";

export const SYNTHIA_WS_URL =
  import.meta.env.VITE_SYNTHIA_WS_URL || `${SYNTHIA_API_URL.replace(/^http/, "ws")}/ws`;

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${SYNTHIA_API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${response.status} ${response.statusText}: ${text}`);
  }

  return response.json();
}

export const synthiaApi = {
  health: () => request<any>("/health"),

  synthiaStatus: () => request<any>("/api/synthia/status"),

  artifacts: (limit = 100) => request<any>(`/api/artifacts?limit=${limit}`),

  graph: () => request<any>("/api/graph"),

  build: (payload: { name: string; type?: string; html: string }) =>
    request<any>("/api/build", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  upload: async (files: File[]) => {
    const formData = new FormData();

    for (const file of files) {
      formData.append("files", file);
    }

    const response = await fetch(`${SYNTHIA_API_URL}/api/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`${response.status} ${response.statusText}: ${text}`);
    }

    return response.json();
  },
};

export function connectSynthiaSocket(
  onMessage: (message: any) => void,
  onStatus?: (status: "connected" | "closed" | "error") => void
) {
  const socket = new WebSocket(SYNTHIA_WS_URL);

  socket.onopen = () => onStatus?.("connected");

  socket.onmessage = (event) => {
    try {
      onMessage(JSON.parse(event.data));
    } catch {
      onMessage(event.data);
    }
  };

  socket.onerror = () => onStatus?.("error");
  socket.onclose = () => onStatus?.("closed");

  return socket;
}
