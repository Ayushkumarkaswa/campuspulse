/**
 * Core domain types for CampusPulse — Collaborative Campus Intelligence System
 */

export type UserRole = 'student' | 'club_secretary' | 'joint_secretary' | 'campus_admin'

export interface StudentUser {
  id: string
  name: string
  email: string
  studentId: string
  department: string
  year: number
  avatarUrl?: string
  role: UserRole
  assignedClubId?: string
  contributionPoints: number
  verifiedActivitiesCount: number
}

export type IssueCategory =
  | 'infrastructure'
  | 'lab_equipment'
  | 'cleanliness'
  | 'canteen'
  | 'library'
  | 'hostel'
  | 'other'

export type IssueStatus = 'reported' | 'investigating' | 'in_progress' | 'resolved'

export interface CampusIssue {
  id: string
  title: string
  description: string
  category: IssueCategory
  location: string
  status: IssueStatus
  upvotes: number
  reporterId: string
  createdAt: string
  updatedAt: string
}

export type HelpType = 'lost_found' | 'study_partner' | 'peer_help' | 'other_help'
export type HelpStatus = 'open' | 'matched' | 'resolved'

export interface HelpRequest {
  id: string
  type: HelpType
  title: string
  description: string
  urgency: 'low' | 'medium' | 'high'
  location?: string
  authorId: string
  status: HelpStatus
  createdAt: string
}

export type ItemCondition = 'like_new' | 'good' | 'fair'
export type ItemStatus = 'available' | 'reserved' | 'sold'

export interface MarketplaceItem {
  id: string
  title: string
  description: string
  price: number
  category: 'textbooks' | 'electronics' | 'draughting_kits' | 'stationery' | 'hostel_essentials' | 'other'
  condition: ItemCondition
  sellerId: string
  status: ItemStatus
  createdAt: string
}

export interface ClubInfo {
  id: string
  name: string
  tagline: string
  category: 'technical' | 'cultural' | 'sports' | 'social_welfare' | 'academics'
  secretary: string
  jointSecretary: string
  memberCount: number
  bannerGradient: string
}

export type EventStatus = 'draft' | 'pending_review' | 'approved' | 'rejected'

export interface CampusEvent {
  id: string
  clubId: string
  clubName: string
  title: string
  description: string
  date: string
  time: string
  venue: string
  registrationUrl?: string
  status: EventStatus
  submittedBy: string
  approvedBy?: string
  approvalNotes?: string
}

export interface ContributionActivity {
  id: string
  studentId: string
  title: string
  category: 'issue_resolution' | 'peer_tutoring' | 'campus_cleanup' | 'event_volunteering'
  points: number
  verifiedBy: string
  verifiedAt: string
  /** Explicit disclaimer: does not award academic marks or course credits */
  isAcademicCredit: false
}
