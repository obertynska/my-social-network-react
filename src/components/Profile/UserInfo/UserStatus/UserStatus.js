import React from "react";
import {connect} from "react-redux";
import {
    getUserStatus,
    updateUserStatus
} from "../../../../redux/profileReducer";
import s from "./../UserInfo.module.css"


class UserStatus extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            currentStatusValue: this.props.userStatus
        }

    }

    turnOnEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    turnOffEditMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateUserStatus(this.state.currentStatusValue);
    }


    handleStatusChanges = (event) => {
        this.setState({
            currentStatusValue: event.target.value
        })
    }

    handleFocus = (event) => {
        event.target.select();
    }

    componentDidMount() {
        this.props.getUserStatus(this.props.userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.userStatus !== this.props.userStatus){
            this.setState({
                currentStatusValue: this.props.userStatus
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.editMode
                    ?
                    <input type="text" value={this.state.currentStatusValue} autoFocus={true} onFocus={this.handleFocus}
                           onBlur={this.turnOffEditMode} onChange={this.handleStatusChanges}/>
                    :<p className={s.statusText} style={{textAlign: "center"}}
                         onDoubleClick={this.turnOnEditMode}>{this.props.userStatus || '--- no status yet ---'}</p>
                }
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        userStatus: state.profileData.userStatus
    }
}


const mapDispatchToProps = {
      getUserStatus,
      updateUserStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStatus)