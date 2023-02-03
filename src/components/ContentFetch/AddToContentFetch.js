
import { contentActionType } from "../../REDUX/ActionType";




const AddToContentFetch = (content) => {



    return async (dispatch) => {

        fetch('http://localhost:5012/addtoContent', {

            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(content)
        }).then((data) => {

            console.log(data);
            dispatch({ type: contentActionType.ADD_CONTENT, payload: data })
            alert('Successfully-Added-Content');

        }).catch((error) => {
            console.log(error.message);
        })





    }

};

export default AddToContentFetch;