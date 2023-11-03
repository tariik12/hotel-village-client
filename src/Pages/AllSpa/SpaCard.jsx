
import { GrMapLocation } from "react-icons/gr";
import { Rating,ThinStar } from '@smastrom/react-rating'
const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#FF4433',
  inactiveFillColor: '#FFF5EE'
}
import '@smastrom/react-rating/style.css'


const SpaCard = ({spa}) => {
    return (
        <div>
             <div  className="hover:shadow-[#f1f1f3ef] overflow-hidden  shadow-lg md:w-[300px] h-[470px] border-2 hover:border-orange-600 hover:shadow-xl   rounded-2xl containWid p-2 md:ms-10 bg-white mx-auto" style={{ boxShadow: '2px 2px 4px  1px #060a099f ' }} >
                   <img onClick={()=>openModal(spa.name)} src={spa.image} title={`Show ${spa.name} Gallery`} alt={`${spa.name}'Gallery'`} className=" w-full h-[200px] overflow-hidden hover:shadow-2xl hover:rounded-lg"/>
                   
                   <h3 className="text-center text-2xl text-orange-600 mb-4">{spa.name}</h3>
                  <p >{spa.description}</p>
                  <p className=" font-thin flex justify-start items-center gap-3 my-2"><GrMapLocation className=" text-orange-900 "/>Air Port Dhaka, Bangladesh</p>
                  <div className="flex justify-start gap-6 items-center ">


                  <Rating style={{ maxWidth: 120 }} itemStyles={myStyles} value={spa.rating} readOnly />
                  <p >reviews &#40;1411&#41;</p>
                  </div>
<div className=" flex justify-center">

                  <button className=" mt-4 bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#ff4500] " >Order Now</button>
</div>
               </div>
        </div>
    );
};

export default SpaCard;