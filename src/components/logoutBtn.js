import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { logout } from "src/redux/auth/authAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const LogOutBtn = () => {
  
   const navigate = useNavigate();
   const dispatch = useDispatch();
    
       toast.configure();
  function handleLogOut() {
     
  
  toast.success("Logged out successfully!", {
    position: toast.POSITION.BOTTOM_RIGHT
  });
        localStorage.clear()
          dispatch(logout());
         navigate(
             '/'
         )
        }

        // useEffect(() => {
        //     handleLogOut();}, [])



 
 return (
    <div className="signout nav-link nav-btn" onClick={handleLogOut} >  <i className="fas fa-sign-out-alt"></i></div>
  );

};

export default LogOutBtn;
