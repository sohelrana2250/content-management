import React, { useContext } from 'react';
import { AuthContext } from '../../../UseContext/AuthProvider';
import AdminHook from '../../ContentFetch/AdminHook';

const AdminRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const [isAdmin] = AdminHook(user?.email);

    console.log(isAdmin);
    if (loading) {
        return <div>loading......</div>
    }

    //<Navigate to='/login' state={{ from: location }} replace></Navigate>

    if (user && isAdmin) {
        return children
    }







};

export default AdminRouter;