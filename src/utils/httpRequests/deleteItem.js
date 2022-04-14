import axios from 'axios'

import { serverURL } from 'src/config';
import { toast } from 'react-toastify';



const deleteItem =async (itemType,url)=>{


   try{
      let res = await axios({
          method: 'delete',
          url,
          headers:{
            authorization : `Bearer ${localStorage.getItem('jwt')}`
         },
          json: true
      });
      if ((res.statusCode = 204)) {
         // setTours(res.data.data);
         toast.success(`${itemType} deleted successfully`,{
            position:toast.POSITION.BOTTOM_RIGHT
         });

         // setToursOnThisPage()
         return true
      }
      throw new Error(res.message);
      

    } catch(err){
      console.log(err);
      toast.error(err.response.data.message,{
         position: toast.POSITION.BOTTOM_RIGHT
      })
      return false;
    }

   }
    
export default deleteItem;