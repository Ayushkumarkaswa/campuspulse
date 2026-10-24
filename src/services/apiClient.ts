/**
 * Standard HTTP Client wrapper for future backend integration.
 * In this initial frontend-only phase, components use local sample data,
 * but this client structure ensures that replacing mock calls with real HTTP
 * calls is seamless and isolated from UI code.
 */

export interface ApiResponse<T> {
  data: T | null
  error: string | null
  status: number
}

export async function apiRequest<T>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    })

    if (!response.ok) {
      return {
        data: null,
        error: `HTTP Error ${response.status}: ${response.statusText}`,
        status: response.status,
      }
    }

    const data: T = await response.json()
    return { data, error: null, status: response.status }
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : 'Unknown network error',
      status: 0,
    }
  }
}
