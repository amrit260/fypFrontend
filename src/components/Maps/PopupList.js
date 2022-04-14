export default function PopupList({PopupComponent,placeList,handleTourChange}){

    return (placeList.map((place,index)=>{

     

        return <PopupComponent handleTourChange={handleTourChange}  longitude={place.coordinates[0]} latitude={place.coordinates[1]} key={index}
       
       />}))



}