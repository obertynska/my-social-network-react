import './App.css';
import {
    BrowserRouter as Router, Link,
    Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



function App(){

    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper__content">
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route exact path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route exact path='/friends'
                           render={() => <div><h2>MY Friends</h2><Link to="/users">Show all users</Link> </div>}/>
                    <Route exact path='/users'
                           render={() => <UsersContainer/>}/>
                </div>
            </div>
        </Router>
    );
}

export default App;




