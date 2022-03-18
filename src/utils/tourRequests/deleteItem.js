import axios from 'axios'

import { serverURL } from 'src/config';
import { toast } from 'react-toastify';



const deleteItem =async (url,id)=>{


   try{
      let res = await axios({
          method: 'delete',
          url: `${url}/${id}`,
          headers:{
            authorization : `Bearer ${localStorage.getItem('jwt')}`
         },
          json: true
      });
      if ((res.statusCode = 204)) {
         // setTours(res.data.data);
         toast.success('tour deleted successfully');

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