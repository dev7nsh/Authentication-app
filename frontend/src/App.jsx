import React from 'react'
import { InteractiveGradient } from "./components/lightswind/interactive-gradient"

const App = () => {
  return (
    <>
      {/* Header */}
      <header className='sticky top-0 z-50 bg-black border-b border-white/10'>
        <div className="navbar text-neutral-content">
          <button className="btn btn-ghost text-xl">Eater</button>
        </div>
      </header>

      {/* Main */}
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        {/* Left Section (Form) */}
        <div className='flex-1 bg-black border-r border-white/10 p-4'>
          {/* Your form content here */}
        </div>

        {/* Right Section (InteractiveGradient) */}
        <div className='flex-1 overflow-hidden'>
          <InteractiveGradient
            color="#107667ed"
            glowColor="#00458f8f"
            followMouse={true}
            hoverOnly={false}
            intensity={70}
            backgroundColor="#000000"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  )
}

export default App
