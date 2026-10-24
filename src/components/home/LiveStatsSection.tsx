import type { FC } from 'react'
import { Users, Building2, CheckCircle2, Award } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { useCountUp } from '../../hooks/useCountUp'

interface StatItemProps {
  icon: typeof Users
  endValue: number
  suffix?: string
  label: string
  sublabel: string
  enabled: boolean
  delay?: string
  accentColor: string
}

const StatItem: FC<StatItemProps> = ({
  icon: Icon,
  endValue,
  suffix = '',
  label,
  sublabel,
  enabled,
  accentColor,
}) => {
  const count = useCountUp({ end: endValue, enabled, duration: 1600 })

  return (
    <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-purple-500/20 relative overflow-hidden group">
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}
      />
      <div className="flex items-center justify-between mb-4">
        <span className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 group-hover:scale-105 transition-transform">
          <Icon className="w-5 h-5 text-purple-300" />
        </span>
        <span className="text-[10px] font-mono text-purple-300/60 uppercase tracking-widest">
          LIVE DEMO
        </span>
      </div>

      <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit'] flex items-baseline">
        <span>{count.toLocaleString()}</span>
        <span className="text-purple-400 text-2xl font-semibold ml-0.5">{suffix}</span>
      </div>

      <div className="mt-1 font-semibold text-sm text-slate-200">{label}</div>
      <div className="text-xs text-purple-300/60 mt-0.5">{sublabel}</div>
    </div>
  )
}

export const LiveStatsSection: FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2 })

  const stats = [
    {
      icon: Users,
      endValue: 1280,
      suffix: '+',
      label: 'Active Campus Students',
      sublabel: 'Connected across 8 engineering & arts departments',
      accentColor: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Building2,
      endValue: 42,
      suffix: '',
      label: 'Registered Clubs & Bodies',
      sublabel: 'Technical societies, cultural groups & sports committees',
      accentColor: 'from-fuchsia-500 to-purple-500',
    },
    {
      icon: CheckCircle2,
      endValue: 94,
      suffix: '%',
      label: 'Reported Issues Resolved',
      sublabel: 'Infrastructure, lab & facility complaints addressed',
      accentColor: 'from-emerald-400 to-teal-500',
    },
    {
      icon: Award,
      endValue: 3450,
      suffix: ' pts',
      label: 'Contribution Points Earned',
      sublabel: 'Peer tutoring, campus volunteering & verified help',
      accentColor: 'from-amber-400 to-fuchsia-500',
    },
  ]

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div
        className={`transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} enabled={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
