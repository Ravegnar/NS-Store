import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {addProduct, removeProduct, deleteProduct} from "./stores";
import {ProductInterface, AppStateInterface} from './type.d';

interface Props {
  type: string
  details: ProductInterface
}

export const Product = ({type, details}: Props) => {
  const dispatch = useDispatch();
    
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
    (item) => item.id === details.id
  );
  const quantity = productFromCart ? productFromCart.quantity : 0;

  const pathname = `/NS-Store/store/NSW/${type}/${details.id}`

  return (<>
  {details.render && (
    <div className="flex flex-col place-content-between bg-slate-800 border-0 border-white overflow-hidden p-6">
      <Link to={pathname} >
        <div className="w-full h-36 overflow-hidden bg-slate-900 p-6 hover:p-2 hover:brightness-125 mb-4 transform duration-300 ease-in-out">
          <img
            src={require("" + details.image)}
            alt={details.name}
            className="h-full w-full object-contain object-center group-hover:opacity-75"
            />
        </div>
      </Link>

      <div className="flex-col">
        <div className="flex w-full justify-between items-baseline px-1">
          <Link to={pathname} className="text-cyan-700 hover:text-cyan-500 text-xl font-bold">
            {details.name}
          </Link>
          <p className="text-white font-medium pl-2">
            ${details.price.toLocaleString()}
          </p>
        </div>
        <div className="flex w-full justify-between items-center px-1">
          <p className="text-slate-300 tracking-widest">
            {details.type}
          </p>
        </div>
        <div className="flex w-full justify-between items-center px-1">

        {quantity > 0 && (<>
          <p className="flex items-baseline text-white">
            In cart 
            <button className="text-cyan-700 pl-2 pr-1 hover:text-cyan-500 font-medium  my-auto" onClick={() => onProductDelete(details.id)}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </button>
             {quantity} 
            <button className="text-cyan-700 hover:text-cyan-500 font-medium  my-auto" onClick={() => onProductAdd(details)}>
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            </button>
          </p>
          <button className="text-cyan-700 hover:text-cyan-500 font-medium" onClick={() => onProductRemove(details.id)}>
            remove
          </button>
          </>)}

        </div>
      </div>
        <div className="flex justify-center mt-auto">
          <button className="inline-block w-full mt-4 text-white border-4 py-2 px-6 uppercase font-semibold hover:bg-white hover:bg-opacity-25 hover:scale-105 transform duration-300 ease-in-out"
            onClick={() => onProductAdd({...details, path: pathname})}
          >
            Add to cart
          </button>
        </div>

    </div>
  )}
  </>)
}