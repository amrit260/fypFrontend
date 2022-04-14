
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
      if ((res.status = 'success')) {
         // setTours(res.data.data);
        
        return res.data.data.data;
         // setToursOnThisPage()

      }
      throw new Error(`Failed to Update  ${itemType}`);
      

    } catch(err){
      console.log(err);
      toast.error(`Failed to update ${itemType}`,{
         position: toast.POSITION.BOTTOM_RIGHT
      })
      return ;
    }

   }
    
export default updateBooking;