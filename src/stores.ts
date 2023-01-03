import { configureStore, createSlice } from "@reduxjs/toolkit";

const getSavedCart = () => {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem('cart') ?? "[]");
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
};

const saveCart = (cart: any) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const initialState = {
    cart: getSavedCart(),
    showCart: false,
    pdd: [{asd: 1,
            asds: "asd"}]
};

interface Product {
    name: string,
    id: number,
    price: number,
    quantity: number
}


const cartSlice: any = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state: any, action) => {
            const existingProduct: any = state.cart.find(
                (product: Product) => product.id === action.payload.id
                );
            if (existingProduct) {
                // immer makes this immutable
                existingProduct.quantity++;
            } else {
                // immer makes this immutable
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            saveCart(state.cart)
            //console.log("Aktuální stav košíku:", JSON.stringify(state.cart, null, 1));
            
        },
        removeProduct: (state, action) => {
            const index = state.cart.findIndex(
                (product: Product) => product.id === action.payload
            );
            // immer makes this immutable
            saveCart(state.cart.splice(index, 1))
        },
        deleteProduct: (state, action) => {
            const existingProduct: any = state.cart.find(
                (product: Product) => product.id === action.payload
                );
            if (existingProduct.quantity === 1) {
                const index = state.cart.findIndex(
                    (product: Product) => product.id === action.payload
                );
                state.cart.splice(index, 1)
            } else {
                existingProduct.quantity--;
            }
            saveCart(state.cart)
        },
        prdlajs: (state: any, action) => {
            console.log(action.payload)
            console.log(state + "state")
            state.showCart = !state.showCart
        },
        onShowCart: (state: any) => {
            state.showCart = !state.showCart
        }
    },
});

const store = configureStore({
    reducer: cartSlice.reducer,
});

const { addProduct, removeProduct, deleteProduct, onShowCart, prdlajs } = cartSlice.actions;

const cartCountSelector = (state: any) => {
    return state.cart.reduce((total: number, product: Product) => total + product.quantity, 0);
};

const cartValueSelector = (state: any) => {
    return state.cart.reduce(
        (total: number, product: Product) => total + product.price * product.quantity, 0
    );
};

const showCart = (state: any) => {
    return state.showCart
}

export {
    store,
    addProduct,
    removeProduct,
    deleteProduct,
    prdlajs,
    onShowCart,
    cartCountSelector,
    cartValueSelector,
    showCart,
};