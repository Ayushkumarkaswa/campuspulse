import type { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react'
import { mockEvents, mockClubs } from '../../data/mockData'
import { ROUTES } from '../../routes/routeConstants'
import { useInView } from '../../hooks/useInView'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

export const EventsShowcaseSection: FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 })

  return (
    <section
      id="events-showcase"
      ref={ref}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20"
    >
      <div
        className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-fuchsia-400" />
              <span className="text-xs uppercase tracking-widest text-fuchsia-300 font-mono font-semibold">
                CAMPUS HAPPENINGS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
              Featured Events & Clubs
            </h2>
            <p className="text-sm text-purple-200/70 mt-1 max-w-xl">
              Official club-sponsored events reviewed and approved by campus administration.
            </p>
          </div>
          <Link to={ROUTES.EVENTS}>
            <Button variant="outline" size="sm" className="gap-2">
              <span>View All Events</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Featured Event Card (col-span-2) */}
          <div className="lg:col-span-2">
            {mockEvents.map((event) => (
              <Card
                key={event.id}
                hoverEffect
                className="h-full border-purple-500/25 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-fuchsia-600/10 rounded-full blur-3xl -z-10" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <Badge variant="success" dot>
                      Verified & Approved
                    </Badge>
                    <span className="text-xs font-mono text-purple-300/80 bg-purple-950/60 px-2.5 py-1 rounded-lg border border-purple-500/20">
                      {event.clubName}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm text-purple-200/80 mt-2.5 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 pt-4 border-t border-purple-500/15">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Clock className="w-4 h-4 text-purple-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-purple-500/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-purple-300/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Submitted by {event.submittedBy}</span>
                  </div>
                  <Link to={ROUTES.EVENTS}>
                    <Button variant="primary" size="sm" className="gap-2">
                      <span>Register for Event</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Featured Clubs Preview Column */}
          <div className="space-y-4 flex flex-col justify-between">
            {mockClubs.map((club) => (
              <Card
                key={club.id}
                hoverEffect
                className="border-purple-500/20 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-fuchsia-300 bg-fuchsia-950/40 px-2 py-0.5 rounded border border-fuchsia-500/30">
                      {club.category} Society
                    </span>
                    <span className="text-xs font-semibold text-purple-300 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {club.memberCount} members
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white">{club.name}</h4>
                  <p className="text-xs text-purple-200/70 mt-1 leading-relaxed line-clamp-2">
                    {club.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-purple-500/15 flex items-center justify-between text-xs text-purple-400/80">
                  <span>Sec: {club.secretary}</span>
                  <Link
                    to={ROUTES.CLUBS}
                    className="text-purple-200 hover:text-white font-medium flex items-center gap-1"
                  >
                    Explore Club →
                  </Link>
                </div>
              </Card>
            ))}

            {/* Club Secretary Submission Access Notice */}
            <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 flex items-start gap-3 text-xs text-purple-200/80">
              <ShieldAlert className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Club Official Access:</strong>
                Only authorized secretaries & joint secretaries can submit events for administrative review.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
