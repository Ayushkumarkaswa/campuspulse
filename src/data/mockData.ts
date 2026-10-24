import type {
  StudentUser,
  CampusIssue,
  HelpRequest,
  MarketplaceItem,
  ClubInfo,
  CampusEvent,
  ContributionActivity,
} from '../types'

export const mockCurrentUser: StudentUser = {
  id: 'usr_01',
  name: 'Aarav Sharma',
  email: 'aarav.sharma@campus.edu',
  studentId: '2024CS1042',
  department: 'Computer Science & Engineering',
  year: 3,
  role: 'student',
  contributionPoints: 340,
  verifiedActivitiesCount: 8,
}

export const mockIssues: CampusIssue[] = [
  {
    id: 'iss_01',
    title: 'Faulty Projector in Lecture Hall 3B',
    description: 'The HDMI connection is flickering and the projection bulb repeatedly turns off during class presentations.',
    category: 'infrastructure',
    location: 'Academic Block B, Room 302',
    status: 'in_progress',
    upvotes: 24,
    reporterId: 'usr_01',
    createdAt: '2026-10-20T10:30:00Z',
    updatedAt: '2026-10-22T14:15:00Z',
  },
  {
    id: 'iss_02',
    title: 'Broken Oscilloscope in Electrical Circuits Lab',
    description: 'Bench 4 digital storage oscilloscope has a cracked channel 1 connector and fails calibration.',
    category: 'lab_equipment',
    location: 'Engineering Lab 2, Bench 4',
    status: 'reported',
    upvotes: 18,
    reporterId: 'usr_02',
    createdAt: '2026-10-22T08:00:00Z',
    updatedAt: '2026-10-22T08:00:00Z',
  },
  {
    id: 'iss_03',
    title: 'Drinking Water Cooler Filter Replacement Needed',
    description: 'The filter indicator light on 2nd floor library cooler is red and water flow is restricted.',
    category: 'cleanliness',
    location: 'Central Library, 2nd Floor',
    status: 'resolved',
    upvotes: 42,
    reporterId: 'usr_03',
    createdAt: '2026-10-18T16:20:00Z',
    updatedAt: '2026-10-21T11:00:00Z',
  },
]

export const mockHelpRequests: HelpRequest[] = [
  {
    id: 'hlp_01',
    type: 'lost_found',
    title: 'Lost Black Casio Scientific Calculator (fx-991EX)',
    description: 'Left it on the desk in Mechanical Workshop after the 3 PM CAD lab session yesterday.',
    urgency: 'high',
    location: 'Mechanical Workshop Block',
    authorId: 'usr_04',
    status: 'open',
    createdAt: '2026-10-23T09:15:00Z',
  },
  {
    id: 'hlp_02',
    type: 'study_partner',
    title: 'Looking for Operating Systems Exam Study Partner',
    description: 'Targeting Peterson algorithm, page replacement, and CPU scheduling algorithms.',
    urgency: 'medium',
    location: 'Central Library Discussion Room 3',
    authorId: 'usr_01',
    status: 'open',
    createdAt: '2026-10-22T15:00:00Z',
  },
]

export const mockClubs: ClubInfo[] = [
  {
    id: 'clb_01',
    name: 'Pulse Robotics & AI Society',
    tagline: 'Building autonomous robots, intelligent drones, and machine vision systems.',
    category: 'technical',
    secretary: 'Priya Verma',
    jointSecretary: 'Karan Patel',
    memberCount: 145,
    bannerGradient: 'from-purple-900/60 to-violet-950/80',
  },
  {
    id: 'clb_02',
    name: 'Campus Developer Collective',
    tagline: 'Open source software, hackathons, and web3 innovations.',
    category: 'technical',
    secretary: 'Rohan Mehra',
    jointSecretary: 'Sneha Rao',
    memberCount: 220,
    bannerGradient: 'from-fuchsia-950/60 to-purple-900/70',
  },
]

export const mockEvents: CampusEvent[] = [
  {
    id: 'evt_01',
    clubId: 'clb_01',
    clubName: 'Pulse Robotics & AI Society',
    title: 'RoboWars 2026: Autonomous Combat Arena',
    description: 'Annual inter-college robot combat and autonomous obstacle navigation tournament.',
    date: '2026-11-14',
    time: '10:00 AM - 5:00 PM',
    venue: 'Campus Open Air Auditorium',
    status: 'approved',
    submittedBy: 'Priya Verma (Secretary)',
    approvedBy: 'Dean of Student Affairs',
    approvalNotes: 'Approved for campus-wide participation.',
  },
]

export const mockMarketplace: MarketplaceItem[] = [
  {
    id: 'mkt_01',
    title: 'Digital Signal Processing by Oppenheim (4th Edition)',
    description: 'Barely used, clean pages with no pencil markings. Essential for ECE 5th Sem.',
    price: 350,
    category: 'textbooks',
    condition: 'like_new',
    sellerId: 'usr_05',
    status: 'available',
    createdAt: '2026-10-21T18:45:00Z',
  },
]

export const mockContributions: ContributionActivity[] = [
  {
    id: 'cnt_01',
    studentId: 'usr_01',
    title: 'Reported and verified faulty fire extinguisher in Lab 4',
    category: 'issue_resolution',
    points: 50,
    verifiedBy: 'Campus Safety Cell',
    verifiedAt: '2026-10-15T12:00:00Z',
    isAcademicCredit: false,
  },
  {
    id: 'cnt_02',
    studentId: 'usr_01',
    title: 'Conducted 3-hour peer tutoring for Data Structures lab',
    category: 'peer_tutoring',
    points: 90,
    verifiedBy: 'HOD Computer Science',
    verifiedAt: '2026-10-18T16:30:00Z',
    isAcademicCredit: false,
  },
]
