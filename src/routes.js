import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import HomePage from './pages/homepage/homePage';
import { useDispatch } from 'react-redux';
import HeaderComponent from './components/header/header-component';
import SignIn from './components/sign-in/signInComponent';
import SignUp from './components/sign-up/signUpComponent';
import Footer from './components/footer/footerComponent';
import TourPage from './pages/tour/tourPage';
import DestinationPage from './pages/destinations/destinationsPage';
import ContactPage from './pages/contact/contactPage';
// import LogOut from './components/logoutBtn';

// ----------------------------------------------------------------------

export default function Router() {
  toast.configure();
  
  const toastOptions = {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  };

  let userLoggedIn = localStorage.getItem('loggedIn') ? true : false;

  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
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

        
        { path: '404', element: <NotFound /> },
        // { path: '/logout', element: <LogOut /> },
        { path: '*', element: <NotFound/> }
      ]
    },
    { path: '*', element: <NotFound replace /> }
  ]);
}
