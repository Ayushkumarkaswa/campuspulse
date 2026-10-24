import { useState } from 'react'
import type { FC } from 'react'
import {
  Activity,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Radio,
  ArrowRight,
  Database,
  Cpu,
  Boxes,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Input } from '../components/ui/Input'
import {
  mockCurrentUser,
  mockIssues,
  mockHelpRequests,
  mockClubs,
} from '../data/mockData'

export const PlaceholderHome: FC = () => {
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

  const plannedModules = [
    {
      title: 'Report an Issue',
      desc: 'Campus infrastructure, lab equipment & facility reporting with status tracking.',
      count: `${mockIssues.length} sample issues`,
    },
    {
      title: 'Peer Help & Lost Items',
      desc: 'Lost & found board, study partner matching, and peer assistance requests.',
      count: `${mockHelpRequests.length} active requests`,
    },
    {
      title: 'Clubs & Events',
      desc: 'Official club profiles, secretary submissions, and admin approval workflows.',
      count: `${mockClubs.length} registered clubs`,
    },
    {
      title: 'Student Marketplace',
      desc: 'Peer-to-peer campus marketplace for textbooks, drafting kits, and hostel essentials.',
      count: 'Safe student trade',
    },
    {
      title: 'Contributions & Recognition',
      desc: 'Verified helpfulness tracking with points (no automated academic credits).',
      count: `${mockCurrentUser.contributionPoints} pts earned`,
    },
    {
      title: 'Interactive Campus Map',
      desc: 'Spatial visualization of buildings, labs, venues, and active reports.',
      count: 'Phase 2 integration',
    },
  ]

  return (
    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      {/* Hero Badge & Headings */}
      <section className="text-center space-y-5 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs font-semibold shadow-[0_0_15px_rgba(168,85,247,0.25)]">
          <Radio className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" />
          <span>PHASE 1: FRONTEND FOUNDATION ESTABLISHED</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Campus<span className="neon-text-accent">Pulse</span>
        </h1>

        <p className="text-lg sm:text-xl text-purple-200/80 font-medium leading-relaxed">
          Collaborative Campus Intelligence System
        </p>

        <p className="text-sm sm:text-base text-purple-300/60 max-w-2xl mx-auto">
          The unified digital campus hub empowering students to report issues, find study partners,
          discover verified club events, trade student gear, and earn community recognition.
        </p>
      </section>

      {/* System Status Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </section>

      {/* Verification Checklist */}
      <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/25">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-purple-500/15">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-900/40 text-purple-300 border border-purple-500/30">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Foundation Verification Checklist</h2>
              <p className="text-xs text-purple-300/60">
                Ensuring system stability before feature development begins
              </p>
            </div>
          </div>
          <Badge variant="neon">Phase 1 Complete</Badge>
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
      </section>

      {/* Interactive Foundation Testing Area */}
      <section className="glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/25 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Boxes className="w-5 h-5 text-purple-400" />
            Interactive UI Primitives Test
          </h2>
          <p className="text-xs text-purple-300/60">
            Verify responsive button states, accessible inputs, and client-side reactive state
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
      </section>

      {/* Planned Feature Modules Preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-fuchsia-400" />
              Planned Application Modules
            </h2>
            <p className="text-xs text-purple-300/60">
              Architecture prepared for Phase 2 implementation
            </p>
          </div>
          <Badge variant="neon">Phase 2 Roadmap</Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plannedModules.map((module, index) => (
            <Card
              key={index}
              hoverEffect
              className="border-purple-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm text-white">{module.title}</h3>
                  <span className="text-[10px] text-fuchsia-300 font-mono bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                    {module.count}
                  </span>
                </div>
                <p className="text-xs text-purple-300/70 leading-relaxed">{module.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-500/10 flex items-center justify-between text-[11px] text-purple-400/80">
                <span>Status</span>
                <span className="flex items-center gap-1 text-purple-300">
                  Ready for building <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
