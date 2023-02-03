import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllNews from '../../../ContentFetch/AllNews';
import NewCard from './NewCard';

const AllCategoriesNews = () => {

    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(AllNews())


    }, [dispatch])

    const state = useSelector((state) => state);
    //console.log(state.categories.allnews);

    const allnews = state.categories.allnews;




    return (
        <div>


            {
                allnews.sort((a, b) => b.timeSec - a.timeSec).map((v, index) => <NewCard key={index} card={v}></NewCard>)
            }



        </div>
    );
};

export default AllCategoriesNews;