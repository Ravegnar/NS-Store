import {useState, useEffect} from "react";
import {NavLink, Routes, Route, useParams, useLocation} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {addProduct, removeProduct, deleteProduct} from "./stores";
import {ProductInterface, AppStateInterface} from './type.d';
import {OperativeDetailInfo} from "./OperativeDetailInfo";
import {OperativeDetailGear} from "./OperativeDetailGear";
import {OperativeDetailWeapons} from "./OperativeDetailWeapons";
import {useFetch} from "./useFetch";
import {Footer} from "./Footer";
import {StoreNavigation} from "./StoreNavigation";

export const OperativeDetails = () => {
  const dispatch = useDispatch();
  const [operative, setOperative] = useState<ProductInterface>();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [showImage, setShowImage] = useState(false);
  const params = useParams();
  const { pathname } = useLocation();
  const { get, loading } = useFetch(
    "https://nco-store-default-rtdb.europe-west1.firebasedatabase.app/NC-Store/"
  );
  
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [])

  useEffect(() => {
      get(`NCO/${params.id}.json`)
        .then((data: any) => {
            setOperative(data)
            setSelectedImage(data.image)
          })
          .catch((error) => console.log("Could not load operative details", error));
      }, [pathname]);

  const tabClasses = "flex-grow sm:w-1/3 text-white border-b-2 border-gray-300 py-2 text-lg px-1"

  const onProductAdd = (product: ProductInterface) => {
    dispatch(addProduct(product));
  };

  const onProductRemove = (id: number) => {
    dispatch(removeProduct(id));
  };

  const onProductDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const cart = useSelector((state: AppStateInterface) => state.cart);
  const productFromCart = cart.find(
    (item: ProductInterface) => item.id === operative?.id
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;


  return (<>
    {operative && (<>
      <section className="text-white body-font overflow-hidden">
        <StoreNavigation />
        <div className="container flex px-5 py-10 mx-auto">
          <div className="w-full justify-center items-stretch mx-auto flex flex-wrap">
            <div className="flex flex-col place-content-between lg:mr-4 lg:w-1/2 w-full max-w-[38rem] px-4 lg:min-h-[33rem] md:px-6 lg:px-10 py-4 md:py-8 lg:py-16 lg:pb-8 mb-6 lg:mb-0 bg-slate-800">
              <div>
                <h1 className="text-white text-center text-4xl title-font font-bold mb-2">{operative.name}</h1>
                <h2 className="text-sm title-font text-center text-white tracking-widest mb-4 lg:mb-8">{operative.specialization}</h2>
                <div className="flex text-center mb-4">
                  <NavLink
                    className={(navData) => navData.isActive ? `${tabClasses}  text-cyan-600 border-b-2 border-cyan-600` : `${tabClasses}` }
                    to={`/NS-Store/store/NSO/${operative.id}`} end>
                      Description
                  </NavLink>
                  <NavLink
                    className={(navData) => navData.isActive ? `${tabClasses}  text-cyan-600 border-b-2 border-cyan-600` : `${tabClasses}` }
                    to={`/NS-Store/store/NSO/${operative.id}/weapons`}>
                      Weapons
                  </NavLink>
                  <NavLink
                    className={(navData) => navData.isActive ? `${tabClasses}  text-cyan-600 border-b-2 border-cyan-600` : `${tabClasses}` }
                    to={`/NS-Store/store/NSO/${operative.id}/gear`}>
                      Gear
                  </NavLink>
                </div>
                <Routes>
                  <Route 
                    path="/"
                    element={<OperativeDetailInfo operative={operative} />}
                  />
                  <Route 
                    path="/weapons"
                    element={<OperativeDetailWeapons />}
                  />
                  <Route 
                    path="/gear"
                    element={<OperativeDetailGear />}
                  />
                </Routes>
              </div>

              <div>
                {quantity > 0 && (<>
                  <div className="flex mt-4 mb-2 items-baseline justify-between">
                    <p className="title-font font-medium text-white">In cart</p>
                    <div className="flex">
                      <button className="text-cyan-700 hover:text-cyan-500 font-medium  my-auto" onClick={() => onProductDelete(operative.id)}>
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <p className="text-white px-2 my-auto">{quantity}</p>
                      <button className="text-cyan-700 hover:text-cyan-500 font-medium" onClick={() => onProductRemove(operative.id)}>
                        remove
                      </button>
                    </div>
                  </div>
                </>)}
                <div className="flex items-baseline">
                  <span className="title-font font-medium text-2xl text-white">${operative.price && operative.price.toLocaleString()}</span>
                  <button className="flex ml-auto min-w-[8rem] mt-3 text-white border-4 py-2 px-2 sm:px-6 uppercase font-semibold hover:bg-white hover:bg-opacity-25 hover:scale-110 transform duration-300 ease-in-out"
                    onClick={() => onProductAdd({...operative, path: pathname})}>
                      Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:w-4/12 w-full max-w-[38rem] max-h-[46rem] lg:h-auto lg:px-6 p-6 lg:ml-4 h-auto bg-slate-800">
              {operative.image && (<>
                <div className="relative w-full h-4/5">
                  <div className="flex w-full h-full top-0 bg-black bg-opacity-40 hover:opacity-40 border-b-8 border-slate-800">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 scale-150 mx-auto my-auto">
                      <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5zm8.25-3.75a.75.75 0 01.75.75v2.25h2.25a.75.75 0 010 1.5h-2.25v2.25a.75.75 0 01-1.5 0v-2.25H7.5a.75.75 0 010-1.5h2.25V7.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute flex w-full h-full top-0 bg-black bg-opacity-60 hover:opacity-20 cursor-pointer">
                    <img src={require(`${selectedImage}`)} className="w-full h-full cursor-pointer border-b-8 border-slate-800 my-auto object-cover object-top bg-slate-900" onClick={() => setShowImage(true)} />
                  </div>
                </div>
                <div className="flex w-full h-1/5">
                  <img src={require(`${operative.image}`)} className="w-1/2 h-full border-r-8 border-t-8 cursor-pointer p-1 hover:p-0 border-slate-800 object-contain object-center bg-slate-900"
                    onClick={() => setSelectedImage(`${operative.image}`)} />
                  <img src={require(`${operative.gif}`)} className="w-1/2 h-full border-l-8 border-t-8 cursor-pointer p-1 hover:p-0 border-slate-800 object-contain object-center bg-slate-900" 
                    onClick={() => setSelectedImage(`${operative.gif}`)} />
                </div>
              </>)}
            </div>
          </div>
        </div>
        {showImage && (<>
        <div className="fixed flex top-0 z-50 w-full h-full bg-black bg-opacity-70" onClick={() => setShowImage(false)} >
          <img src={require(`${selectedImage}`)} className="w-auto max-h-[90vh] my-auto mx-auto object-cover object-top bg-slate-900" />
        </div>
        </>)}
      </section>
      <Footer />
    </>)}
  </>);
}
