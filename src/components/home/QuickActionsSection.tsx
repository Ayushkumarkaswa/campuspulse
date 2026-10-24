import type { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  HelpCircle,
  ShoppingBag,
  Users,
  Calendar,
  Award,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { ROUTES } from '../../routes/routeConstants'
import { useInView } from '../../hooks/useInView'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'

export const QuickActionsSection: FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 })

  const actions = [
    {
      title: 'Report a Campus Issue',
      desc: 'Report broken lab equipment, malfunctioning projectors, hygiene, and infrastructure with tracking.',
      icon: AlertTriangle,
      path: ROUTES.ISSUES,
      badge: 'Real-time Tracker',
      badgeVariant: 'warning' as const,
      color: 'from-amber-500/20 to-purple-900/40',
      iconColor: 'text-amber-400',
    },
    {
      title: 'Ask for Peer Help',
      desc: 'Lost & Found board, study partner discovery for semester exams, and student mutual assistance.',
      icon: HelpCircle,
      path: ROUTES.HELP,
      badge: 'Student Network',
      badgeVariant: 'info' as const,
      color: 'from-cyan-500/20 to-purple-900/40',
      iconColor: 'text-cyan-400',
    },
    {
      title: 'Student Marketplace',
      desc: 'Buy, sell, or trade semester textbooks, drafting calculators, and hostel essentials peer-to-peer.',
      icon: ShoppingBag,
      path: ROUTES.MARKETPLACE,
      badge: 'Zero Brokerage',
      badgeVariant: 'neon' as const,
      color: 'from-purple-500/20 to-fuchsia-900/40',
      iconColor: 'text-purple-400',
    },
    {
      title: 'Clubs & Committees',
      desc: 'Browse authorized campus technical and cultural societies, team rosters, and secretary contacts.',
      icon: Users,
      path: ROUTES.CLUBS,
      badge: '42+ Societies',
      badgeVariant: 'neon' as const,
      color: 'from-fuchsia-500/20 to-purple-900/40',
      iconColor: 'text-fuchsia-400',
    },
    {
      title: 'Campus Public Events',
      desc: 'Discover verified club tournaments, hackathons, and guest lectures approved by administration.',
      icon: Calendar,
      path: ROUTES.EVENTS,
      badge: 'Verified Calendar',
      badgeVariant: 'success' as const,
      color: 'from-emerald-500/20 to-purple-900/40',
      iconColor: 'text-emerald-400',
    },
    {
      title: 'Community Contributions',
      desc: 'Earn recognition badges and participation points for verified helpful campus initiatives.',
      icon: Award,
      path: ROUTES.CONTRIBUTIONS,
      badge: 'Honor Board',
      badgeVariant: 'neon' as const,
      color: 'from-violet-500/20 to-indigo-900/40',
      iconColor: 'text-violet-400',
    },
  ]

  return (
    <section
      id="explore-modules"
      ref={ref}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20"
    >
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            <span className="text-xs uppercase tracking-widest text-fuchsia-300 font-mono font-semibold">
              EXPLORE THE ECOSYSTEM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
            Core Campus Modules
          </h2>
          <p className="text-sm text-purple-200/70 mt-1 max-w-xl">
            Everything you need to navigate college life, collaborate with peers, and stay informed.
          </p>
        </div>
        <Badge variant="neon">Prototype v0.1</Badge>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {actions.map((item, index) => {
          const Icon = item.icon
          return (
            <Link
              key={index}
              to={item.path}
              className="group block focus:outline-none"
              aria-label={item.title}
            >
              <Card
                hoverEffect
                className="h-full flex flex-col justify-between border-purple-500/20 group-hover:border-purple-400/50 relative overflow-hidden"
              >
                {/* Background Corner Glow */}
                <div
                  className={`pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} blur-2xl group-hover:scale-125 transition-transform duration-500`}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300">
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <Badge variant={item.badgeVariant}>{item.badge}</Badge>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-purple-200/70 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs font-semibold text-purple-300 group-hover:text-fuchsia-300 transition-colors">
                  <span>Enter Module</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
