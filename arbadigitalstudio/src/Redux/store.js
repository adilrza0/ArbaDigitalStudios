import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as userReducer } from "./UserReducer/reducer";
import { thunk } from "redux-thunk";
import { reducer as productReducer } from "./ProductReducer/reducer";

const rootReducer=combineReducers({
    userReducer,
    productReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
