import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { cartValueSelector } from "./stores";
import { Link } from "react-router-dom";
import {Footer} from "./Footer";

export const Checkout = () => {
    const totalPrice = useSelector(cartValueSelector)
    const cart = useSelector((state: any) => state.cart);

    const [showModal, setShowModal] = useState(false);
    const [checkInfo, setCheckInfo] = useState("block");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [card, setCard] = useState("");
    const [validation,setValidation] = useState("")
    
    const handleCheckInfo = () => {
        setCheckInfo("hidden")
    }

    const handleOnSubmit = (e: any) => {
        e.preventDefault()

        if (!name) {
            setValidation("Please enter a name");
            return ;
        }
        if (!email) {
            setValidation("Please enter a email");
            return ;
        }
        if (!address) {
            setValidation("Please enter a address");
            return ;
        }
        if (!city) {
            setValidation("Please enter a city");
            return ;
        }
        if (!state) {
            setValidation("Please enter a state");
            return ;
        }
        if (!zip) {
            setValidation("Please enter a zip");
            return ;
        }
        if (!country) {
            setValidation("Please enter a country");
            return ;
        }
        if (!card) {
            setValidation("Please enter a card");
            return ;
        }

        setShowModal(true)
        localStorage.clear();
    }

    useEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [])

    return (<>
    <div className="grid grid-cols-5 bg-slate-900 items-start">
        <div className="lg:col-span-3 col-span-5 bg-slate-800 lg:mx-24 xl:mx-32 my-6 sm:m-6 sm:p-10 sm:pt-0 p-4 pt-0 space-y-8">
            <div className={`${checkInfo} p-4 mt-10 relative flex flex-col sm:flex-row sm:items-center bg-slate-700 shadow rounded-md`}>
                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div className="text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="text-sm font-medium ml-3 text-white">Checkout</div>
                </div>
                <div className="text-sm tracking-wide text-gray-300 mt-4 sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                    <svg className="w-6 h-6" onClick={handleCheckInfo} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
                <form id="payment-form" method="POST" action="" className="mt-0" onSubmit={handleOnSubmit}>
                    <div className="rounded-md">
                        <section>
                            <h2 className="uppercase tracking-wide text-lg font-semibold text-white my-2">Shipping & Billing Information</h2>
                            <fieldset className="mb-3 bg-slate-700 shadow-lg rounded text-white overflow-x-hidden">
                                <label className="flex border-b border-slate-500 h-12 py-3 items-center mr-auto">
                                    <span className="text-right pl-4">Name</span>
                                    <input value={name} onChange={e => setName(e.target.value)} name="name" className="focus:outline-none bg-slate-700 pl-4" placeholder="Try Odinsson" />
                                </label>
                                <label className="flex border-b border-slate-500 h-12 py-3 items-center">
                                    <span className="text-right pl-4">Email</span>
                                    <input value={email} name="email" onChange={e => setEmail(e.target.value)} type="email" className="focus:outline-none bg-slate-700 pl-4" placeholder="try@example.com" />
                                </label>
                                <label className="flex border-b border-slate-500 h-12 py-3 items-center">
                                    <span className="text-right pl-4">Address</span>
                                    <input value={address} name="address" onChange={e => setAddress(e.target.value)} className="focus:outline-none bg-slate-700 pl-4" placeholder="10 Street XYZ 654" />
                                </label>
                                <label className="flex border-b border-slate-500 h-12 py-3 items-center">
                                    <span className="text-right pl-4">City</span>
                                    <input value={city} name="city" onChange={e => setCity(e.target.value)} className="focus:outline-none bg-slate-700 pl-4" placeholder="San Francisco" />
                                </label>
                                <label className="inline-flex w-2/4 border-slate-500 py-3">
                                    <span className="text-right pl-4">State</span>
                                    <input value={state} name="state" onChange={e => setState(e.target.value)} className="focus:outline-none bg-slate-700 pl-4" placeholder="CA" />
                                </label>
                                <label className="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-slate-500">
                                    <span className="text-right px-4 xl:px-0 xl:text-none">ZIP</span>
                                    <input value={zip} name="postal_code" onChange={e => setZip(e.target.value)} className="focus:outline-none bg-slate-700 pl-4" placeholder="98603" />
                                </label>
                                <label className="flex border-t border-slate-500 h-12 py-3 items-center select relative">
                                    <span className="text-right pl-4">Country</span>
                                    <div id="country" className="focus:outline-none px-3 w-full flex items-center">
                                        <select value={country} name="country" onChange={e => setCountry(e.target.value)} className="border-none bg-slate-700 flex-1 cursor-pointer appearance-none focus:outline-none">
                                            <option>Choose a country</option>
                                            <option value="AU">Australia</option>
                                            <option value="BE">Belgium</option>
                                            <option value="BR">Brazil</option>
                                            <option value="CA">Canada</option>
                                            <option value="CN">China</option>
                                            <option value="CZ">Czech republic</option>
                                            <option value="DK">Denmark</option>
                                            <option value="FI">Finland</option>
                                            <option value="FR">France</option>
                                            <option value="DE">Germany</option>
                                            <option value="HK">Hong Kong</option>
                                            <option value="IE">Ireland</option>
                                            <option value="IT">Italy</option>
                                            <option value="JP">Japan</option>
                                            <option value="LU">Luxembourg</option>
                                            <option value="MX">Mexico</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="PL">Poland</option>
                                            <option value="PT">Portugal</option>
                                            <option value="SG">Singapore</option>
                                            <option value="ES">Spain</option>
                                            <option value="TN">Tunisia</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="US">United States</option>
                                        </select>
                                    </div>
                                </label>
                            </fieldset>
                        </section>
                    </div>
                    <div className="rounded-md">
                        <section>
                            <h2 className="uppercase tracking-wide text-lg font-semibold text-white my-2">Payment Information</h2>
                            <fieldset className="mb-3 bg-slate-700 shadow-lg rounded text-white">
                                <label className="flex border-b border-slate-500 h-12 py-3 items-center">
                                    <span className="text-right pl-4">Card</span>
                                    <input value={card} name="card" onChange={e => setCard(e.target.value)} className="focus:outline-none bg-slate-700 pl-4 w-full" placeholder="Card number MM/YY CVC" />
                                </label>
                            </fieldset>
                        </section>
                    </div>
                    <div className="validation-message text-red-700 my-2">{validation}
                    </div>
                    {cart.length > 0 && (
                        <input type="submit" className="submit-button px-4 py-3 bg-cyan-800 hover:bg-cyan-700 text-white focus:outline-none w-full text-xl font-semibold transition-colors" value={"Pay $" + totalPrice.toLocaleString()} />
                    )}
                </form>
        </div>
        <div className="col-span-2 bg-slate-800 lg:block hidden m-6">
            <h1 className="py-6 border-b-2 text-xl text-white font-bold px-8 border-slate-700">Order Summary</h1>
            {cart.length === 0 && (
              <p className='text-white px-8 pt-2'>You have not added any product to your cart yet.</p>
            )}
            <ul role="list" className="py-6 border-b border-slate-700 space-y-6 px-8 overscroll-contain">
                {cart.map((product: any) => (
                    <li key={product.name} className="grid grid-cols-6 gap-2 border-b-1">
                        <div className="col-span-2 mr-2 self-center">
                            <img src={require("" + product.image)} alt="Product" className="rounded w-full bg-slate-900 h-20 px-1 object-contain object-center" />
                        </div>
                        <div className="flex flex-col col-span-2 pt-2">
                            <Link to={product.path} className="text-cyan-600 font-bold text-md font-semi-bold">{product.name}</Link>
                            <span className="text-gray-400 text-sm inline-block pt-2">{product.type}</span>
                        </div>
                        <div className="col-span-2 pt-3">
                            <div className="flex items-center space-x-2 text-sm justify-between">
                                <span className="text-gray-400">{product.quantity} x ${product.price.toLocaleString()}</span>
                                <span className="text-white font-semibold inline-block">${(product.quantity * product.price).toLocaleString()}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="px-8 border-b border-slate-700">
                <div className="flex justify-between py-4 text-white font-bold">
                    <span>Subtotal</span>
                    <span className="font-semibold text-white">${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-4 text-white font-bold">
                    <span>Shipping</span>
                    <span className="font-semibold text-white">Free</span>
                </div>
            </div>
            <div className="font-bold text-xl px-8 flex justify-between py-8 text-white">
                <span>Total</span>
                <span>${totalPrice.toLocaleString()}</span>
            </div>
        </div>
    </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-75"
          >
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-slate-800 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center text-center justify-center p-5 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    {name}
                    <br />
                    Thank for your order!
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="text-slate-500 text-lg leading-relaxed mx-2 md:mx-8">
                    A confirmation email has been sent to your account, {email}, with the details of shipping and delivery.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 rounded-b">
                  <a
                    className="bg-cyan-700 text-white active:bg-cyan-800 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    href="/NS-Store/"
                  >
                    Go back to Nanite Systems
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    <Footer />
    </>)
}