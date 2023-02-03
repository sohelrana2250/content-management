import { contentActionType } from "../../REDUX/ActionType";


const MakeAdmin = (id) => {

    return async (dispatch) => {

        fetch(`http://localhost:5012/users/admin/${id}`, {
            method: 'PUT'
        }).then((res) => res.json()).then((data) => {

            console.log(data);

            const admin = `Admin Successful ${data}`
            dispatch({ type: contentActionType.MAKE_ADMIN, payload: admin })


        }).catch((error) => {
            console.log(error.message);
        })



    }

};

export default MakeAdmin;