import { Rating,ThinStar } from '@smastrom/react-rating'
const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#FF4433',
  inactiveFillColor: '#FFF5EE'
}
import '@smastrom/react-rating/style.css'
import { GrMapLocation } from "react-icons/gr";
import { useDeleteHotelServiceDataMutation, useUpdateHotelServiceDataMutation } from '../../redux/api/hotelVillageApi';
const ManageFoodCard = ({food}) => {
    const [updateHotelServiceData, {data,error}] = useUpdateHotelServiceDataMutation();
    const [deleteHotelServiceData] = useDeleteHotelServiceDataMutation()
    console.log(data,error)
    const handleUpdate =(id, updatedStatus) =>{
        const data ={
            status:updatedStatus
        }
        const options ={
            id:id,
            data:data
        }
        updateHotelServiceData(options)
    }

    const handleDelete =(id) =>{
      deleteHotelServiceData(id)
    }
    let updatedStatus;
    if (food.status === 'pending') {
        updatedStatus = 'approved';
      } else if (food.status === 'approved') {
        updatedStatus = 'done';
      } else {
        updatedStatus = 'archive';
      }
    return (
        <div>
        <div  className="hover:shadow-[#f1f1f3ef] overflow-hidden  shadow-lg md:w-[300px] h-[470px] border-2 hover:border-orange-600 hover:shadow-xl   rounded-2xl containWid p-2 md:ms-10 bg-white mx-auto" style={{ boxShadow: '2px 2px 4px  1px #060a099f ' }} key={food._id}>
              <img onClick={()=>openModal(food.name)} src={food.image} title={`Show ${food.name} Gallery`} alt={`${food.name}'Gallery'`} className=" w-full h-[200px] overflow-hidden hover:shadow-2xl hover:rounded-lg"/>
              
              <h3 className="text-center text-2xl text-orange-600 mb-4">{food.name}</h3>
             <p >{food.description}</p>
             <p className=" font-thin flex justify-start items-center gap-3 my-2"><GrMapLocation className=" text-orange-900 "/>Air Port Dhaka, Bangladesh</p>
             <div className="flex justify-start gap-6 items-center ">


             <Rating style={{ maxWidth: 120 }} itemStyles={myStyles} value={food.rating} readOnly />
             <p >reviews &#40;1411&#41;</p>
             </div>
<div className=" flex justify-center">

             <button onClick={()=>handleUpdate(food._id, updatedStatus)} className=" mt-4 bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#ff4500] " >{food.status}</button>
             <button onClick={()=>handleDelete(food._id)} className=" mt-4 bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#ff4500] " >delete</button>
</div>
          </div>
   </div>
    );
};

export default ManageFoodCard;