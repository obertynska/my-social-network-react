import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {
    getUserStatus,
    updateUserStatus
} from "../../../../redux/profileReducer";
import s from "./../UserInfo.module.css"

const UserStatus = ({userStatus, getUserStatus, updateUserStatus, userId}) => {

    const [editMode, setEditMode] = useState(false)
    const [currentStatusValue, setCurrentStatusValue] = useState(userStatus)

    useEffect(()=> getUserStatus(userId) , [userId])

    useEffect(()=>{
        setCurrentStatusValue(userStatus)
        }, [userStatus])


    let turnOnEditMode = () => {
        setEditMode(true)
    }

    let turnOffEditMode = () => {
        setEditMode(false)

        updateUserStatus(currentStatusValue);
    }


    let handleStatusChanges = (event) => {
        setCurrentStatusValue(event.target.value)
    }

    let handleFocus = (event) => {
        event.target.select();
    }


    return (
        <div>
            {editMode
                ?
                <input type="text" value={currentStatusValue} autoFocus={true} onFocus={handleFocus}
                       onBlur={turnOffEditMode} onChange={handleStatusChanges}/>
                : <p className={s.statusText} style={{textAlign: "center"}}
                     onDoubleClick={turnOnEditMode}>{userStatus || '--- no status yet ---'}</p>
            }
        </div>
    )


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