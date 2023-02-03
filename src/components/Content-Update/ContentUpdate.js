import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';



const ContentUpdate = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();
    const contentdata = useLoaderData();
    const { _id, title, author, details, image_url, thumbnail_url
        , total_view, rating } = contentdata;
    const { name, img, published_date } = author;

    const navigate = useNavigate();



    const handelAddProduct = (data) => {

        console.log(data);

        fetch(`http://localhost:5012/content/update/${_id}`, {

            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((data) => {

            console.log(data)

            if (data.modifiedCount >= 1) {
                alert('successfully-update');
                navigate('/');
            }
        }).catch((error) => {
            console.log(error.message);
        })


    }
    return (
        <div>


            <div className='w-100 m-auto bg-dark rounded'>

                <Form className='mt-3' onSubmit={handleSubmit(handelAddProduct)}>


                    <Form.Group className=" d-flex justify-content-between" controlId="formBasicEmail">
                        {/* <Form.Label className='text-white'> Content-Title</Form.Label> */}
                        <Form.Control className='m-2' type="text" defaultValue={title} name='title' {...register('title', { required: "Content Title is required" })} placeholder="Content-Title" required />
                        {errors.title && <Form.Text role="alert">{errors.title?.message}</Form.Text>}


                        <Form.Control className='m-2' type="text" defaultValue={name} name='name' {...register('name', { required: "Name is required" })} placeholder="Author-Name" required />
                        {errors.name && <Form.Text role="alert">{errors.name?.message}</Form.Text>}

                    </Form.Group>

                    <Form.Group className=" d-flex justify-content-between" controlId="formBasicEmail">
                        <Form.Control className='m-2' type="text" defaultValue={published_date} name='date' {...register('date', { required: "date is required" })} placeholder="publicting Date" required />
                        {errors.date && <Form.Text role="alert">{errors.date?.message}</Form.Text>}


                        <Form.Control className='m-2' type="text" defaultValue={rating.number} name='number' {...register('number', { required: "Number is required" })} placeholder="Content-Rating" required />
                        {errors.number && <Form.Text role="alert">{errors.number?.message}</Form.Text>}

                    </Form.Group>

                    <Form.Group className="w-50 m-2" controlId="formBasicEmail">
                        <Form.Control type="text" name='category_id' defaultValue={_id}  {...register('category_id', { required: "category_id is required" })} placeholder="category_id" required />
                        {errors.category_id && <Form.Text role="alert">{errors.category_id?.message}</Form.Text>}

                    </Form.Group>


                    <Form.Group controlId="formFile" className="mb-3 m-2">
                        <Form.Label className='text-white'>Author-Image</Form.Label>
                        <Form.Control type="text" name='img' defaultValue={img} {...register('img', { required: "img is required" })} placeholder="Author-Image-URL" required />
                        {errors.img && <Form.Text role="alert">{errors.img?.message}</Form.Text>}

                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3 m-2">
                        <Form.Label className='text-white'>Thumbnail-URL</Form.Label>
                        <Form.Control type="text" name='thumbnail_url' defaultValue={thumbnail_url} {...register('thumbnail_url', { required: "thumbnail_url is required" })} placeholder="Thumbnail-URL" required />
                        {errors.thumbnail_url && <Form.Text role="alert">{errors.thumbnail_url?.message}</Form.Text>}

                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3 m-2">
                        <Form.Label className='text-white'>Image-URL</Form.Label>
                        <Form.Control type="text" name='image_url' defaultValue={image_url} {...register('image_url', { required: "image_url is required" })} placeholder="Image-URL" required />
                        {errors.image_url && <Form.Text role="alert">{errors.image_url?.message}</Form.Text>}

                    </Form.Group>

                    <Form.Group className="w-50 m-2" controlId="formBasicEmail">
                        <Form.Control type="text" name='view' defaultValue={total_view}  {...register('view', { required: "view is required" })} placeholder="Content-View" required />
                        {errors.view && <Form.Text role="alert">{errors.view?.message}</Form.Text>}

                    </Form.Group>

                    <FloatingLabel className='m-2' controlId="floatingTextarea2" label="Content-Detais">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            name='content'
                            defaultValue={details}
                            {...register('content', { required: "content is required" })}
                        />
                        {errors.content && <Form.Text role="alert">{errors.content?.message}</Form.Text>}
                    </FloatingLabel>


                    <Button className='m-3' variant="primary" type="submit">
                        Update-Content
                    </Button>



                </Form>

            </div>



        </div>
    );
};

export default ContentUpdate;