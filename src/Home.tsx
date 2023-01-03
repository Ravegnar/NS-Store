import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {Footer} from "./Footer";
import {Loader} from "./Loader";
import NSO from './O/NSO.mp4'
import slide1 from './O/Slide1.jpg'
import slide2 from './O/Slide2.jpg'
import slide3 from './O/Slide3.jpg'

const slider = {
  slider1: [slide1, "Weapons", "weapons"],
  slider2: [slide2, "Equipment", "equipment"],
  slider3: [slide3, "Tools", "tools"]
}

export const Home = () => {
  const [slide, setSlide] = useState(slider.slider1);

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])

  const next = () => {
    if (slide === slider.slider1) return setSlide(slider.slider2)
    if (slide === slider.slider2) return setSlide(slider.slider3)
    if (slide === slider.slider3) return setSlide(slider.slider1)
  }
  const prev = () => {
    if (slide === slider.slider1) return setSlide(slider.slider3)
    if (slide === slider.slider2) return setSlide(slider.slider1)
    if (slide === slider.slider3) return setSlide(slider.slider2)
  }

  return (<>
    <section className="bg-gray-900 max-h-[93vh] overflow-y-auto snap snap-y snap-mandatory scrollbar-hide scroll-smooth">
      <header className="w-full snap-end snap-normal">
        <div className="relative">
          <div>
            <div className="relative flex flex-col w-full h-[93vh] justify-center items-center">
              <Loader />
              <h1 className="text-white font-bold text-3xl mt-6 mb-52">Video is loading</h1>
            </div>
            <video className="absolute w-full h-[93vh] object-cover object-top top-0" playsInline={true} autoPlay={true} muted={true} loop={true}>
              <source src={NSO} type="video/mp4" />
            </video>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-slate-900 opacity-30">
          </div>
          <div className="w-full max-h-[20vh] h-[93vh] absolute bottom-1/3 text-center">
            <h1 className="text-white text-5xl sm:text-7xl px-4 md:text-[8vw] font-bold uppercase mb-4 sm:mb-0 tracking-tight cursor-default">
              <span className="font-normal text-2xl sm:text-4xl md:text-[5vw] text-slate-100 normal-case">Welcome to</span><br/><strong>Nanite Systems</strong>
            </h1>
          </div>
        </div>
      </header>
      <section className="relative w-full h-[93vh] flex items-center justify-center bg-slate-800 snap-end snap-normal home-one">
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-slate-900 opacity-30">
        </div>
        <div className="container h-full mx-auto px-6 md:px-12 xl:px-32 flex items-end justify-center mb-20">
          <div className="text-center mb-8 text-white opacity-100 border-4 bg-opacity-40 bg-black backdrop-blur-sm backdrop-brightness-90">
            <div className="block shadow-lg p-4 md:p-6 lg:px-14">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-2 uppercase">
                Nanite Systems
              </h1>
              <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-4 sm:mb-4 text-slate-500">
                provide
              </h3>
              <p className="mb-2">
                Field robotics, Infantry gear, Vehicles, Medical, Consumer products, Battlefield systems, Facilities, Security, Aeronautics, Communications, Orbital defense systems, Industrial fabrication
              </p>
              <Link className="inline-block m-2 min-w-[8rem] text-white border-4 py-2 px-6 uppercase font-semibold hover:bg-white hover:bg-opacity-25 hover:scale-110 transform duration-300 ease-in-out"
                to="/NS-Store/about/">
                  Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[93vh] flex items-center lg:justify-start justify-center bg-cyan-800 snap-end snap-normal home-two">
        <div className="relative overflow-hidden bg-no-repeat bg-cover" >
        </div>
        <div className="container mb-2 h-4/5 w-4/5 lg:w-2/5 mx-0 lg:mx-20 flex items-end justify-center sm:justify-start">
          <div className="text-center text-white">
            <div className="block p-4 sm:p-8 xl:p-10 mx-0 xl:mr-14 shadow-lg backdrop-blur-lg border-4 lg:bg-transparent " >
              <h1 className="text-2xl md:text-5xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-12">Operatives are better<br /><span className="text-slate-500">than human soldiers </span></h1>
              <Link className="inline-block m-2 min-w-[8rem] text-white border-4 py-2 px-6 uppercase font-semibold hover:bg-white hover:bg-opacity-25 hover:scale-110 transform duration-300 ease-in-out"
                to="/NS-Store/store/NSO"  
              >
                Buy now
              </Link>
              <Link className="inline-block m-2 min-w-[8rem] text-white border-4 py-2 px-6 uppercase font-semibold hover:bg-white hover:bg-opacity-25 hover:scale-110 transform duration-300 ease-in-out"
                to="/NS-Store/store/NSO"  
              >
                Preview
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[93vh] flex flex-col items-center justify-center bg-emerald-800 snap-end snap-normal home-three backdrop">
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-slate-900 opacity-40">
        </div>
        <h2 className="relative text-center text-white font-bold text-2xl sm:text-4xl md:text-6xl mb-8 sm:p-4 mx-9">
          The best Weapons, Tools & Equipment
        </h2>
        <div className="container relative overflow-hidden w-full sm:w-4/5 h-2/5 sm:h-3/5 lg:h-4/6 mx-auto border-8 border-slate-900">
            <img className="w-full h-full object-cover object-center" src={slide[0]} alt="" />
            <div className="absolute px-5 flex h-full w-full top-0 left-0">
                <div className="my-auto w-full flex justify-between text-slate-300 font-bold">
                    <button onClick={prev} className="p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white hover:scale-125 transform duration-300 ease-in-out">
                        <path fillRule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button onClick={next} className="p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white hover:scale-125 transform duration-300 ease-in-out">
                        <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                </div>
            </div>
            <div className="absolute flex flex-col bottom-0 w-full">
              <Link className="hidden sm:block bottom-0 mx-auto mb-4 m-2 min-w-[12rem] text-center backdrop-blur-md text-white border-4 py-2 px-6 uppercase font-semibold hover:bg-white hover:bg-opacity-25 hover:scale-110 transform duration-300 ease-in-out"
                to={`/NS-Store/store/NSW/${slide[2]}`}>
                  Buy {slide[1]}
              </Link>
            </div>
        </div>
        <Link className="block sm:hidden bottom-0 mx-auto mt-10 m-2 min-w-[12rem] text-center backdrop-blur-md text-white border-4 py-2 px-6 uppercase font-semibold hover:bg-white hover:bg-opacity-25 hover:scale-110 transform duration-300 ease-in-out"
          to="/NS-Store/store/NSO">
            Buy {slide[1]}
        </Link>
      </section>
    <Footer />
  </section>
  </>)
}