import { Link } from "react-router-dom";

const BestOnlineRate =()=>{
    return(
        <div className="">
            <img  src="https://www.nhcubahotels.com/wp-content/uploads/2019/03/slideshow1.jpg" alt="" />
<h4 className='text-4xl font-thin my-5  mx-20'>Welcome to <span className='uppercase text-orange-700'>Vibrant Vineyard</span> 's Best Online Rate Guarantee!</h4>
<p className="text-md font-thin mx-20 my-5"> We are committed to providing our guests with the best possible rates when they book directly through our official website. Our goal is to ensure that you receive the most value for your stay, along with exclusive benefits that you won't find elsewhere. Rest assured, when you book with us, you're getting the best deal available.</p>

<img className='h-[300px] mx-auto ' src="https://d49ad29418549975eb1d-962b6c8bf3c705951d287d4ea0801c71.ssl.cf1.rackcdn.com/u/best-rate-guarantee/Book-Direct-Thumbnails---4x3---Best-Rate-Guarantee.png" alt="" />

<div className="md:flex justify-evenly my-10 mx-10 gap-5">
    <div>
        <div>            
        <h2 className="text-2xl font-thin">Segment Your Audience:</h2>
        <ul>
            <li> 🟠 Identify different segments of your target audience based on demographics, behavior, or preferences.</li>
            <li> 🟠 Tailor your marketing messages to specific segments for better relevance.</li>
        </ul>
        </div>
        <div className="mt-5">            
        <h2 className="text-2xl font-thin">Stay Competitive:</h2>
        <ul>
            <li> 🟠Keep an eye on your competitors and market trends.</li>
            <li> 🟠 Stay innovative and be willing to adapt your marketing strategies to stay ahead.</li>
        </ul>
        </div>
    </div>
    <div>
    <div>            
        <h2 className="text-2xl font-thin">Build a Strong Online Presence:</h2>
        <ul>
            <li> 🟠 Maintain an updated and user-friendly website with easy navigation.</li>
            <li> 🟠 Leverage social media platforms to engage with your audience and showcase your hotel's personality.</li>
        </ul>
        </div>
    <div className="mt-5">            
        <h2 className="text-2xl font-thin">Responsive Customer Service:</h2>
        <ul>
            <li> 🟠Provide excellent customer service and ensure prompt responses to inquiries.</li>
            <li> 🟠 Happy guests are more likely to become repeat customers and advocates for your hotel.</li>
        </ul>
        </div>
    </div>
</div>

<Link to='/' className="flex justify-center text-orange-700 my-5 p-2 rounded-md border "> Thank you. Go Back Home</Link>
        </div>
    )
}

export default BestOnlineRate;