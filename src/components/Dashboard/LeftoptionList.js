import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UseContext/AuthProvider';
import AdminHook from '../ContentFetch/AdminHook';

const LeftoptionList = () => {


    const { user } = useContext(AuthContext);
    const [isAdmin] = AdminHook(user?.email);
    console.log(isAdmin);


    return (
        <div className='bg-dark m-3 rounded p-3'>

            <Nav>


                <>

                    {
                        isAdmin ? <>

                            <Nav.Link className='m-2'><Link to='/display'>display</Link></Nav.Link>
                            <Nav.Link className='m-2'>  <Link to='/dashboard/users'>All-Users</Link></Nav.Link>
                            <Nav.Link><Link to='/dashboard/addControl'> Add-Content</Link></Nav.Link>
                            <Nav.Link> <Link to='/dashboard/contentUpdate'>Update-Con</Link></Nav.Link>
                            <Nav.Link><Link to='/dashboard/AllData'>All-Content</Link></Nav.Link>
                        </> : <></>
                    }



                </>

            </Nav>







        </div>
    );
};

export default LeftoptionList;