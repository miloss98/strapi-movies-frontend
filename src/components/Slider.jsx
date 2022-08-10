import "./../styles/components/slider.css";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
//images
import flare from "../images/slider_images/flare.png";
import sixunderground from "../images/slider_images/6underground.png";
import fastandfurious from "../images/slider_images/fastandfurious.png";
import johnwick from "../images/slider_images/johnwick.png";

const Slider = () => {
  return (
    <div className="slider-wrapper">
      <Swiper
        className="swiper"
        modules={[Navigation, EffectFade]}
        navigation
        effect={"fade"}
        speed={800}
        slidesPerView={1}
        loop
      >
        <SwiperSlide className="swiperslide">
          <img src={flare} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={sixunderground} alt="" />
        </SwiperSlide>

        <SwiperSlide className="swiperslide">
          <img src={johnwick} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={fastandfurious} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
