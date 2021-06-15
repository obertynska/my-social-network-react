import {combineReducers, createStore, applyMiddleware } from "redux";
import dialogsReducer from "../redux/dialogsReducer"
import profileReducer from "../redux/profileReducer"
import navbarReducer from "../redux/navbarReducer"
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import ThunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    navBarData: navbarReducer,
    usersData: usersReducer,
    authData: authReducer
})
let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.rstore = store
export default store;