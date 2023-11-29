// import FoodCard from "../../../Component/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ContestCard from "./ContestCard";
import PaginatedItems from "../Pagination";

const ContestTab = ({ items }) => {
    
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
       
          <div className="grid md:grid-cols-3 gap-10">
            {items.map((item) => (
               <SwiperSlide key={item._id}>
                <ContestCard contest={item}></ContestCard>
              </SwiperSlide>
              
            ))}
          </div>
          
      </Swiper>
      <PaginatedItems itemsPerPage={10}></PaginatedItems>
      {/* <PaginatedItems itemsPerPage={10} /> */}
    </div>
  );
};

export default ContestTab;
