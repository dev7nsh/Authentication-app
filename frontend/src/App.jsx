import React from 'react'

// import { TextRevealCard } from "./components/ui/text-reveal-card";
// import { HeroHighlight, Highlight} from "./components/ui/hero-highlight";
import { BackgroundBeams } from "./components/ui/background-beams";
import { FlipWords } from "./components/ui/flip-words";
``
const words = ["better", "cute", "beautiful", "modern"];

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
        <div className='flex-2/3 bg-black border-r border-white/10 relative'>
          {/* < BackgroundBeams/> */}
          
        </div> 

        {/* Right Section (InteractiveGradient) */}
        <div className='hidden md:flex flex-1/3 relative justify-center items-center  '>


          
           {/* < HeroHighlight /> */}
           < BackgroundBeams  />
          


          <div className="absolute text-center px-6 text-white ">
                {/* < TextRevealCard     text="You know the business"
                  revealText="I know the chemistry "/> */}

                    <div className=" flex  items-center px-4">
                    <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-left">
                      Build
                      <FlipWords words={words} /> <br />
                      websites with ME
                    </div>
                  </div>
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
