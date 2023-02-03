import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import MakeAdmin from '../ContentFetch/MakeAdmin';
const UserDisplay = ({ user, count }) => {
    const [isDisabled, setDisabled] = useState(false);
    const { _id, name, email, date } = user;

    const dispatch = useDispatch();

    const handelMakeId = (id) => {

        dispatch(MakeAdmin(id));
        setDisabled(true);

    }



    return (

        <tr striped bordered hover variant="dark">
            <td>{count + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td> {user?.role !== 'admin' && <Button onClick={() => handelMakeId(_id)} disabled={isDisabled} variant="outline-danger">Make-Admin</Button>}  </td>
            <td> <Button variant="outline-info">Delete</Button></td>
        </tr>

    );
};

export default UserDisplay;