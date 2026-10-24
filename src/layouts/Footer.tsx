import type { FC } from 'react'
import { Activity, ShieldCheck, Cpu } from 'lucide-react'

export const Footer: FC = () => {
  return (
    <footer className="w-full border-t border-purple-500/15 bg-[#050309] text-purple-200/60 py-10 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-purple-400" />
            <span className="font-bold text-sm text-white tracking-wide font-['Outfit']">
              CampusPulse System
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/30">
              Frontend Prototype v0.1
            </span>
          </div>
          <p className="text-xs text-purple-300/60 max-w-xl leading-relaxed">
            Collaborative campus intelligence and community coordination system.
            Designed to bridge students, clubs, and campus operations into a single real-time network.
          </p>
        </div>

        {/* Academic and Verification Disclaimer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs bg-purple-950/30 border border-purple-500/20 p-3 rounded-xl max-w-md">
          <ShieldCheck className="w-5 h-5 text-fuchsia-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-[11px] text-purple-200/80 leading-normal">
            <strong className="text-purple-100">Contribution Policy:</strong> Points reflect student-community helpfulness and do not grant official academic marks or course credits.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-400/50">
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-purple-500" />
          <span>React 19 + TypeScript + Vite + Tailwind CSS Architecture</span>
        </div>
        <p>© 2026 CampusPulse Project. Built for college collaboration.</p>
      </div>
    </footer>
  )
}
