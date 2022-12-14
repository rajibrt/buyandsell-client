import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import AllSeller from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home"
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddMobile from "../../Pages/AddMobile/AddMobile";
import SubmitMobile from "../../Pages/AddMobile/SubmitMobile";
import SingleMobile from "../../Pages/SingleMobile/SingleMobile";
import SingleBrand from "../../Pages/SingleCategory/SingleBrand";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyPhone from "../../Pages/Dashboard/MyPhone/MyPhone";
import BookedPhone from "../../Pages/Dashboard/BookedPhone/BookedPhone";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllPhones from "../../Pages/Dashboard/AllPhones/AllPhones";
import Blogs from "../../Pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            // {
            //     path: '/singlecategory/:id',
            //     element: <SingleCategory></SingleCategory>,
            //     loader: ({ params }) => fetch(`https://buynsell-server.vercel.app/singlecategory/${params.id}`)
            // },
            {
                path: '/mobile/:id',
                element: <SingleMobile></SingleMobile>,
                loader: ({ params }) => fetch(`https://buynsell-server.vercel.app/mobile/${params.id}`)
            },
            {
                path: '/singlebrand/:id',
                element: <PrivateRoute><SingleBrand></SingleBrand></PrivateRoute>,
                loader: ({ params }) => fetch(`https://buynsell-server.vercel.app/brandCollection?brand=${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/addmobile',
                element: <PrivateRoute><AddMobile></AddMobile></PrivateRoute>
            },
            {
                path: '/submitmobile',
                element: <PrivateRoute><SubmitMobile></SubmitMobile></PrivateRoute>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myphone',
                element: <MyPhone></MyPhone>
            },
            {
                path: '/dashboard/bookedphone',
                element: <BookedPhone></BookedPhone>
            },
            {
                path: '/dashboard',
                element: <MyPhone></MyPhone>
            },
            {
                path: '/dashboard/allphones',
                element: <AdminRoute><AllPhones /></AdminRoute>,
                loader: () => fetch('https://buynsell-server.vercel.app/allmobile')
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers /></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers /></AdminRoute>,
                loader: () => fetch('https://buynsell-server.vercel.app/users?role=Seller')

            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AllSeller /></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://buynsell-server.vercel.app/bookings/${params.id}`)
            },
        ]
    }
])

export default router;