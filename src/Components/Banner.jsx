// import Frame from "../assets/Frame.jpg"
// import Rectangle from "../assets/Rectangle.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-10 
            ">
              {/* {`bg-cover bg-center h-screen ${styles.bgImage}`} */}
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-2/3">
      <h1 className="mb-5 text-2xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      <button className="btn bg-green-400 rounded-xl">Explore Now</button>
      <button className="btn  rounded-xl ml-5">Our Feedback</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;