import "./../styles/components/slider.css";
import { useEffect, useState } from "react";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// graphql
import { useQuery } from "@apollo/client";
import { SLIDER } from "../modules/queries";

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const { data, loading, error } = useQuery(SLIDER);

  const url = "http://localhost:1337";

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setSliderData(data.sliders.data);
  }, [data, error, loading]);
  console.log(sliderData);
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
        {sliderData.map((sliderImage) => {
          const { attributes, id } = sliderImage;
          console.log(attributes);
          return (
            <SwiperSlide key={id} className="swiperslide">
              <img
                src={url + attributes?.images?.data[0]?.attributes?.url}
                alt={attributes.name}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
