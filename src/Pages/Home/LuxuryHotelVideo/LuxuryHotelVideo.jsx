import { BiSolidVideos } from 'react-icons/bi';

const LuxuryHotelVideo = () => {
    return (
        <div className='mt-20 '>
            <img src="https://sailing.thimpress.com/demo-3/wp-content/uploads/sites/3/2021/07/video.jpg" alt="" />
            <h4 className=' flex text-xl justify-around bg-orange-700 py-5 hover:bg-orange-600 w-3/4 mx-auto rounded-lg  z-10 '>A Luxury Boutique Hotel In Palm Desert <label htmlFor="my_modal_7" className="btn" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"><BiSolidVideos className='text-2xl'/></label> </h4>
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