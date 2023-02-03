const { contentActionType } = require("../../REDUX/ActionType");

const CategoriesFetch = () => {

    return async (dispatch) => {

        const categorie = await fetch('http://localhost:5012/newCategories');
        const data = await categorie.json();

        dispatch({ type: contentActionType.CATEGORIES_FEATCH, payload: data });


    }


}

export default CategoriesFetch;


