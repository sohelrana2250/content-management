import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesFetch from '../../../ContentFetch/CategoriesFetch';
import { Button } from 'react-bootstrap';
import DetailsCategories from '../../../ContentFetch/DetailsCategories';



const LeftsideNav = () => {

    const dispatch = useDispatch()
    const [categorieID, setCategoriID] = useState();


    useEffect(() => {

        dispatch(CategoriesFetch())

    }, [dispatch])

    useEffect(() => {
        dispatch(DetailsCategories(categorieID))

    }, [categorieID, dispatch])






    const state = useSelector((state) => state);
    //console.log(state.categories.categories);

    const categorie = state.categories.categories;

    //console.log(state)

    return (
        <div className='bg-dark m-2 rounded mt-3'>

            <h4>Left-side-Nav :{categorie.length}</h4>

            <div>
                {

                    categorie.map((v, index) => <p key={index}>
                        {/* 
                        <Link to={`/${v.id}`}>{v.name}</Link> */}

                        <Button onClick={() => setCategoriID(v._id)} className='pl-3 pr-3' size="sm" variant="dark" >{v.name}</Button>
                    </p>)
                }
            </div>


        </div>
    );
};

export default LeftsideNav;