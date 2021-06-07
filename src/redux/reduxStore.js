import {combineReducers, createStore} from "redux";
import dialogsReducer from "../redux/dialogsReducer"
import profileReducer from "../redux/profileReducer"
import navbarReducer from "../redux/navbarReducer"
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";


let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    navBarData: navbarReducer,
    usersData: usersReducer,
    authData: authReducer
})
let store = createStore(reducers);


window.rstore = store
export default store;