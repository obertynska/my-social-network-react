import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";




function App({state: {navBarData, dialogsData}, dispatch, store }){

    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar store={store}/>
                <div className="app-wrapper__content">
                    <Route exact path='/profile'
                           render={() => <Profile store={store}/>}/>
                    <Route exact path='/dialogs'
                           render={() => <DialogsContainer store={store}/>}/>
                </div>
            </div>
        </Router>
    );
}

export default App;




