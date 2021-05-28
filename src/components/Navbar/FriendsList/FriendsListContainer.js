import {connect} from "react-redux";
import FriendsList from "./FriendsList";


const mapStateToProps = (state) => {
    let {friendsList, friendsCount} = state.navBarData;

    return {
        friendsList,
        friendsCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsListContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsList)

export default FriendsListContainer