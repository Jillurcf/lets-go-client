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

const CreatorSlider = () => {
  return (
    <div>
      <Sectiontitle
        heading="Our best Contest Creators"
        subHeading="Ouer honor to the best contest creators"
      ></Sectiontitle>
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
        <SwiperSlide>
        <div className="card card-side bg-purple-200 shadow-xl">
          <figure>
            <img
              src={img1}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div> */}
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-side bg-purple-200 shadow-xl">
          <figure>
            <img
              src={img1}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div> */}
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card card-side bg-purple-200 shadow-xl">
          <figure>
            <img
              src={img1}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div> */}
          </div>
        </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default CreatorSlider;
