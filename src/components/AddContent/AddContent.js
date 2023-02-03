import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import AddToContentFetch from '../ContentFetch/AddToContentFetch';


const AddContent = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();
    const date = new Date();



    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    console.log(state);



    const handelAddProduct = (data) => {

        const contentData = {

            others_info: {
                is_todays_pick: false,
                is_trending: true
            },
            category_id: data.category_id,
            rating: {
                number: data.number,
                badge: "Excellent"
            },
            total_view: data.view,
            title: data.title,
            author: {
                name: data.name,
                published_date: data.date,
                img: data.img,

            },
            thumbnail_url: data.thumbnail_url,
            image_url: data.image_url,
            details: data.content,
            timeSec: date.getTime()




        }

        console.log(contentData);

        dispatch(AddToContentFetch(contentData))

















    }


    return (
        <div>

            <div className='w-100 m-auto bg-dark rounded'>

                <Form onSubmit={handleSubmit(handelAddProduct)} className='mt-3'>

                    <Form.Group className=" d-flex justify-content-between" controlId="formBasicEmail">
                        {/* <Form.Label className='text-white'> Content-Title</Form.Label> */}
                        <Form.Control className='m-2' type="text" name='title' {...register('title', { required: "Content Title is required" })} placeholder="Content-Title" required />
                        {errors.title && <Form.Text role="alert">{errors.title?.message}</Form.Text>}


                        <Form.Control className='m-2' type="text" name='name' {...register('name', { required: "Name is required" })} placeholder="Author-Name" required />
                        {errors.name && <Form.Text role="alert">{errors.name?.message}</Form.Text>}

                    </Form.Group>

                    <Form.Group className=" d-flex justify-content-between" controlId="formBasicEmail">
                        <Form.Control className='m-2' type="text" name='date' {...register('date', { required: "date is required" })} placeholder="publicting Date" required />
                        {errors.date && <Form.Text role="alert">{errors.date?.message}</Form.Text>}


                        <Form.Control className='m-2' type="number" name='number' {...register('number', { required: "Number is required" })} placeholder="Content-Rating" required />
                        {errors.number && <Form.Text role="alert">{errors.number?.message}</Form.Text>}

                    </Form.Group>

                    <Form.Select className='w-50 m-2' name='category_id' {...register('category_id', { required: "category_id is required" })} aria-label="Default select example">
                        <option>Content-Categories</option>
                        <option value="63d733e7899a99c536c1ed95">Breaking News</option>
                        <option value="63d733e7899a99c536c1ed96">Regular News</option>
                        <option value="63d733e7899a99c536c1ed97">International News</option>
                        <option value="63d733e7899a99c536c1ed98">Sports</option>
                        <option value="63d733e7899a99c536c1ed99">Entertainment</option>
                        <option value="63d733e7899a99c536c1ed9a">Culture</option>
                        <option value="63d733e7899a99c536c1ed9b">Arts</option>
                        <option value="63d733e7899a99c536c1ed9c">All News</option>
                    </Form.Select>
                    {errors.category_id && <Form.Text role="alert">{errors.category_id?.message}</Form.Text>}


                    <Form.Group controlId="formFile" className="mb-3 m-2">
                        <Form.Label className='text-white'>Author-Image</Form.Label>
                        <Form.Control type="text" name='img' {...register('img', { required: "img is required" })} placeholder="Author-Image-URL" required />
                        {errors.img && <Form.Text role="alert">{errors.img?.message}</Form.Text>}

                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3 m-2">
                        <Form.Label className='text-white'>Thumbnail-URL</Form.Label>
                        <Form.Control type="text" name='thumbnail_url' {...register('thumbnail_url', { required: "thumbnail_url is required" })} placeholder="Thumbnail-URL" required />
                        {errors.thumbnail_url && <Form.Text role="alert">{errors.thumbnail_url?.message}</Form.Text>}

                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3 m-2">
                        <Form.Label className='text-white'>Image-URL</Form.Label>
                        <Form.Control type="text" name='image_url' {...register('image_url', { required: "image_url is required" })} placeholder="Image-URL" required />
                        {errors.image_url && <Form.Text role="alert">{errors.image_url?.message}</Form.Text>}

                    </Form.Group>

                    <Form.Group className="w-50 m-2" controlId="formBasicEmail">
                        <Form.Control type="number" name='view'  {...register('view', { required: "view is required" })} placeholder="Content-View" required />
                        {errors.view && <Form.Text role="alert">{errors.view?.message}</Form.Text>}

                    </Form.Group>

                    <FloatingLabel className='m-2' controlId="floatingTextarea2" label="Content-Detais">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            name='content'
                            {...register('content', { required: "content is required" })}
                        />
                        {errors.content && <Form.Text role="alert">{errors.content?.message}</Form.Text>}
                    </FloatingLabel>


                    <Button className='m-3' variant="primary" type="submit">
                        Add-To-Content
                    </Button>


                </Form>

            </div>

        </div>
    );
};

export default AddContent;