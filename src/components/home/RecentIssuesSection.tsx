import type { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  Award,
  ChevronUp,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import { mockIssues, mockContributions } from '../../data/mockData'
import { ROUTES } from '../../routes/routeConstants'
import { useInView } from '../../hooks/useInView'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'

export const RecentIssuesSection: FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'resolved':
        return <Badge variant="success" dot>Resolved</Badge>
      case 'in_progress':
        return <Badge variant="warning" dot>In Progress</Badge>
      default:
        return <Badge variant="neon" dot>Reported</Badge>
    }
  }

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div
        className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (Col 7): Live Campus Issue Tracker */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-mono font-semibold">
                    CAMPUS PULSE TRACKER
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight font-['Outfit']">
                  Recent Facility Reports
                </h3>
              </div>
              <Link to={ROUTES.ISSUES}>
                <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                  <span>Report Issue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {mockIssues.map((issue) => (
                <Card
                  key={issue.id}
                  hoverEffect
                  className="border-purple-500/20 p-5 flex items-start gap-4"
                >
                  {/* Upvote Pill */}
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-purple-950/50 border border-purple-500/30 text-purple-200 min-w-[50px] shrink-0">
                    <ChevronUp className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold font-mono text-white">{issue.upvotes}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-mono text-purple-300 uppercase tracking-wide">
                        {issue.category.replace('_', ' ')}
                      </span>
                      {getStatusBadge(issue.status)}
                    </div>

                    <h4 className="text-base font-bold text-white leading-snug truncate">
                      {issue.title}
                    </h4>
                    <p className="text-xs text-purple-200/70 mt-1 line-clamp-2">
                      {issue.description}
                    </p>

                    <div className="flex items-center gap-4 mt-3 text-[11px] text-purple-300/60">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        <span>{issue.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-purple-400" />
                        <span>Updated recently</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column (Col 5): Community Recognition & Contributions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-fuchsia-400" />
                  <span className="text-xs uppercase tracking-widest text-fuchsia-300 font-mono font-semibold">
                    COMMUNITY RECOGNITION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight font-['Outfit']">
                  Verified Solvers
                </h3>
              </div>
              <Link to={ROUTES.CONTRIBUTIONS}>
                <Badge variant="neon">Honor Board</Badge>
              </Link>
            </div>

            <Card className="border-purple-500/25 p-6 space-y-5">
              <div className="space-y-4">
                {mockContributions.map((contrib) => (
                  <div
                    key={contrib.id}
                    className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/15 flex items-start justify-between gap-3"
                  >
                    <div>
                      <h5 className="text-xs font-bold text-white leading-normal">
                        {contrib.title}
                      </h5>
                      <div className="text-[11px] text-purple-300/60 mt-1 flex items-center gap-2">
                        <span>Verified by {contrib.verifiedBy}</span>
                      </div>
                    </div>
                    <Badge variant="neon" className="shrink-0 font-mono">
                      +{contrib.points} pts
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Explicit Academic Disclaimer */}
              <div className="p-4 rounded-xl bg-[#090514] border border-purple-500/20 text-xs text-purple-300/70 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-purple-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Contribution Points Policy</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  CampusPulse recognition points celebrate helpful student actions.
                  Points are intended for campus community standing and <strong>never award official academic marks or degree credits</strong>.
                </p>
              </div>

              <Link to={ROUTES.CONTRIBUTIONS} className="block pt-2">
                <Button variant="secondary" className="w-full text-xs gap-2">
                  <span>View Full Recognition Board</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
