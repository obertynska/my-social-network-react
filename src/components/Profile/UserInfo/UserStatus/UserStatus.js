import React from "react";

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
                    : <p style={{textAlign: "center"}}
                         onDoubleClick={this.turnOnEditMode}>{this.props.userStatus || '--- no status yet ---'}</p>
                }
            </div>
        )
    }

}

export default UserStatus