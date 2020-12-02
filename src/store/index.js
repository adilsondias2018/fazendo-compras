import { createStore, combineReducers } from "redux";

import productReducer from "./modules/products/reducer";
import foodReucer from "./modules/foods/reducer";
import cartReducer from "./modules/cart/reducer";

const reducers = combineReducers({
  products: productReducer,
  foods: foodReucer,
  cart: cartReducer,
});

const store = createStore(reducers);

export default store;
