import './App.css';
import {
    BrowserRouter as Router, Link,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader"
import {Component} from "react";
import {connect} from "react-redux";
import {appInitialize} from "./redux/appReducer";



class App extends Component {

    componentDidMount() {
        this.props.appInitialize()
    }

    render() {
        if(!this.props.isInitialized){
            return <Preloader/>
        }

        return (
            <Router>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper__content">
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route exact path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route exact path='/friends'
                               render={() => <div><h2>MY Friends</h2><Link to="/users">Show all users</Link></div>}/>
                        <Route exact path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route exact path='/login'
                               render={() => <Login/>}/>
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.appData.isInitialized
})


export default connect(mapStateToProps, {appInitialize})(App);




