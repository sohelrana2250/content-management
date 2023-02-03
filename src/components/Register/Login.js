import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../UseContext/AuthProvider';

const Login = () => {

    const { SingIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const form = location.state?.from?.pathname || "/";

    const handelSubmit = (event) => {

        const element = event.target;
        const email = element.email.value;
        const password = element.password.value;
        event.preventDefault();

        SingIn(email, password).then((result) => {


            const user = result.user;
            console.log(user);
            element.reset();
            setSuccess(true);
            setError('');
            navigate(form, { replace: true });
        }).catch((error) => {
            setSuccess(error.message);
        })



    }
    return (
        <div className='w-75 m-auto bg-dark rounded-3'>

            <Form className='m-3' onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-white'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-white'>Password</Form.Label>
                    {/* readOnly defaultValue={} */}
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='text-white'
                        type="checkbox"
                        label={<>Acccept <Link to='/register'>Trams And Condition</Link></>} />
                </Form.Group>

                <Button className='mb-3' variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className='text-danger fs-2'>{error}</Form.Text>
                <Form.Text className='text-danger fs-2'> {success ? 'Successfuly-Login' : ''}</Form.Text>
            </Form>

        </div>
    );
};

export default Login;