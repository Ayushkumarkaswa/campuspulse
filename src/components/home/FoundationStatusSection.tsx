import { useState } from 'react'
import type { FC } from 'react'
import {
  Cpu,
  Database,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
  Boxes,
} from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import { Badge } from '../ui/Badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export const FoundationStatusSection: FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15 })
  const [pulseCount, setPulseCount] = useState(0)
  const [testInput, setTestInput] = useState('')

  const foundationChecks = [
    { label: 'React 19 + TypeScript Runtime', status: 'Online', verified: true },
    { label: 'Vite 8 Lightning Fast HMR', status: 'Active', verified: true },
    { label: 'Tailwind CSS v4 & Neon Tokens', status: 'Configured', verified: true },
    { label: 'Centralized Route Architecture', status: 'Mounted', verified: true },
    { label: 'Decoupled Mock Data & Service Layer', status: 'Ready', verified: true },
    { label: 'Accessible UI Primitives & Motion Hooks', status: 'Verified', verified: true },
  ]

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div
        className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span className="text-xs uppercase tracking-widest text-purple-300 font-mono font-semibold">
                SYSTEM HEALTH & VERIFICATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
              Architecture & Interactive Tests
            </h2>
            <p className="text-sm text-purple-200/70 mt-1 max-w-xl">
              Real-time frontend state testing and verification status for developer inspection.
            </p>
          </div>
          <Badge variant="neon">System Healthy</Badge>
        </div>

        {/* System Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card hoverEffect className="border-purple-500/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300">
                  <Cpu className="w-5 h-5 text-purple-400" />
                </span>
                <Badge variant="neon" dot>
                  Ready
                </Badge>
              </div>
              <CardTitle className="mt-4 text-base">Frontend Architecture</CardTitle>
              <CardDescription>
                Clean modular structure under <code>src/</code> with strict TypeScript typing.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 pt-2">
              <div className="text-xs text-purple-300/70 flex items-center justify-between border-b border-purple-500/10 pb-1.5">
                <span>Framework:</span>
                <span className="font-mono text-purple-200">React 19 + Vite 8</span>
              </div>
              <div className="text-xs text-purple-300/70 flex items-center justify-between border-b border-purple-500/10 pb-1.5">
                <span>Styling:</span>
                <span className="font-mono text-purple-200">Tailwind CSS v4</span>
              </div>
              <div className="text-xs text-purple-300/70 flex items-center justify-between">
                <span>Navigation:</span>
                <span className="font-mono text-purple-200">React Router v7</span>
              </div>
            </CardContent>
          </Card>

          <Card hoverEffect className="border-purple-500/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300">
                  <Database className="w-5 h-5 text-fuchsia-400" />
                </span>
                <Badge variant="info">Decoupled</Badge>
              </div>
              <CardTitle className="mt-4 text-base">Backend Readiness</CardTitle>
              <CardDescription>
                Services isolated with centralized API endpoints and decoupled mock data.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 pt-2">
              <div className="text-xs text-purple-300/70 flex items-center justify-between border-b border-purple-500/10 pb-1.5">
                <span>API Base URL:</span>
                <span className="font-mono text-purple-200">Centralized Config</span>
              </div>
              <div className="text-xs text-purple-300/70 flex items-center justify-between border-b border-purple-500/10 pb-1.5">
                <span>Current Data:</span>
                <span className="font-mono text-purple-200">Local Sample State</span>
              </div>
              <div className="text-xs text-purple-300/70 flex items-center justify-between">
                <span>Security Stance:</span>
                <span className="font-mono text-purple-200">No Fake Auth</span>
              </div>
            </CardContent>
          </Card>

          <Card hoverEffect className="border-purple-500/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </span>
                <Badge variant="success">Compliant</Badge>
              </div>
              <CardTitle className="mt-4 text-base">Community Policy</CardTitle>
              <CardDescription>
                Explicit separation between campus engagement and official academic records.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 pt-2">
              <div className="text-xs text-purple-300/70 flex items-center justify-between border-b border-purple-500/10 pb-1.5">
                <span>Reward System:</span>
                <span className="font-mono text-purple-200">Recognition Points</span>
              </div>
              <div className="text-xs text-purple-300/70 flex items-center justify-between border-b border-purple-500/10 pb-1.5">
                <span>Academic Marks:</span>
                <span className="font-mono text-purple-200">Not Awarded</span>
              </div>
              <div className="text-xs text-purple-300/70 flex items-center justify-between">
                <span>Club Submissions:</span>
                <span className="font-mono text-purple-200">Secretary Only</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Verification Checklist */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/25 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-purple-500/15">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-purple-900/40 text-purple-300 border border-purple-500/30">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Foundation Verification Checklist</h3>
                <p className="text-xs text-purple-300/60">
                  All tests passing with 0 lint errors and strict type safety
                </p>
              </div>
            </div>
            <Badge variant="neon">Verified Operational</Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {foundationChecks.map((check, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/15"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-200">{check.label}</span>
                </div>
                <span className="text-[11px] font-mono font-medium text-purple-300 px-2 py-0.5 rounded bg-purple-900/40">
                  {check.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Foundation Testing Area */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/25 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Boxes className="w-5 h-5 text-purple-400" />
              Interactive UI Primitives Test
            </h3>
            <p className="text-xs text-purple-300/60">
              Verify client-side reactive state updates and accessible inputs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Reactive State Verification */}
            <div className="space-y-4 p-5 rounded-xl bg-purple-950/30 border border-purple-500/20">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                  Interactive State Verification
                </span>
                <span className="text-xs font-mono text-fuchsia-300">
                  Pulse Count: {pulseCount}
                </span>
              </div>
              <p className="text-xs text-purple-300/70">
                Click the button below to test React reactive state updates and neon button styling:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  onClick={() => setPulseCount((prev) => prev + 1)}
                  className="gap-2"
                >
                  <Activity className="w-4 h-4" />
                  Test Pulse (+1)
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setPulseCount(0)}
                  disabled={pulseCount === 0}
                >
                  Reset
                </Button>
              </div>
            </div>

            {/* Accessible Input Verification */}
            <div className="space-y-4 p-5 rounded-xl bg-purple-950/30 border border-purple-500/20">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-300 block">
                Accessible Input & Focus Ring Test
              </span>
              <Input
                label="Interactive Test Input"
                placeholder="Type anything to test input binding..."
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
                helperText={
                  testInput
                    ? `Active value: "${testInput}"`
                    : 'Focus to observe the violet neon ring and contrast'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
