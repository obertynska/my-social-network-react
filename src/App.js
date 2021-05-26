import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";



function App({state: {navBarData, profileData, dialogsData}, dispatch, store }){

    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar data={navBarData}/>
                <div className="app-wrapper__content">
                    <Route exact path='/profile'
                           render={() => <Profile data={profileData} dispatch={dispatch}/> }/>
                    <Route exact path='/dialogs'
                           render={() => <Dialogs data={dialogsData} dispatch={dispatch}/>}/>
                </div>
            </div>
        </Router>
    );
}

export default App;




