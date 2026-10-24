import type { FC } from 'react'
import { BackgroundAmbience } from '../components/hero/BackgroundAmbience'
import { HeroSection } from '../components/hero/HeroSection'
import { LiveStatsSection } from '../components/home/LiveStatsSection'
import { QuickActionsSection } from '../components/home/QuickActionsSection'
import { EventsShowcaseSection } from '../components/home/EventsShowcaseSection'
import { RecentIssuesSection } from '../components/home/RecentIssuesSection'
import { FoundationStatusSection } from '../components/home/FoundationStatusSection'

export const HomePage: FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Layered Cybernetic Ambient Lighting & Micro-particles */}
      <BackgroundAmbience />

      {/* 1. Futuristic 3D Floating Object Hero Section */}
      <HeroSection />

      {/* 2. Live Campus Statistics with Animated Count-Up */}
      <LiveStatsSection />

      {/* 3. Core Campus Modules Quick-Action Triggers */}
      <QuickActionsSection />

      {/* 4. Featured Public Events & Clubs Showcase */}
      <EventsShowcaseSection />

      {/* 5. Live Campus Issue Tracker & Community Solvers Feed */}
      <RecentIssuesSection />

      {/* 6. Preserved Interactive Tests & Foundation Status */}
      <FoundationStatusSection />
    </div>
  )
}
