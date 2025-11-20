import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen grid md:grid-cols-[1fr_480px] grid-cols-1">
      {/* Left: Brand / Visual */}
      <div className="relative min-h-[60vh] md:min-h-screen overflow-hidden" style={{background: 'radial-gradient(circle at top left, #1e3a8a, #0f172a)'}}>
        {/* Spline 3D scene */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Soft gradient glow overlay (doesn't block interaction) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent" />

        {/* Copy block */}
        <div className="relative z-10 h-full flex items-start md:items-center">
          <div className="px-10 md:px-20 py-16 md:py-20 max-w-3xl text-white/90 pointer-events-none">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-white/10 text-white/80 px-3 py-1 text-xs font-medium ring-1 ring-white/20 backdrop-blur-sm">
                Wealth Intelligence
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Your RiskIQ Report is ready.
            </h1>
            <p className="text-base md:text-lg text-blue-100/90 mb-8 max-w-2xl">
              "You've identified your risk tolerance. Now let's see if your actual portfolio matches it."
            </p>

            <ul className="space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span>🔍</span>
                <span className="text-blue-100">The X-Ray: Connect 150+ brokerages for an instant, unbiased audit.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>⚖️</span>
                <span className="text-blue-100">The Alignment: See exactly where your holdings drift from your goals.</span>
              </li>
              <li className="flex items-start gap-3">
                <span>🛡️</span>
                <span className="text-blue-100">The Fix: Get institutional-grade adjustments to secure your future.</span>
              </li>
            </ul>

            <div className="mt-10 text-xs md:text-sm text-blue-100/80">
              Join 2,500+ Canadians managing $500M+ in assets.
            </div>
          </div>
        </div>
      </div>

      {/* Right: Auth Panel */}
      <div className="bg-[#f9fafb] flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white shadow-sm rounded-2xl border border-gray-200/70 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Sign in</h2>
            <p className="text-sm text-gray-600 mt-1">Continue to your Wealth Intelligence dashboard</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600/40 transition"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                required
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600/40 transition"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-[#001F5B] text-white font-semibold shadow-sm hover:brightness-110 active:brightness-95 transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="h-px flex-1 bg-gray-200" />
              <span>or continue with</span>
              <span className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                  <path fill="#000" d="M17.805 3.559A9.5 9.5 0 1019.5 12h-8V7.5h8a9.49 9.49 0 00-1.695-3.941z"/>
                </svg>
                Google
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                  <path fill="#000" d="M16.365 1.43c.102.733-.214 1.475-.74 2.027-.528.553-1.257.874-2.01.81-.108-.746.223-1.51.75-2.063.518-.567 1.37-.906 2-.774zM21 18.5c-.39.877-.857 1.705-1.393 2.473-.606.867-1.315 1.657-2.11 2.35-.734.629-1.599 1.141-2.513 1.151-.88.021-1.16-.543-2.162-.543s-1.31.522-2.17.563c-.935.029-1.83-.563-2.575-1.193-1.047-.9-1.916-2.033-2.566-3.31C3.305 16.875 2.84 12.585 4.78 10.1c.912-1.201 2.34-1.96 3.844-1.992.901-.019 1.75.61 2.262.61.502 0 1.615-.75 2.727-.64.465.02 1.848.19 2.72 1.437-.072.05-1.62.948-1.6 2.818.02 2.256 1.977 3.007 2.004 3.02-.02.06-.315 1.08.36 2.09.315.49.877 1.21 1.608 1.19.66-.02 1.112-.23 1.113-.23z"/>
                </svg>
                Apple
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-gray-500">
            By continuing you agree to our Terms and Privacy Policy.
          </div>

          <div className="mt-6">
            <a href="/test" className="block text-center text-xs text-blue-700 hover:underline">Check backend connection</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
