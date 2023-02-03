import React from 'react';
import { Button, Card, Image, Nav } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const AllContentDisplay = ({ alldata, count, handelContentDelete }) => {



    const { _id, title, author, details, image_url, total_view, rating } = alldata;
    const { name, img, published_date } = author;
    return (
        <div className='mb-3'>

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
                        {details.slice(0, 300)}
                    </Card.Text>

                    <div className='d-flex justify-content-between'>
                        <Nav.Link className='m-2 btn btn-outline-dark p-1 text-white'><Link to={`/dashboard/contentUpdate/${_id}`}>Update</Link></Nav.Link>
                        <Button onClick={() => handelContentDelete(_id)} variant="outline-info">Delete</Button>

                    </div>
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

export default AllContentDisplay;