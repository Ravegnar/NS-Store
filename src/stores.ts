import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

interface Product {
    name: string,
    id: number,
    price: number,
    quantity: number
  }


const cartSlice = createSlice({
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
        },
        removeProduct: (state, action) => {
            const index = state.cart.findIndex(
                (product: Product) => product.id === action.payload.id
            );
            // immer makes this immutable
            state.cart.splice(index, 1);
        },
        prdlajs: (state: any, action) => {
            console.log(action.payload)
            console.log(state + "state")
        }
    },
});

const store = configureStore({
    reducer: cartSlice.reducer,
});

const { addProduct, removeProduct, prdlajs } = cartSlice.actions;

const cartCountSelector = (state: any) => {
    return state.cart.reduce((total: number, product: Product) => total + product.quantity, 0);
};

const cartValueSelector = (state: any) => {
    return state.cart.reduce(
        (total: number, product: Product) => total + product.price * product.quantity, 0
    );
};

export {
    store,
    addProduct,
    prdlajs,
    removeProduct,
    cartCountSelector,
    cartValueSelector,
};