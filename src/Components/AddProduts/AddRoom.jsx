import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable"
import { useAddHotelServicesDataMutation } from "../../redux/api/hotelVillageApi";
const options = [
  { value: 'Daily 6:30 am - 11:00 am', label: 'Daily 6:30 am - 11:00 am' },
  { value: 'Daily 6:30 am - 11:00 am', label: 'Daily 6:30 am - 11:00 am' },
  { value: 'Daily 6:30 am - 11:00 am', label: 'Daily 6:30 am - 11:00 am' },
];

const image_hosting_Token=import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddRoom = () => {
    const { register, handleSubmit, reset } = useForm();
    const [availableTime, setAvailableTime] = useState(null);
const [addHotelServicesData,{data, error}] = useAddHotelServicesDataMutation()
const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_Token}`
  
   const onSubmit =(data) =>{
    const formData = new FormData();
    formData.append('image',data.image[0])
    fetch(img_hosting_url,{
      method:'POST',
      body:formData
    })
    .then(res =>res.json())
    .then(imgResponse =>{
      if(imgResponse.success){
const imageUrl = imgResponse.data.display_url;

addHotelServicesData({...data, status:'pending', image:imageUrl})
      }
    })

    reset();

console.log(data)
   }
    return (
        <div>
          <h3 className=" text-2xl text-orange-700 hover:border-white hover:border-b-2 w-64 mb-10 mx-auto">Add New Spa</h3>
           <form onSubmit={handleSubmit(onSubmit)}>

        <div className="flex flex-col gap-3">
      
         {/* NAME */}
          <input className=" py-2 px-3 border-b-2 hover:border-orange-700 w-[240px] md:w-[500px] mx-auto"
            type="text"
            id="name"
            {...register('name')}
            placeholder="Spa Name"
          />  
           {/*CATEGORY*/}
          <input  className=" py-2 px-3 border-b-2 hover:border-orange-700 w-[240px] md:w-[500px] mx-auto" defaultValue='Spa' type="text" placeholder="" id="category"
            {...register('category')}  readOnly />
          {/* PRICE */}
          <input
            className=" py-2 px-3 border-b-2 hover:border-orange-700 w-[240px] md:w-[500px] mx-auto"
            type="number"
            id="price"
            {...register('price')}
            placeholder="Spa Price"
          />
          {/* Review */}
          <input
            className=" py-2 px-3 border-b-2 hover:border-orange-700 w-[240px] md:w-[500px] mx-auto"
            type="number"
            id="review"
            {...register('review')}
            defaultValue={0}
            placeholder="review"
            readOnly
          />
 {/* AVAILABLE TIME */}
          <CreatableSelect
                                    defaultValue={availableTime}
                                    onChange={setAvailableTime}
                                    options={options }
                                    isMulti
                                    required
                                    className=" border-black  px-3 w-[270px] md:w-[530px] mx-auto "
                                />

                <textarea
           className=" py-2 px-3 border-b-2 hover:border-orange-700 w-[240px] md:w-[500px] mx-auto"
            type="text"
            cols={10}
            rows={4}
            id="description"
            placeholder="Spa Description"
            {...register('description')}
          />
           {/* image */}
           <input
            className=" py-2 px-3 b w-[240px] md:w-[500px] mx-auto"
            type="file"
            id="image"
            {...register('image')}
          />                 
        </div>
        
            



        <div className="flex gap-3 justify-center mt-2">
          
          <button type="submit" className="bg-orange-700 border-2 border-orange-400 text-white px-2 ">
            submit
          </button>
        </div>
      </form>
        </div>
    );
};

export default AddRoom;