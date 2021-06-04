import {connect} from "react-redux";
import FriendsList from "./FriendsList";


const mapStateToProps = (state) => {
    let {friendsList, friendsCount} = state.navBarData;

    return {
        friendsList,
        friendsCount
    }
}



const FriendsListContainer = connect(mapStateToProps, null)(FriendsList)

export default FriendsListContainer