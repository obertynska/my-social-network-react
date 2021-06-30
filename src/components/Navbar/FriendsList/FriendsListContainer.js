import {connect} from "react-redux";
import FriendsList from "./FriendsList";
import withAuthRedirect from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    let {friendsList, friendsCount} = state.navBarData;

    return {
        friendsList,
        friendsCount
    }
}

export default compose(
    connect(mapStateToProps, null),
    withAuthRedirect
)(FriendsList)