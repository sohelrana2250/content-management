import React from 'react';
import { useSelector } from 'react-redux';
import NewCard from './NewCard';


const CategoriesDetails = () => {


    const state = useSelector((state) => state);

    //console.log(state.categories.categoriesDetails);

    const categoriesList = state.categories.categoriesDetails;
    console.log(categoriesList)


    return (
        <div className='m-2'>

            <h1>Category List :{categoriesList.length} </h1>

            {
                categoriesList?.sort((a, b) => b.timeSec - a.timeSec).map((v, index) => <NewCard key={index} card={v}></NewCard>)

            }

        </div>
    );
};

export default CategoriesDetails;