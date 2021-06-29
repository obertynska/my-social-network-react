import {combineReducers, createStore, applyMiddleware } from "redux";
import dialogsReducer from "../redux/dialogsReducer"
import profileReducer from "../redux/profileReducer"
import navbarReducer from "../redux/navbarReducer"
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import ThunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    navBarData: navbarReducer,
    usersData: usersReducer,
    authData: authReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.rstore = store
export default store;