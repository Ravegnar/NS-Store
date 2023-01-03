import { useDispatch, useSelector } from "react-redux";
import {
    addProduct,
    removeProduct,
    prdlajs,
    cartCountSelector,
    cartValueSelector,
} from "./stores";

export const App = () => {
    const dispatch = useDispatch();
    const count = useSelector(cartCountSelector);
    const value = useSelector(cartValueSelector);

    // These are test products so you can test your code
    const products = [{
        id: 1,
        name: "Milk",
        price: 5
    }, {
        id:3,
        name: "Mislk",
        price: "51"
    }, {
        id: 2,
        name: "Cheese",
        price: 10
    }];

    return (<>
        <p className="bg-gray-800 text-4xl">Cart count: <span id="count">{count}</span></p>
        <p>Cart value: <span id="value">{value}</span></p>
        <div>
            <button id="add-1" onClick={() => dispatch(addProduct(products[0]))}>Add Milk</button>
            <button onClick={() => dispatch(removeProduct(products[0]))}>Remove Milk</button>
        </div>
        <div style={{marginTop: '10px'}}>
            <button id="add-2" onClick={() => dispatch(addProduct(products[2]))}>Add Cheese</button>
            <button onClick={() => dispatch(removeProduct(products[2]))}>Remove Cheese</button>
        </div>
        <div style={{marginTop: '10px'}}>
            <button id="add-2" onClick={() => dispatch(addProduct(products[1]))}>{products[1].name}</button>
            <button onClick={() => dispatch(removeProduct(products[1]))}>Remove Cheese</button>
        </div>
        <div style={{marginTop: '10px'}}>
            <button onClick={() => dispatch(prdlajs(products[1]))}>prdlajs</button>
        </div>
    </>);
}