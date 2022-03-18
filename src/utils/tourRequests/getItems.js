
import axios from 'axios'
import { serverURL } from 'src/config';
import { toast } from 'react-toastify';


const getItems =async (itemType,url)=>{

   try{
      let res = await axios({
          method: 'get',
          url,
          json: true
      });
      if ((res.status = 'success')) {
         // setTours(res.data.data);
        
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