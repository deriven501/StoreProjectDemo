import * as actionTypes from "../actionTypes";

export const removeMessage = (type) => {
    return {
        type: actionTypes.REMOVE_NOTIFICATION,
        payload: {type}
    }

}

export const AddNewNotification = (entry) => {
    return {
        type: actionTypes.ADD_NOTIFICATION,
        payload: {entry}
    }
    
}