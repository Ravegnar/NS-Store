import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartValueSelector, addProduct, removeProduct, deleteProduct, showCart, onShowCart } from "./stores";

export const Cart = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartValueSelector)
  const openCart = useSelector(showCart);
  const cart = useSelector((state: any) => state.cart);

  const onProductAdd = (product: any) => {
    dispatch(addProduct(product));
  };

  const onProductRemove = (id: number) => {
    dispatch(removeProduct(id));
  };

  const onProductDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Transition.Root show={openCart} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => dispatch(onShowCart())}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col scrollbar-hide overflow-y-scroll bg-slate-900 shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-white hover:text-orange-500"
                            onClick={() => dispatch(onShowCart())}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          {cart.length === 0 && (
                            <p className='text-white'>You have not added any product to your cart yet.</p>
                          )}
                          <ul role="list" className="-my-6 divide-y divide-slate-600">
                            {cart.map((product: any) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 scrollbar-hide overflow-hidden rounded-md border border-slate-700">
                                  <img
                                    src={require("" + product.image)}
                                    alt={product.name}
                                    className="h-full w-full object-contain bg-slate-800 object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-cyan-600">
                                      <h3 className='font-bold'>
                                        <Link to={product.path}>{product.name}</Link>
                                      </h3>
                                      <p className="ml-4 text-white">${product.price.toLocaleString()}</p>
                                    </div>
                                    <div className="flex justify-between text-base font-medium text-white">
                                      <p className="mt-1 text-sm text-gray-300">{product.type}</p>
                                      <p className="mt-1 text-sm text-gray-300">total</p>
                                    </div>
                                    <div className="flex justify-between text-base font-medium text-white">
                                      <p className=""></p>
                                      <p className="">${(product.price * product.quantity).toLocaleString()}</p>
                                    </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className='flex align-middle'>
                                        <p className="text-gray-300 pr-2">Qty</p>
                                        <button className="text-cyan-700 pr-1 hover:text-cyan-500 font-medium  my-auto" onClick={() => onProductDelete(product.id)}>
                                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                          </svg>
                                        </button>
                                        <p className="text-gray-300 px-1">{product.quantity}</p>
                                        <button className="text-cyan-700 hover:text-cyan-500 font-medium  my-auto" onClick={() => onProductAdd(product)}>
                                          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                          </svg>
                                        </button>
                                      </div>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-cyan-600 hover:text-cyan-500"
                                        onClick={() => onProductRemove(product.id)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-700 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-white">
                        <p>Subtotal</p>
                        <p>${totalPrice.toLocaleString()}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-300">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <Link
                          to="/NS-Store/checkout"
                          className="flex items-center justify-center border border-transparent bg-cyan-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-700"
                          onClick={() => dispatch(onShowCart())}
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-3 flex justify-center text-center text-sm text-gray-300">
                        <p>
                          or
                          <br />
                          <button
                            type="button"
                            className="font-medium text-cyan-600 hover:text-cyan-500"
                            onClick={() => dispatch(onShowCart())}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
