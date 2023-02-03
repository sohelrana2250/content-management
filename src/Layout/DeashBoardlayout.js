import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/pages/Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import LeftoptionList from '../components/Dashboard/LeftoptionList';



const DeashBoardlayout = () => {


    return (
        <div>
            <Header></Header>
            <Container>

                <Row>
                    <Col lg='2' className='d-none d-lg-block fixed'>
                        <LeftoptionList></LeftoptionList>
                    </Col>
                    <Col lg='10'>
                        <Outlet></Outlet>
                    </Col>

                </Row>



            </Container>




        </div>
    );
};

export default DeashBoardlayout;