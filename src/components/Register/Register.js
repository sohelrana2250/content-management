import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UseContext/AuthProvider';
import UserInfoFetch from '../ContentFetch/UserInfoFetch';


const Register = () => {

    const { createUsers, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();
    const d = new Date();


    const dispatch = useDispatch();
    // const state = useSelector((state) => state);

    // console.log(state);


    const handelRegisterSubmit = (event) => {

        event.preventDefault();
        const element = event.target;
        const name = element.name.value;
        const email = element.email.value;
        const password = element.password.value;
        const confirmpassword = element.confirmpassword.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }

        if (password !== confirmpassword) {
            setError('Your Password did not match');
            return;
        }

        createUsers(email, password).then((result) => {
            const user = result.user;
            console.log(user);
            handelUpdateUserProfile(name, email);
            element.reset();
            setError('');
            setAccepted(true);
        }).catch((error) => {
            setError(error.message);
        })

    }

    const handelUpdateUserProfile = (name, email) => {

        const profile = {
            displayName: name
        }

        updateUserProfile(profile).then(() => {
            setAccepted(true);

            const user = {
                name, email, date: d.toString()
            }
            dispatch(UserInfoFetch(user));

            navigate('/')

        }).catch((error) => {
            setError(error.message);
        })

    }





    return (
        <div className='w-75 m-auto bg-dark rounded'>

            <Form onSubmit={handelRegisterSubmit} className='m-5'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-white'> Your Full-Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder=" Your Full-Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-white'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-white'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-white'>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirmpassword' placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p className='text-white'>If Your Account Exist Please  <Link to='/login'>Login</Link></p>
                </Form.Group>
                <Button className='m-3' variant="primary" type="submit">
                    Register
                </Button>

                <Form.Text className='fs-3 text-success'> {accepted ? 'Successfuly-Register' : ''}</Form.Text>
                <Form.Text className='text-danger fs-2'>{error}</Form.Text>
            </Form>

        </div>
    );
};

export default Register;