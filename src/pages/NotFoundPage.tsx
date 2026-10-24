import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle, ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { ROUTES } from '../routes/routeConstants'

export const NotFoundPage: FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-6 text-center">
      <div className="glass-panel p-8 sm:p-12 rounded-2xl max-w-md w-full border border-purple-500/30 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center mx-auto text-fuchsia-400">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-white">Section In Progress</h1>
          <p className="text-sm text-purple-200/70">
            This module is part of the planned CampusPulse roadmap and will be implemented in subsequent phases.
          </p>
        </div>
        <Link to={ROUTES.HOME} className="inline-block">
          <Button variant="primary" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Foundation Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
