const { contentActionType } = require("../../REDUX/ActionType");

const DetailsCategories = (id) => {

    return async (dispatch) => {

        const details = await fetch(`http://localhost:5012/findCategories/${id}`);
        const data = await details.json();
        dispatch({ type: contentActionType.CATEGORIES_DETAILS, payload: data })
    }
};
export default DetailsCategories;

