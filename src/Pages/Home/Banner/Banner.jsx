import Marquee from "react-fast-marquee";
import img1 from "../../../assets/Images/a12businessContest1.jpg";
import img2 from "../../../assets/Images/a12medicalContest.jpg";
import img3 from "../../../assets/Images/a12articleWriting.jpg";
import img4 from "../../../assets/Images/a12gaming.jpg";




const Banner = () => {
  
  return (
  <div>
      <div
      className="hero min-h-screen max-w-screen-xl mx-auto"
      style={{
        backgroundImage: "url(https://i.ibb.co/LhfXjBY/a12-Banner1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="-mt-48 text-9xl font-bold text-purple-200">
            Welcome to ContestHub
          </h1>
          <p className="mb-8">
            The ultimate platform where innovation meets recognition! ContestHub
            is a dynamic and user-friendly Project Contest Creation Platform
            designed to foster creativity, engage communities, and celebrate
            talent across various domains.
          </p>
         {/* <BannerInpur></BannerInpur> */}
        </div>

      </div>

      <Marquee className=" mt-60 max-w-6xl">
        <div className="w-[200px] mr-12 border p-2">
          <img src={img1} alt="" />
          <h1 className="text-center text-purple-300">Busines Contest</h1>
        </div>
        ,
        <div className="w-[200px] mr-12 border p-2">
          <img src={img2} alt="" />
          <h1 className="text-center text-purple-300">Medical Contest</h1>
        </div>
        ,
        <div className="w-[200px] mr-12 border p-2">
          <img src={img3} alt="" />
          <h1 className="text-center text-purple-300">Article Writing</h1>
        </div>
        ,
        <div className="w-[200px] mr-12 border p-2">
          <img src={img4} alt="" />
          <h1 className="text-center text-purple-300">Gaming</h1>
        </div>
        <div className="w-[200px] mr-12 border  p-2">
          <img src={img3} alt="" />
          <h1 className="text-center text-purple-300">Article Wirting</h1>
        </div>
      </Marquee>
     
    </div>
 

  </div>
  );
};

export default Banner;

