import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SeeDetails from "../Pages/SeeDetails/SeeDetails";
import AllContestPage from "../Pages/AllContestPage/AllContestPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import Cart from "../Pages/DashBoard/Cart/Cart";
import Payment from "../Pages/DashBoard/Payment/Payment";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute";
import ManageContests from "../Pages/DashBoard/ManageContests/ManageContests";
import ManageUsers from "../Pages/DashBoard/ManageUsers/ManageUsers";
import AddContest from "../Pages/DashBoard/AddContest/AddContest";
import CreatedContest from "../Pages/DashBoard/CreatedContest/CreatedContest";
import UpdateContest from "../Pages/DashBoard/UpdateContest/UpdateContest";
import UserProfile from "../Pages/DashBoard/UserProfile/UserProfile";
import MywinningContestPage from "../Pages/DashBoard/MywinningContestPage/MywinningContestPage";

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
        element: <SignUp></SignUp>,
      },
      {
        path: "seeDetail/:id",
        element: <SeeDetails></SeeDetails>,
        loader: ({ params }) =>
          fetch(`https://assignment12-server-seven.vercel.app/Contests/${params.id}`),
      },
      {
        path: "allContest",
        element: <AllContestPage></AllContestPage>,
      },
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
      <PrivateRoute>
      <Dashboard></Dashboard>
      </PrivateRoute>
    ),

    children: [
      // normal users routes
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "userWinning",
        element: <MywinningContestPage></MywinningContestPage>,
      },
      {
        path: "createdContest",
        element: <CreatedContest></CreatedContest>,
      },
      {
        path: "updateContest",
        element: <UpdateContest></UpdateContest>,
      },
      // {
      //   path: 'paymentHistory',
      //   element: <PaymentHistory></PaymentHistory>
      // },
      // // admin only routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addContest",
        element: <AddContest></AddContest>,
      },
      {
        path: "manageContests",
        element: (
          <AdminRoute>
            <ManageContests></ManageContests>
          </AdminRoute>
        ),
      },
      {
        path: "UpdateContest/:id",
        element: <UpdateContest></UpdateContest>,
        loader: ({ params }) =>
          fetch(`https://assignment12-server-seven.vercel.app/Contests/${params.id}`),
      },
      {
        path: "mangeUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "userProfile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);
