
import axios from 'axios'
import { serverURL } from 'src/config';
import { toast } from 'react-toastify';


const AddItem =async (itemType,url,data)=>{
   console.log(data)
  const formdata = new FormData()
  Object.entries(data).forEach(
   ([key, value]) => formdata.append(key,value)
);
   
   
    
   console.log(formdata)
   try{
      let res = await axios({
          method: 'post',
          headers:{
            authorization : `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': `multipart/form-data; boundary=${formdata._boundary}`
         },
          url,
         data:formdata,
          
      });
      if ((res.status = 'success')) {
         // setTours(res.data.data);
        
        return res.data.data.data;
         // setToursOnThisPage()

      }
      throw new Error(res);
      

    } catch(err){
        if(err.response){
            let error = err.response.data.message.split(' ')
            let message = ''
            error[0] ==='E11000' ? message = 'Tour already exists' : message = err.response.data.message
             toast.error(err.response.status === 404? 'action failed':message, {
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
    
export default AddItem;