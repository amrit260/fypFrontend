
import axios from 'axios'
import { serverURL } from 'src/config';
import { toast } from 'react-toastify';


const AddBooking =async (itemType,url,data)=>{

   console.log(data)
 
  

  

  
   try{
      let res = await axios({
          method: 'post',
          headers:{
            authorization : `Bearer ${localStorage.getItem('jwt')}`,
            // 'Content-Type': `multipart/form-data; boundary=${formdata._boundary}`
            'Content-Type': `application/json`
         },
          url,
         data:data,
          
      });
      if ((res.status = 'success')) {
         // setTours(res.data.data);
        console.log(res.data)
        return res.data.data.data;
         // setToursOnThisPage()

      }
      throw new Error(res);
      

    } catch(err){
        if(err.response){
            let error = err.response.data.message.split(' ')
            let message = ''
            error[0] ==='E11000' ? message = `${itemType} already exists` : message = err.response.data.message
             toast.error(message === ''?'action failed':message, {
           position: toast.POSITION.BOTTOM_RIGHT
         });
          }
          else{
            toast.error('network error', {
              position: toast.POSITION.BOTTOM_RIGHT
            });
          }
         
      return ;
    }

   }
    
export default AddBooking;