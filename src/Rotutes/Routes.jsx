import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SeeDetails from "../Pages/SeeDetails/SeeDetails";
import AllContestPage from "../Pages/AllContestPage/AllContestPage";
// import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import Cart from "../Pages/DashBoard/Cart/Cart";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import AllUsers from "../Pages/DashBoard/ManageUsers/ManageUsers";

import ManageContests from "../Pages/DashBoard/ManageContests/ManageContests";
import ManageUsers from "../Pages/DashBoard/ManageUsers/ManageUsers";
import AddContest from "../Pages/DashBoard/AddContest/AddContest";
import CreatedContest from "../Pages/DashBoard/CreatedContest/CreatedContest";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signin",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>
      },
      {
        path: 'seeDetail/:id',
        element: <SeeDetails></SeeDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/Contests/${params.id}`)
      },
      {
        path: 'allContest',
        element: <AllContestPage></AllContestPage>
      }
  // //     {
  // //       path: "secret",
  // //       element: (
  // //         <PrivateRoute>
  // //           <Secret></Secret>
  // //         </PrivateRoute>
  // //       ),
  // //     },
    ],
  },
  {
    path: "/dashboard",
    element: (
      // <PrivateRoute>
        <Dashboard></Dashboard>
      // </PrivateRoute>
    ),
  
    children: [
      // normal users routes
      // {
      //   path: 'userHome',
      //   element: <UserHome></UserHome>
      // },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'createdContest',
        element: <CreatedContest></CreatedContest>,
      },
      {
        path: 'updateContest',
        element: <CreatedContest></CreatedContest>,
      },
      // {
      //   path: 'paymentHistory',
      //   element: <PaymentHistory></PaymentHistory>
      // },
      // // admin only routes
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "addContest",
        element: (
         <AddContest></AddContest>
            
          
        ),
      },
      {
        path: "manageContests",
        element: (
          <AdminRoute>
           <ManageContests></ManageContests>
          </AdminRoute>
        ),
      },
      // {
      //   path: "updateItem/:id",
      //   element: 
      //     <AdminRoute>
      //       <UpdateItem></UpdateItem>
      //     </AdminRoute>,
      //   loader: ({params})=> fetch(`https://bistro-boss-server-nine-lovat.vercel.app/menu/${params.id}`)
      // },
      {
        path: "mangeUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);
