/**
 * Centralized Route Path Registry for CampusPulse.
 * All navigation links throughout the application must reference these constants
 * rather than hardcoded string paths.
 */

export const ROUTES = {
  HOME: '/',
  ISSUES: '/issues',
  MARKETPLACE: '/marketplace',
  HELP: '/help',
  CLUBS: '/clubs',
  EVENTS: '/events',
  CLUB_DASHBOARD: '/club-dashboard',
  EVENT_ADMIN: '/admin/events',
  CAMPUS_MAP: '/map',
  CONTRIBUTIONS: '/contributions',
  PROFILE: '/profile',
} as const
