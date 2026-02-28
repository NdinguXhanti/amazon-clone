import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const CarouselCategory = () => {
  return (
    <div className="bg-white m-3">
        <div className="text-2xl font-semibold p-3">Shop by Category</div>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
        
        >
            <SwiperSlide>
                <img src="../images/category_0.jpg" alt="Category 0"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="../images/category_1.jpg" alt="Category 1"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="../images/category_2.jpg" alt="Category 2"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="../images/category_3.jpg" alt="Category 3"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="../images/category_4.jpg" alt="Category 4"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="../images/category_5.jpg" alt="Category 5"/>
            </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default CarouselCategory