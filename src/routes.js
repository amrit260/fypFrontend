import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';

import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/tourDash';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import HomePage from './pages/homepage/homePage';
import { useSelector } from 'react-redux';
import HeaderComponent from './components/header/header-component';
import Footer from './components/footer/footerComponent';
import TourPage from './pages/tour/tourPage';
import DestinationPage from './pages/destinations/destinationsPage';
import ContactPage from './pages/contact/contactPage';
import MyAccount from './layouts/dashboard/myAccount/myAccount';
import UserBookings from './layouts/dashboard/bookings/userBookings';
import ManageBookings from './layouts/dashboard/bookings/manageBookings';
import TourComponent from './components/Tour/tourComponent'
import SearchCards from './components/search/searchCard';
import ResetPasswordForm from './sections/authentication/resetPassword/resetPassword';

// import LogOut from './components/logoutBtn';

// ----------------------------------------------------------------------

export default function Router() {
  toast.configure();
  const user = useSelector(state => state.auth.user);
  const toastOptions = {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  };
 

  return useRoutes([
    user?
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element:user.role ==='admin' ? <DashboardApp />:<p>page for user coming soon</p> },
        { path: 'myaccount', element: <MyAccount/>} ,
        { path: 'mybookings', element: <UserBookings/>}, 
        { path: 'user', element:user.role ==='admin'? <User />:<Navigate to="/"/>},
        { path: 'managebookings', element:user.role ==='admin'? <ManageBookings />:<Navigate to="/"/>},
        { path: 'products', element:user.role ==='admin'? <Products />:<Navigate to="/"/>},  
        { path: 'blog', element: <Blog /> },
        { path: 'resetPassword/:token', element: <ResetPasswordForm /> },

      ]
    }:<Login/>,
    {
      path: '/auth',
     
      children: [
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
      ]
    },
    {
      path: '/',
      element: (
        <div>
          <HeaderComponent />
          <Outlet />
          <Footer/>
        </div>
      ),
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/tours/:tourID', element: <TourPage /> },
        { path: '/destinations', element: <DestinationPage /> },
        { path: '/contact', element: <ContactPage /> },
        { path: '/search', element: <SearchCards/> },


        
        { path: '404', element: <NotFound /> },
        // { path: '/logout', element: <LogOut /> },
        { path: '*', element: <NotFound/> }
      ]
    },
    { path: '*', element: <NotFound replace /> }
  ]);
}
