import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export const RootLayout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#07040d] text-slate-100 relative selection:bg-purple-600 selection:text-white">
      {/* Ambient Glow Orbs */}
      <div
        className="pointer-events-none fixed top-[-10rem] left-[-10rem] w-[35rem] h-[35rem] rounded-full bg-purple-600/15 blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-[40%] right-[-12rem] w-[32rem] h-[32rem] rounded-full bg-fuchsia-600/10 blur-[140px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed bottom-[-10rem] left-[20%] w-[38rem] h-[38rem] rounded-full bg-violet-700/10 blur-[130px] -z-10"
        aria-hidden="true"
      />

      {/* Background Grid Pattern */}
      <div
        className="pointer-events-none fixed inset-0 bg-grid-pattern opacity-40 -z-10"
        aria-hidden="true"
      />

      {/* Main Header / Navigation */}
      <Navbar />

      {/* Page Content Outlet */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Application Footer */}
      <Footer />
    </div>
  )
}
