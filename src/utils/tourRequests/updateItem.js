
import axios from 'axios'
import { serverURL } from 'src/config';
import { toast } from 'react-toastify';


const updateItem =async (itemType,url,data)=>{
   console.log(data)
  const formdata = new FormData()
  Object.entries(data).forEach(
   ([key, value]) =>{
      if(key==='images'){
         alert(value)
         for(let i=0;i<value.length;i++){
            formdata.append('images',value[i])
         }
         
      }
      else{

         formdata.append(key,value)
      }
   } 
);
   
   
    
   console.log(formdata)
   try{
      let res = await axios({
          method: 'patch',
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
      throw new Error(`Failed to Update  ${itemType}`);
      

    } catch(err){
      console.log(err);
      toast.error(`Failed to update ${itemType}`,{
         position: toast.POSITION.BOTTOM_RIGHT
      })
      return ;
    }

   }
    
export default updateItem;