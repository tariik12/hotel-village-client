
import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable"
const options = [
  { value: 'Daily 6:30 am - 11:00 am', label: 'Daily 6:30 am - 11:00 am' },
  { value: 'Daily 6:30 am - 11:00 am', label: 'Daily 6:30 am - 11:00 am' },
  { value: 'Daily 6:30 am - 11:00 am', label: 'Daily 6:30 am - 11:00 am' },
];

const AddRoom = () => {
    const { register, handleSubmit, reset } = useForm();
    const [selectedSub_Category, setSelectedSub_Category] = useState(null);
  
   const onSubmit =(data) =>{
console.log(data)
reset()
   }
    return (
        <div>
          <h3 className=" text-2xl text-orange-700 hover:border-white hover:border-b-2 w-64 mb-10 mx-auto">Add New Room</h3>
           <form onSubmit={handleSubmit(onSubmit)}>

        <div className="flex flex-col gap-3">
      
         {/* NAME */}
          <input className=" py-2 px-3 border-b-2 hover:border-orange-700 w-[240px] md:w-[500px] mx-auto"
            type="text"
            id="name"
            {...register('name')}
            placeholder="Room Name"
          />  
           {/*CATEGORY*/}
          <input  className=" py-2 px-3 border-b-2 hover:border-orange-700 w-[240px] md:w-[500px] mx-auto" defaultValue='Our Room' type="text" placeholder="" id="category"
            {...register('category')}  readOnly />
          {/* SCHEDULE */}
             <select
            className="  py-2 px-3 border-b-2 hover:border-orange-700 w-[240px] md:w-[500px] mx-auto"
            id="schedule"
            {...register('schedule')}
          >
            <option defaultValue value="Breakfast">
            Breakfast
            </option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
          {/* PRICE */}
          <input
            className=" py-2 px-3 border-b-2 hover:border-orange-700 w-[240px] md:w-[500px] mx-auto"
            type="number"
            id="price"
            {...register('price')}
            placeholder="Room Price"
          />
 {/* AVAILABLE TIME */}
          <CreatableSelect
                                    defaultValue={selectedSub_Category}
                                    onChange={setSelectedSub_Category}
                                    options={options }
                                    isMulti
                                    isSearchable
                                    required
                                    className="  px-3 w-[270px] md:w-[530px] mx-auto "
                                />

                <textarea
           className=" py-2 px-3 border-b-2 hover:border-orange-700 w-[240px] md:w-[500px] mx-auto"
            type="text"
            cols={10}
            rows={4}
            id="description"
            placeholder="Room Description"
            {...register('description')}
          />
           {/* image */}
           <input
            className=" py-2 px-3 border-b-2 hover:border-orange-700 w-[240px] md:w-[500px] mx-auto"
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