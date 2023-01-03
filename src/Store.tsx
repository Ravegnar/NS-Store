import {Link} from "react-router-dom";
import {Footer} from "./Footer";
import {useEffect} from "react";
import img1 from "./O/NSO/Inda.jpg";
import img2 from "./O/NSW/Weap.jpg";
import img3 from "./O/NSW/TOOL.jpg";
import img4 from "./O/NSW/EQ.jpg";

export const Store = () => {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])

  return (<>
      <section className="text-white py-2">
        <div className="flex w-full h-[59vh] sm:h-[50vh] overflow-hidden justify-center bg-slate-900">
          <Link className="w-full sm:w-8/12 overflow-hidden relative h-full bg-slate-800 hover:sm:border border-slate-300 sm:opacity-70 hover:opacity-95" to="/NS-Store/store/NSO">
            <img className="w-full h-full object-cover object-top hover:scale-110 transform duration-300 ease-in-out" src={img1} />
            <div className="absolute w-full flex flex-col bottom-0">
              <h2 className="bottom-0 mx-auto mb-2 sm:mb-10 m-2 text-white uppercase text-3xl font-bold">
                  Operatives
              </h2>
            </div>
          </Link>
        </div>
        <div className="flex w-full h-[25vh] sm:h-[37vh] justify-center bg-slate-900">
          <div className="flex w-full sm:w-8/12 h-full">

          <Link className="flex sm:m-2 sm:mt-4 sm:ml-0 relative w-1/3 h-full overflow-hidden bg-slate-600 hover:sm:border border-slate-300 sm:opacity-70 hover:opacity-95" to="/NS-Store/store/NSW/weapons">
              <img className="w-full h-full object-cover object-center hover:scale-110 transform duration-300 ease-in-out" src={img2} />
              <div className="absolute w-full flex flex-col bottom-0">
                <h2 className="bottom-0 mx-auto mb-2 sm:mb-10 m-2 text-white uppercase sm:text-3xl font-bold">
                    Weapons
                </h2>
              </div>
          </Link>
          <Link className="flex sm:m-2 sm:mt-4 relative w-1/3 h-full overflow-hidden bg-slate-600 hover:sm:border border-slate-300 sm:opacity-70 hover:opacity-95" to="/NS-Store/store/NSW/tools">
              <img className="w-full h-full object-cover object-center hover:scale-110 transform duration-300 ease-in-out" src={img3} />
              <div className="absolute w-full flex flex-col bottom-0">
                <h2 className="bottom-0 mx-auto mb-2 sm:mb-10 m-2 text-white uppercase sm:text-3xl font-bold">
                    Tools
                </h2>
              </div>
          </Link>
          <Link className="flex sm:m-2 sm:mr-0 sm:mt-4 relative w-1/3 h-full overflow-hidden bg-slate-600 hover:sm:border border-slate-300 sm:opacity-70 hover:opacity-95" to="/NS-Store/store/NSW/equipment">
              <img className="w-full h-full object-cover object-center hover:scale-110 transform duration-300 ease-in-out" src={img4} />
              <div className="absolute w-full flex flex-col bottom-0">
                <h2 className="bottom-0 mx-auto mb-2 sm:mb-10 m-2 text-white uppercase sm:text-3xl font-bold">
                    Equipment
                </h2>
              </div>
          </Link>

          </div>
        </div>
      </section>
      <Footer />
  </>);
}