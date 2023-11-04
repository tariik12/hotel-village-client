import { useForm } from "react-hook-form";


const AddFood = () => {
    const { register, handleSubmit } = useForm();

   const onSubmit =(data) =>{
console.log(data)
   }
    return (
        <div>
            <form className="space-y-3 w-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-evenly">
                <div >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md"
                {...register('name')}
              />
            </div>
            <div >
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                className="w-full rounded-md"
                {...register('category')}
              />
            </div>
                </div>
                <div className="flex justify-evenly">
                <div >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md"
                {...register('name')}
              />
            </div>
            <div >
              <label htmlFor="category">Category</label>
              <input
                type="text"
                id="category"
                className="w-full rounded-md"
                {...register('category')}
              />
            </div>
                </div>
           
            <div className="relative !mt-8">
              <button type="submit" className="btn btn-primary w-full">
                Add Product
              </button>
            </div>
          </form>
        </div>
    );
};

export default AddFood;