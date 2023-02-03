import React from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import AllContentDisplay from './AllContentDisplay';


const AllContentData = () => {

    const state = useSelector((state) => state);

    //console.log(state.categories.allnews);

    const alldata = state.categories.allnews;

    const navigate = useNavigate();

    const handelContentDelete = (id) => {

        const confirmation = window.confirm("Are you sure you want to DELETE this review");
        if (confirmation) {

            fetch(`http://localhost:5012/allcontent/${id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.acknowledged) {
                        alert('Successfully-Delete');
                        navigate('/dashboard/AllData');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }


    }
    return (
        <div>

            <h1>All Content-List : {state.categories.allnews.length}</h1>
            {
                alldata.sort((a, b) => b.timeSec - a.timeSec).map((v, index) => <AllContentDisplay key={index} count={index} alldata={v} handelContentDelete={handelContentDelete}></AllContentDisplay>)
            }



        </div>
    );
};

export default AllContentData;