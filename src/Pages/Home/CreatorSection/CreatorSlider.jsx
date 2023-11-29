// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';
import Sectiontitle from "../../../Component/SectionTitle/Sectiontitle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import img1 from "../../../assets/Images/winner1.jpg";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useState } from "react";

const CreatorSlider = () => {
  const [getCreator, setGetCreator] = useState([]);
console.log(getCreator);
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure();
  const { data: user = [], } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

console.log(user[0]?.role);
 useEffect(() => {
  axiosPublic.get(`/users/${user[0]?.role}`)
  .then(res=> {
    console.log(res.data);
    setGetCreator(res.data)
  })
 
  
 }, [])




  return (
    <div>
      <Sectiontitle
        heading="Our best Contest Creators"
        subHeading="Ouer honor to the best contest creators"
      ></Sectiontitle>
        <div className="my-12 max-w-screen-lg mx-auto">
        <h1 className="text-center text-3xl text-purple-600 font-bold">Unleash Your Creativity! <br /> Enter our Exclusive Contest Today!</h1>
        <p className="text-center text-purple-400">As contest creators, we've envisioned a theme that sparks curiosity, ignites passion, and beckons you to explore the depths of your imagination. This contest is your canvas, and we encourage you to be bold, daring, and unabashedly original.</p>
      </div>
      {/* <Swiper

        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[50%]"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
       
      </Swiper> */}
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[40%]"
      >
        {/* <SwiperSlide>
          <img src={img1} alt="" />
          <h1 className="absolute top-8 text-purple-200">
            Contest Creator Name
          </h1>
          <h1>contest Name</h1>
          <h1>Descriptions</h1>
        </SwiperSlide> */}
     {
      getCreator.map(creator=> 
        <SwiperSlide key={creator._id}>
        <div className="card card-side bg-purple-200 shadow-xl">
          <figure>
            <img
              src={creator.image}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name: {creator.name}</h2>
            <p>Role: {creator.role}</p>
            <p>Inovation is my heart</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div> */}
          </div>
        </div>
        </SwiperSlide>
        )
     }               
      </Swiper>
    </div>
  );
};

export default CreatorSlider;
