import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import AllUserDataFetch from '../ContentFetch/AllUserDataFetch';
import Table from 'react-bootstrap/Table';
import UserDisplay from './UserDisplay';

const AllUsers = () => {


    const dispatch = useDispatch();





    useEffect(() => {

        dispatch(AllUserDataFetch())

    }, [dispatch])

    const state = useSelector((state) => state);
    const alldata = state.register.alluserData;

    //console.log(alldata)






    return (
        <div>
            <h3 >All-User-Data List :{alldata.length}</h3>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Count</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        state.register.alluserData.map((v, index) => <UserDisplay key={index} count={index} user={v}></UserDisplay>)
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default AllUsers;