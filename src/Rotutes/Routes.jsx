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
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItem/AddItems";


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
      // {
      //   path: 'payment',
      //   element: <Payment></Payment>
      // },
      // {
      //   path: 'paymentHistory',
      //   element: <PaymentHistory></PaymentHistory>
      // },
      // // admin only routes
      // {
      //   path: 'adminHome',
      //   element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      // },
      // {
      //   path: "addItems",
      //   element: (
      //     <AdminRoute>
      //       <AddItems></AddItems>
      //     </AdminRoute>
      //   ),
      // },
      // {
      //   path: "manageItems",
      //   element: (
      //     <AdminRoute>
      //       <ManageItems></ManageItems>
      //     </AdminRoute>
      //   ),
      // },
      // {
      //   path: "updateItem/:id",
      //   element: 
      //     <AdminRoute>
      //       <UpdateItem></UpdateItem>
      //     </AdminRoute>,
      //   loader: ({params})=> fetch(`https://bistro-boss-server-nine-lovat.vercel.app/menu/${params.id}`)
      // },
      // {
      //   path: "users",
      //   element: (
      //     <AdminRoute>
      //       <AllUsers></AllUsers>
      //     </AdminRoute>
      //   ),
      // },
    ],
  },
]);
