import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Button, Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';



const MoreDetails = () => {

    const navigate = useNavigate();

    const data = useLoaderData();
    const { title, author, details, image_url, total_view, rating } = data;
    const { name, img, published_date } = author;
    return (
        <div className='m-3'>

            <Card className="">
                <Card.Header className='d-flex justify-content-between'>



                    <div className='d-flex'>
                        <Image roundedCircle src={img} style={{ height: '60px' }}></Image>
                        <div>
                            <p>{name}</p>
                            <p>{published_date}</p>
                        </div>
                    </div>

                    <div>
                        <FaBookmark></FaBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length > 500 ? <>{details} <Button className='justify-content-between mt-2' onClick={() => navigate('/')}>Home-Page</Button> </> : <>{details}</>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">

                    <div>
                        <FaStar className='text-danger me-3'></FaStar>
                        <span>{rating.number}</span>
                    </div>

                    <div>
                        <FaEye className='me-3'></FaEye>
                        <spam>  {total_view}</spam>
                    </div>
                </Card.Footer>
            </Card>


        </div>
    );
};

export default MoreDetails;