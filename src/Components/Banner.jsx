
const Banner = () => {
    return (
        <div>
            <div className="hero h-[600px] mt-5 rounded-xl" 
            style={{backgroundImage:"url(https://i.ibb.co/qptBTsD/Rectangle.jpg)"}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" md:w-2/3">
      <h1 className="mb-5 text-white  md:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5 text-white">we provide the world famouse best food for  discounted price to our specials guest . if you want discounted than sign now our website and visit our kaynus resturent.</p>
      <button className="btn bg-green-400 font-bold rounded-xl">Explore Now</button>
      <button className="btn text-white font-bold  rounded-xl ml-5">Our Feedback</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;