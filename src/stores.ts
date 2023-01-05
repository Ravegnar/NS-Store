import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductInterface, AppStateInterface } from './type.d';

const getSavedCart = () => {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem('cart') ?? "[]");
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
};

const saveCart = (cart: ProductInterface[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

const initialState: AppStateInterface = {
    cart: getSavedCart(),
    showCart: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const existingProduct: ProductInterface | undefined = state.cart.find(
                (product: ProductInterface) => product.id === action.payload.id
                );
            if (existingProduct?.quantity) {
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
            const index: number = state.cart.findIndex(
                (product: ProductInterface) => product.id === action.payload
            );
            // immer makes this immutable
            saveCart(state.cart.splice(index, 1))
        },
        deleteProduct: (state, action) => {
            const existingProduct: ProductInterface | undefined = state.cart.find(
                (product: ProductInterface) => product.id === action.payload
                );
            if (existingProduct?.quantity === 1) {
            console.log(action.payload);
                const index = state.cart.findIndex(
                    (product: ProductInterface) => product.id === action.payload
                );
                state.cart.splice(index, 1)
            } else if (existingProduct?.quantity) {
                existingProduct.quantity--;
            }
            saveCart(state.cart)
        },
        onShowCart: (state) => {
            state.showCart = !state.showCart
        }
    },
});

const store = configureStore({
    reducer: cartSlice.reducer,
});

const { addProduct, removeProduct, deleteProduct, onShowCart } = cartSlice.actions;

const cartCountSelector = (state: AppStateInterface): number => {
    return state.cart.reduce((total: number, product: ProductInterface) => total + (product.quantity || 0), 0);
};

const cartValueSelector = (state: AppStateInterface): number => {
    return state.cart.reduce(
        (total: number, product: ProductInterface) => total + product.price * (product.quantity || 0), 0);
};

const showCart = (state: AppStateInterface): boolean => {
    return state.showCart
}

export {
    store,
    addProduct,
    removeProduct,
    deleteProduct,
    onShowCart,
    cartCountSelector,
    cartValueSelector,
    showCart,
};