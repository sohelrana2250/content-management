const { contentActionType } = require("../../REDUX/ActionType");

const AllNews = () => {

    return async (dispatch) => {

        const alldata = await fetch('http://localhost:5012/allnewCategories');
        const data = await alldata.json();

        dispatch({ type: contentActionType.ALL_NEWS, payload: data })

    }

};

export default AllNews;

