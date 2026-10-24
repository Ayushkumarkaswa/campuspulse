import type { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '../ui/Button'
import { HeroVisual3D } from './HeroVisual3D'
import { ROUTES } from '../../routes/routeConstants'

export const HeroSection: FC = () => {
  const handleScrollToModules = () => {
    const el = document.getElementById('explore-modules')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToEvents = () => {
    const el = document.getElementById('events-showcase')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full pt-8 pb-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            {/* Small Glowing Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/35 text-purple-200 text-xs font-semibold shadow-[0_0_20px_rgba(168,85,247,0.3)] animate-hero-fade">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#d946ef] animate-pulse" />
              <span className="tracking-widest uppercase font-mono text-[11px] text-purple-200">
                YOUR CAMPUS. CONNECTED.
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] animate-hero-fade animation-delay-200">
              One Campus.{' '}
              <span className="block mt-1 neon-text-accent">
                Countless Possibilities.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-purple-200/80 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 animate-hero-fade animation-delay-300">
              Discover campus events, connect with student communities, exchange resources,
              and make campus life better together.
            </p>

            {/* Call to Actions with Stagger */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 animate-hero-fade animation-delay-400">
              <Button
                variant="primary"
                size="lg"
                onClick={handleScrollToModules}
                className="w-full sm:w-auto gap-2.5 shadow-purple-600/35 hover:shadow-purple-500/50"
              >
                <Compass className="w-4 h-4 text-purple-200" />
                <span>Explore CampusPulse</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-80" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={handleScrollToEvents}
                className="w-full sm:w-auto gap-2.5"
              >
                <Calendar className="w-4 h-4 text-fuchsia-300" />
                <span>Discover Events</span>
              </Button>
            </div>

            {/* Live Trust / Verified Highlights */}
            <div className="pt-6 border-t border-purple-500/15 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-purple-300/70 animate-hero-fade animation-delay-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Student Network</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                <span>Earn Community Recognition</span>
              </div>
              <Link
                to={ROUTES.ISSUES}
                className="text-purple-300 hover:text-white underline underline-offset-4 decoration-purple-500/40 transition-colors"
              >
                Quick Issue Tracker →
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Metallic Abstract Sculpture & Floating Satellites */}
          <div className="lg:col-span-5 relative flex items-center justify-center animate-hero-scale animation-delay-200">
            <HeroVisual3D />
          </div>
        </div>
      </div>
    </section>
  )
}
