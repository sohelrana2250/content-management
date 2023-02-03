import { contentActionType } from "../../REDUX/ActionType";


const AllUserDataFetch = () => {

    return async (dispatch) => {

        const alldata = await fetch('http://localhost:5012/allUserInfo');
        const data = await alldata.json();

        dispatch({ type: contentActionType.ALL_USER_DATA, payload: data })

    }

};

export default AllUserDataFetch;