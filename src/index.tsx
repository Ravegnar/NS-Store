import './index.css';
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./stores";
import {About} from "./About";
import {Cart} from "./Cart";
import {Checkout} from "./Checkout";
import {Home} from "./Home";
import {Navbar} from "./Navbar";
import {Operatives} from "./Operatives";
import {OperativeDetails} from "./OperativeDetails";
import {Products} from "./Products";
import {ProductDetails} from "./ProductDetails";
import {Store} from "./Store";

const App = () => {

  return (<>
          <BrowserRouter>
            <Navbar />
            <section className="bg-slate-900 min-h-[93vh] scrollbar-hide ">
            <Cart />
              <Routes>
                <Route
                  path="/NS-Store/"
                  element={<Home />}
                />
                <Route
                  path="/NS-Store/about"
                  element={<About />}
                />
                <Route
                  path="NS-Store/store"
                  element={<Store
                  />}
                />
                <Route 
                  path="/NS-Store/store/NSO"
                  element={<Operatives />}
                />
                <Route
                  path="/NS-Store/store/NSO/:id/*"
                  element={<OperativeDetails />}
                />
                <Route 
                  path="/NS-Store/store/NSW/weapons"
                  element={<Products
                    category="Primary"
                    type="weapons"
                  />
                }
                />
                <Route 
                  path="/NS-Store/store/NSW/tools"
                  element={<Products
                    category="Tools"
                    type="tools"
                  />
                }
                />
                <Route 
                  path="/NS-Store/store/NSW/equipment"
                  element={<Products
                    category="Equipment"
                    type="equipment"
                    />
                  }
                />
                <Route
                  path="/NS-Store/store/NSW/weapons/:id/*"
                  element={<ProductDetails category="Primary" type="weapons" />}
                />
                <Route
                  path="/NS-Store/store/NSW/tools/:id/*"
                  element={<ProductDetails category="Tools" type="tools" />}
                />
                <Route
                  path="/NS-Store/store/NSW/equipment/:id/*"
                  element={<ProductDetails category="Equipment" type="equipment" />}
                />
                <Route
                  path="/NS-Store/checkout"
                  element={<Checkout />}
                />
              </Routes>
            </section>
        </BrowserRouter>
  </>);
}

const root = ReactDOM.createRoot(
  document.getElementById('#react-root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);