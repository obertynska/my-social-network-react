import {reset} from "redux-form";

export const resetFields = (formName) => {
    return (result, dispatch) =>
        dispatch(reset(formName));
}
