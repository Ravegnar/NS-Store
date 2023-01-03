import './index.css';
import {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
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
  const [open, setOpen] = useState(false)
  const [cart, setCart] = useState(function () {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem('cart') ?? "[]");
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });
  

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  function handleOpenCart() {
    setOpen(!open);
  }

  function handleProductDelete(id: number) {
    const updatedCart: any = cart.filter((product: any) => product.id !== id);
    setCart(updatedCart);
  }

  function handleProductAdd(newProduct: any) {
    // check if item exists
    const existingProduct: any = cart.find(
      (product: any) => product.id === newProduct.id
    );
    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product: any) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }

  function handleProductRemove(newProduct: any) {
    const existingProduct: any = cart.find(
      (product: any) => product.id === newProduct.id
    );
    if (existingProduct.quantity === 1) {
      return handleProductDelete(existingProduct.id)
    }
    if (existingProduct) {
      const updatedCart: any = cart.map((product: any) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    }
  }

  return (<>
          <BrowserRouter>
            <Navbar cart={cart} onOpenCart={handleOpenCart} />
            <section className="bg-slate-900 min-h-[93vh] scrollbar-hide ">
            <Cart
              onOpenCart={handleOpenCart}
              onProductAdd={handleProductAdd}
              onProductRemove={handleProductRemove}
              onProductDelete={handleProductDelete}
              open={open}
              cart={cart}
            />
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
                  element={<Operatives 
                    cart={cart}
                    onProductAdd={handleProductAdd}
                    onProductDelete={handleProductDelete}
                  />}
                />
                <Route
                  path="/NS-Store/store/NSO/:id/*"
                  element={<OperativeDetails cart={cart} onProductAdd={handleProductAdd} onProductRemove={handleProductRemove} onProductDelete={handleProductDelete} />}
                />
                <Route 
                  path="/NS-Store/store/NSW/weapons"
                  element={<Products
                    category="Primary"
                    type="weapons"
                    cart={cart}
                    onProductAdd={handleProductAdd}
                    onProductDelete={handleProductDelete}
                    onProductRemove={handleProductRemove}
                  />
                }
                />
                <Route 
                  path="/NS-Store/store/NSW/tools"
                  element={<Products
                    category="Tools"
                    type="tools"
                    cart={cart}
                    onProductAdd={handleProductAdd}
                    onProductDelete={handleProductDelete}
                    onProductRemove={handleProductRemove}
                  />
                }
                />
                <Route 
                  path="/NS-Store/store/NSW/equipment"
                  element={<Products
                    category="Equipment"
                    type="equipment"
                    cart={cart}
                    onProductAdd={handleProductAdd}
                    onProductDelete={handleProductDelete}
                    onProductRemove={handleProductRemove}
                    />
                  }
                />
                <Route
                  path="/NS-Store/store/NSW/weapons/:id/*"
                  element={<ProductDetails category="Primary" type="weapons" cart={cart} onProductAdd={handleProductAdd} onProductRemove={handleProductRemove} onProductDelete={handleProductDelete} />}
                />
                <Route
                  path="/NS-Store/store/NSW/tools/:id/*"
                  element={<ProductDetails category="Tools" type="tools" cart={cart} onProductAdd={handleProductAdd} onProductRemove={handleProductRemove} onProductDelete={handleProductDelete} />}
                />
                <Route
                  path="/NS-Store/store/NSW/equipment/:id/*"
                  element={<ProductDetails category="Equipment" type="equipment" cart={cart} onProductAdd={handleProductAdd} onProductRemove={handleProductRemove} onProductDelete={handleProductDelete} />}
                />
                <Route
                  path="/NS-Store/checkout"
                  element={<Checkout cart={cart} onProductDelete={handleProductDelete} />}
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