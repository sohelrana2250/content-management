import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../UseContext/AuthProvider';



const Header = () => {

    const { user, LogOut } = useContext(AuthContext);
    const handelLogOut = () => {

        LogOut().then(() => {

        }).catch((error) => {

            console.error(error.message)
        })

    }


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link> <Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <>

                                {/* {user ? user.displayName : 'name doest not exist'} */}

                                {user?.uid ?
                                    <>
                                        <spam className='text-white m-3'>Author : {user?.displayName}</spam>

                                        <Button className='m-3' onClick={handelLogOut} variant="outline-danger">Log-Out</Button>{' '}
                                    </>
                                    : <>
                                        <Nav.Link className='m-2'><Link to='/login'>Logain</Link></Nav.Link>
                                        <Nav.Link className='m-2'>  <Link to='/register'>Rergister</Link></Nav.Link>

                                    </>}
                            </>



                            <Nav.Link className='m-2'><Link to='/dashboard'>Dashboard</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;