import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useFetch} from "./useFetch";
import {Loader} from "./Loader";
import {Operative} from "./Operative";
import {StoreNavigation} from "./StoreNavigation";
import {Footer} from "./Footer";

interface Selected {
  id?: number;
  image: string;
  name: string;
  classNames: string;
  specialization: string;
}

export const Operatives = (props:any) => {
  const [operatives, setOperatives] = useState([]);
  const [selected, setSelected] = useState<Selected>({
                                            image: "./O/About2.jpg",
                                            name: "Nanite Systems Operatives",
                                            classNames: "max-w-[75rem]",
                                            specialization: ""
                                          });
  const { get, loading } = useFetch(
    "https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/"
  );

  let saver: any = []
  
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])
  
  useEffect(() => {
    get("NCO.json").then((data: any ) => {
      Object.keys(data).forEach(prod => {
        saver.push(data[prod] as unknown)
      });
      setOperatives(saver);
    }).catch((error) => console.log("Could not load operatives", error));
  }, []);

  const handleSelect = (selectedOperative: any) => {
    setSelected(selectedOperative)
  }

  return (<>
    <section className="w-full min-h-[93vh]">
    <StoreNavigation />
      <div className="relative w-full max-h-[80vh] overflow-hidden my-4 sm:mt-4 mb-8">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          {selected.name}
        </h1>
        <p className="text-white text-center sm:mt-3 sm:mb-6 mb-4 min-h-[24px] tracking-widest">{selected.specialization}</p>
        <img className={`w-full ${selected.classNames} h-[60vh] border-4 mx-auto object-cover object-top`} src={require(`${selected.image}`)} />
      <div className="absolute bottom-0 flex w-full justify-center min-h-[5rem]">
        {selected.id && (
          <Link className="inline-block m-2 mb-6 min-w-[8rem] text-white border-4 backdrop-blur-md shadow-lg shadow-black py-2 px-6 uppercase font-semibold hover:bg-white hover:bg-opacity-25 hover:scale-110 transform duration-300 ease-in-out"
            to={`/NS-Store/store/NSO/${selected.id}`}>
              Preview 
          </Link>
        )}
      </div>
      </div>
      <div className="flex max-w-3xl mx-auto justify-evenly bg-slate-800 border-4">
        {loading && <Loader />}
        {operatives.map((operative: any) => {
          return (
            <Operative
              key={operative.id}
              operative={operative}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
              onSelected={handleSelect}
            ></Operative>
          );
        })}
    </div>
    </section>
    <Footer />
  </>);
}