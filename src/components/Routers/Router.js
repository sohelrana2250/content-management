import { createBrowserRouter } from "react-router-dom";
import DeashBoardlayout from "../../Layout/DeashBoardlayout";
import Main from "../../Layout/Main";
import AddContent from "../AddContent/AddContent";
import AllContentData from "../Content-Update/AllContentData";
import ContentUpdate from "../Content-Update/ContentUpdate";
import AllUsers from "../DashboardContent/AllUsers";
import AllCategoriesNews from "../pages/shared/NewsCategorys/AllCategoriesNews";
import CategoriesDetails from "../pages/shared/NewsCategorys/CategoriesDetails";
import MoreDetails from "../pages/shared/NewsCategorys/MoreDetails";
import Login from "../Register/Login";
import Register from "../Register/Register";
import AdminRouter from "./AdminRouter/AdminRouter";
import PrivateRouter from "./PrivateRouter/PrivateRouter";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/', element: <div>
                    <CategoriesDetails></CategoriesDetails>
                    <AllCategoriesNews></AllCategoriesNews>
                </div>
            },
            {
                path: '/specificNews/:id',
                element: <PrivateRouter><MoreDetails></MoreDetails></PrivateRouter>,
                loader: (props) => {
                    return fetch(`http://localhost:5012/specificNews/${props.params.id}`)
                }
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login', element: <Login></Login>
            },

        ]

    },
    {
        path: '/addContent', element: <AddContent></AddContent>
    },
    {
        path: '/dashboard',
        element: <DeashBoardlayout></DeashBoardlayout>,
        children: [
            {
                path: '/dashboard', element: <AdminRouter><div>PoiDFDDFnt -Here1 lahsjjk aksjdhfjkhsajk akjshjkf </div></AdminRouter>
            },
            {
                path: '/dashboard/users', element: <AdminRouter><AllUsers></AllUsers></AdminRouter>
            },
            {
                path: '/dashboard/addControl', element: <AddContent></AddContent>

            },
            {
                path: '/dashboard/contentUpdate/:id',
                element: <ContentUpdate></ContentUpdate>,
                loader: (props) => {
                    return fetch(`http://localhost:5012/specificNews/${props.params.id}`)
                }
            },
            {
                path: '/dashboard/AllData', element: <AllContentData></AllContentData>
            }
        ]
    }
])


