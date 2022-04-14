import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { logout } from "src/redux/auth/authAction";
import { useDispatch } from "react-redux";
import {MenuItem } from "@mui/material"
import Iconify from './Iconify'

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
  <MenuItem
    onClick={handleLogOut}
  
        sx={{ typography: 'body2', py: 1, px: 2.5 }}
      >
        <Iconify
          icon="mdi:logout"
          sx={{
            mr: 2,
            width: 24,
            height: 24
          }}
        />
      Logout
       
      </MenuItem>
  );

};

export default LogOutBtn;
