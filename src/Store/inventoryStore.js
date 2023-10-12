import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import inventoryReducer from "../Reducer/inventoryReducer";

const inventoryStore=createStore(inventoryReducer,applyMiddleware(thunk))

export default inventoryStore;