import { contentActionType } from "../../REDUX/ActionType";


const UserInfoFetch = (userData) => {

    return async (dispatch) => {
        fetch('http://localhost:5012/userInfo', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        }).then((res) => res.json()).then((data) => {


            if (data.acknowledged) {
                console.log(data);
                const successfull = `successfully data provide${data}`
                dispatch({ type: contentActionType.USER_INFO, payload: successfull })

            }


        })

    }





};

export default UserInfoFetch;