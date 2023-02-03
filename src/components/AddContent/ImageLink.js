




const ImageLink = (url, formData) => {

    fetch(url, {
        method: 'POST',
        body: formData
    }).then((res) => res.json()).then((imgData) => {

        //console.log(imgData);

        if (imgData.success) {
            console.log(imgData.data.url);

        }
    }).catch((error) => {
        console.log(error.message);
    })





};

export default ImageLink;

