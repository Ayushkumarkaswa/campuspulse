/**
 * Centralized API configuration for CampusPulse.
 *
 * When the backend is ready, set VITE_API_BASE_URL in a .env file.
 * UI components must never call raw URL strings directly;
 * instead, they should access data through the service layer.
 */

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1'

export const API_ENDPOINTS = {
  // Authentication & Profile (to be implemented with backend)
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    ME: `${API_BASE_URL}/auth/me`,
  },
  // Campus Issues
  ISSUES: {
    LIST: `${API_BASE_URL}/issues`,
    CREATE: `${API_BASE_URL}/issues`,
    BY_ID: (id: string) => `${API_BASE_URL}/issues/${id}`,
    VOTE: (id: string) => `${API_BASE_URL}/issues/${id}/vote`,
  },
  // Help Requests (Lost & Found, Study, Peer Help)
  HELP: {
    LIST: `${API_BASE_URL}/help`,
    CREATE: `${API_BASE_URL}/help`,
    BY_ID: (id: string) => `${API_BASE_URL}/help/${id}`,
  },
  // Marketplace
  MARKETPLACE: {
    LIST: `${API_BASE_URL}/marketplace`,
    CREATE: `${API_BASE_URL}/marketplace`,
    BY_ID: (id: string) => `${API_BASE_URL}/marketplace/${id}`,
  },
  // Clubs & Events
  CLUBS: {
    LIST: `${API_BASE_URL}/clubs`,
    BY_ID: (id: string) => `${API_BASE_URL}/clubs/${id}`,
  },
  EVENTS: {
    PUBLIC_APPROVED: `${API_BASE_URL}/events/public`,
    SUBMIT: `${API_BASE_URL}/events`,
    ADMIN_PENDING: `${API_BASE_URL}/events/pending`,
    APPROVE: (id: string) => `${API_BASE_URL}/events/${id}/approve`,
    REJECT: (id: string) => `${API_BASE_URL}/events/${id}/reject`,
  },
  // Contributions & Recognition
  CONTRIBUTIONS: {
    MY_ACTIVITIES: `${API_BASE_URL}/contributions/me`,
    LEADERBOARD: `${API_BASE_URL}/contributions/leaderboard`,
  },
} as const
