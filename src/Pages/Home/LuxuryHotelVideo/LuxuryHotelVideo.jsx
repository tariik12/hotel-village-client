import { BiSolidVideos } from 'react-icons/bi';

const LuxuryHotelVideo = () => {
    return (
        <div className='mt-20 '>
            <img src="https://sailing.thimpress.com/demo-3/wp-content/uploads/sites/3/2021/07/video.jpg" alt="" />
            <div className=' md:flex md:flex-row-reverse flex-col text-xl justify-around bg-gradient-to-t from-[#f1f1f3ef] via-[#228eac3d] to-[#f7f4f483] hover:bg-gradient-to-t hover:from-[#f1f1f3cf] hover:via-[#228eac97] hover:to-[#f7f4f4b8] py-5 mx-2  md:w-3/4 md:mx-auto rounded-lg  z-10 items-center text-orange-700 hover:text-white'><label htmlFor="my_modal_7" className=" flex justify-center" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"><BiSolidVideos className='text-4xl '/> </label> <p className=''>A Luxury Boutique Hotel In Palm Desert</p>  </div>
            {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-7/12 max-w-5xl bg-transparent">
  <iframe width="700" height="450" src="https://www.youtube.com/embed/0_RPAZuzPs8?si=vA0UdcrAv7XUBM08" title="YouTube video player"   allowfullscreen></iframe>
  
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
            
            
        </div>

    );
};

export default LuxuryHotelVideo;