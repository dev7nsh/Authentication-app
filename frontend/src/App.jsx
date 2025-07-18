import React from 'react'

import { TextRevealCard } from "./components/ui/text-reveal-card";
import { HeroHighlight, Highlight} from "./components/ui/hero-highlight";
import { BackgroundBeams } from "./components/ui/background-beams";

const App = () => {
  return (
    <>
      {/* Header */}
      <header className='sticky top-0 z-50 border-b border-white/10'>
        <div className="navbar text-neutral-content">
          <button className="btn btn-ghost text-3xl ">Eater</button>
        </div>
      </header>

      {/* Main */}
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        {/* Left Section (Form) */}
        <div className='flex-1 bg-black border-r border-white/10 relative'>
          < BackgroundBeams/>
        </div> 

        {/* Right Section (InteractiveGradient) */}
        <div className='hidden md:flex flex-1 relative justify-center items-center  '>

           < HeroHighlight />
          
          <div className="absolute text-center px-6 text-white ">
            {/* < TextRevealCard     text="You know the business"
              revealText="I know the chemistry "/> */}
    
         </div>

      
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
            <p className="text-sm text-center">Made with ❤️ by Devansh <br/>
            [HOVER HERE]
            
            </p>
          </div>
      
      </div>

      
      
      
     
     

     
      </div>
    </>
  )
}

export default App
