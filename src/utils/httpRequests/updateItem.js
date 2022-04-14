
import axios from 'axios'
import { serverURL } from 'src/config';
import { toast } from 'react-toastify';




const updateBooking =async (itemType,url,data)=>{
   console.log(data)
 

   try{
      let res = await axios({
          method: 'patch',
          headers:{
            authorization : `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': `application/json`
         },
          url,
         data,
          
      });
      console.log(res)
      if ((res.status === 200)) {
         // setTours(res.data.data);
         if(itemType === 'Reset Password' || 'Password'){

            return res.data.data
         }
       
        return res.data.data.data;
         // setToursOnThisPage()

      }
      if((res.status ===401)){

         throw new Error(`${res.message}`);
      }
      

    } catch(err){
      console.log(err.response.data.message);
      toast.error(`Failed to update ${itemType} : ${err.response.data.message}`,{
         position: toast.POSITION.BOTTOM_RIGHT
      })
      return ;
    }

   }
    
export default updateBooking;