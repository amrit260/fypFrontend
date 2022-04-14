export const convertToFormData = (data) => {
    const formdata = new FormData()
    
  Object.entries(data).forEach(
    ([key, value]) =>{
       if(key==='images'){
          
          for(let i=0;i<value.length;i++){
             formdata.append('images',value[i])
          }
          
       }
       else if(key==='startLocation'){
          
          
          Object.entries(value).forEach(([key1,value1])=>{
             
 
             if(key1==='coordinates'){
                formdata.append(`startLocation[${key1}][0]`,value1[0])
                formdata.append(`startLocation[${key1}][1]`,value1[1])
             }
             else{
                formdata.append(`startLocation[${key1}]`,value1) 
             }
          })
       
       }
       else if (key ==='locations'){
             for (let i=0;i<value.length;i++){
                formdata.append(`locations[${i}][name]`,value[i].name)
                formdata.append(`locations[${i}][description]`,value[i].description)
                formdata.append(`locations[${i}][address]`,value[i].address)
                formdata.append(`locations[${i}][day]`,value[i].day)
                formdata.append(`locations[${i}][coordinates][0]`,value[i].coordinates[0])
                formdata.append(`locations[${i}][coordinates][1]`,value[i].coordinates[1])
 
             }
             }
 
       
 
       else{
 
          formdata.append(key,value)
       }
    } 
 );
return formdata; 
}

