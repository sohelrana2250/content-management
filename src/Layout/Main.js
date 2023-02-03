import React from 'react';
import Header from '../components/pages/Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import LeftsideNav from '../components/pages/shared/LeftsideNav/LeftsideNav';
import { Outlet } from 'react-router-dom';
import RightsideNav from '../components/pages/shared/RightsideNav/RightsideNav';

const Main = () => {
    return (
        <div>

            <Header></Header>
            <Container>

                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftsideNav></LeftsideNav>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightsideNav></RightsideNav>
                    </Col>
                </Row>



            </Container>

        </div>
    );
};

export default Main;