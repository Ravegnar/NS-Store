import {Footer} from "./Footer";
import {useEffect} from "react";
import about1 from "./O/About1.jpg";
import about2 from "./O/About2.jpg";
import about3 from "./O/Store.jpg";


export const About = () => {
    useEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [])

    return (<>
      <section className="relative flex justify-center overflow-x-hidden">
        <div className="absolute w-full h-[65vh] bg-slate-600 top-0 object-cover about">
        </div>
        <div className="relative flex justify-center h-full mt-[35vh] mx-[5vw] sm:mx-[15vw] p-0 w-full bg-slate-800 shadow-lg shadow-black mb-10">
          <div className="">
            <h1 className="text-white text-4xl sm:text-7xl text-center font-bold mb-10 px-6 sm:px-20 pt-6 sm:pt-20">
              Nanite Systems
            </h1>
            <p className="text-white text-md sm:text-2xl text-justify mb-10 px-6 sm:px-20">
              Nanite Systems was once a small company on Earth that researched and developed nanotechnology and worked with 
              the Terran Republic, building prefabricated buildings for the expeditions through the wormhole. Since 
              re-establishing business on Auraxis and being integral in the discovery and production of modern Nanite 
              technology, they have branched out to other industries such as rebirth technology, vehicle design, and 
              weapon design. Nanite Systems manages to stay neutral in the Auraxian War conflict by providing military 
              contract work to all three factions, plus providing the vital rebirthing services which keep Auraxians 
              immortal. Thus they have remained safe from takeover by any one faction. 
            </p>
            <img className="w-full h-[40vh] object-cover object-center pb-10" src={about1} />
            <p className="text-white text-md sm:text-2xl text-justify mb-10 px-6 sm:px-20">
              Nanite Systems produces a pool of common weapons, equipment, and vehicles that are available for all three empires. 
              Items created by Nanite Systems offer quite a large deal of customization options. All posts' banners and signs 
              revert to Nanite System's logo and colors when they are unowned by any empire.  
            </p>
            <img className="w-full h-[40vh] object-cover object-top pb-10" src={about2} />
            <p className="text-white text-md sm:text-2xl text-justify mb-10 px-6 sm:px-20">
              NS weapons have neutral color tones of tan, black, and white. The designs are a combination of every empires' 
              characteristics, serving as a middle ground between all three factions in terms of performance. The exception 
              to this rule are the pistols and rocket launchers, as these weapons have an emphasis on power over all else.  
            </p>
           <img className="w-full h-[60vh] object-cover object-center" src={about3} />
           </div>
        </div>
      </section>
    <Footer />
  </>)
}