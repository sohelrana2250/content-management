const { useState, useEffect } = require("react");


const AdminHook = (email) => {

    const [isAdmin, setAdmin] = useState(false);

    useEffect(() => {

        if (email) {
            fetch(`http://localhost:5012/users/admin/${email}`).then((res) => res.json()).then((data) => {
                console.log(data);
                setAdmin(data.isAdmin);
            }).catch((error) => {
                console.log(error.message);
            })
        }



    }, [email])

    return [isAdmin];

};

export default AdminHook;

