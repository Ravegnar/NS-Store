import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useFetch} from "./useFetch";
import {Loader} from "./Loader";
import {Operative} from "./Operative";
import {StoreNavigation} from "./StoreNavigation";
import {Footer} from "./Footer";
import {ProductInterface, SelectedInterface} from './type.d';

export const Operatives = () => {
  const [operatives, setOperatives] = useState<ProductInterface[]>([]);
  const [selected, setSelected] = useState<SelectedInterface>({
    image: "./O/About2.jpg",
    name: "Nanite Systems Operatives",
    classNames: "max-w-[75rem]",
    specialization: ""
  });
  const { get, loading } = useFetch(
    "https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/"
  );

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])
  
  useEffect(() => {
    get("NCO.json").then((data: any ) => {
      Object.keys(data).forEach(prod => {
        operatives.push(data[prod])
      });
      setOperatives(operatives);
    }).catch((error) => console.log("Could not load operatives", error));
  }, []);

  const handleSelect = (selectedOperative: SelectedInterface) => {
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
        {operatives.map((operative: ProductInterface) => {
          return (
            <Operative
              key={operative.id}
              operative={operative}
              onSelected={handleSelect}
            ></Operative>
          );
        })}
    </div>
    </section>
    <Footer />
  </>);
}