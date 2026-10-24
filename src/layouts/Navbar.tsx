import { useState } from 'react'
import type { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Activity,
  Menu,
  X,
  Compass,
  AlertTriangle,
  HelpCircle,
  ShoppingBag,
  Users,
  Award,
  Sparkles,
} from 'lucide-react'
import { ROUTES } from '../routes/routeConstants'
import { mockCurrentUser } from '../data/mockData'
import { Badge } from '../components/ui/Badge'

export const Navbar: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: ROUTES.HOME, icon: Compass },
    { name: 'Issues', path: ROUTES.ISSUES, icon: AlertTriangle },
    { name: 'Peer Help', path: ROUTES.HELP, icon: HelpCircle },
    { name: 'Marketplace', path: ROUTES.MARKETPLACE, icon: ShoppingBag },
    { name: 'Clubs', path: ROUTES.CLUBS, icon: Users },
    { name: 'Contributions', path: ROUTES.CONTRIBUTIONS, icon: Award },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-500/15 bg-[#07040d]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="CampusPulse Home"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-700 via-fuchsia-600 to-purple-400 p-[1px] shadow-[0_0_20px_rgba(168,85,247,0.35)] group-hover:shadow-[0_0_25px_rgba(217,70,239,0.5)] transition-all">
            <div className="w-full h-full bg-[#0d071a] rounded-[11px] flex items-center justify-center">
              <Activity className="w-5 h-5 text-purple-300 group-hover:text-fuchsia-300 transition-colors animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white font-['Outfit']">
                Campus<span className="neon-text-accent">Pulse</span>
              </span>
              <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/30">
                v0.1
              </span>
            </div>
            <p className="text-[10px] text-purple-300/60 font-medium tracking-wide hidden sm:block">
              Collaborative Campus Intelligence
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 bg-purple-950/20 px-3 py-1.5 rounded-full border border-purple-500/15"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  active
                    ? 'bg-purple-600/30 text-white border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.25)]'
                    : 'text-purple-200/70 hover:text-white hover:bg-purple-900/30'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-fuchsia-300' : 'text-purple-400/70'}`} />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* User Status Chip */}
        <div className="hidden lg:flex items-center gap-3">
          <Badge variant="neon" dot>
            Network Live
          </Badge>
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-purple-950/40 border border-purple-500/20">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center font-bold text-xs text-white">
              {mockCurrentUser.name.charAt(0)}
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-white leading-tight">
                {mockCurrentUser.name}
              </div>
              <div className="text-[10px] text-fuchsia-300 flex items-center gap-1 font-mono">
                <Sparkles className="w-2.5 h-2.5" />
                {mockCurrentUser.contributionPoints} pts
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-purple-200 hover:text-white hover:bg-purple-950/50 border border-purple-500/20"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 border-b border-purple-500/20 bg-[#0b0617]/95 backdrop-blur-2xl">
          <div className="flex items-center justify-between py-3 border-b border-purple-500/10 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center text-xs font-bold text-white">
                {mockCurrentUser.name.charAt(0)}
              </div>
              <span className="text-sm font-semibold text-white">
                {mockCurrentUser.name}
              </span>
            </div>
            <Badge variant="neon">
              {mockCurrentUser.contributionPoints} points
            </Badge>
          </div>
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium ${
                    active
                      ? 'bg-purple-600/30 text-white border border-purple-500/40'
                      : 'text-purple-200/80 hover:text-white hover:bg-purple-950/40'
                  }`}
                >
                  <Icon className="w-4 h-4 text-purple-400" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
