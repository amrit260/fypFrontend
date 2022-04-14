
import axios from 'axios'
import { serverURL } from 'src/config';
import { toast } from 'react-toastify';


const getItems =async (itemType,url)=>{

   try{
      let res = await axios({
          method: 'get',

          url,
          headers:{
            authorization : `Bearer ${localStorage.getItem('jwt')}`
         },
          json: true
      });
      
      if ((res.status === 200)) {
         
         if(itemType==='Recommendations'){
            return res.data
         }
       
        
        return res.data.data.data;
         // setToursOnThisPage()

      }
      throw new Error(`Failed to fetch ${itemType}`);
      

    } catch(err){
      console.log(err);
      toast.error(`Failed to fetch ${itemType}`,{
         position: toast.POSITION.BOTTOM_RIGHT
      })
      return ;
    }

   }
    
export default getItems;