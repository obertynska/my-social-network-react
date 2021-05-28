import {combineReducers, createStore} from "redux";
import dialogsReducer from "../redux/dialogsReducer"
import profileReducer from "../redux/profileReducer"
import navbarReducer from "../redux/navbarReducer"


let reducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    navBarData: navbarReducer
})
let store = createStore(reducers);


window.rstore = store
export default store;