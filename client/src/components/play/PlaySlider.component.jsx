import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PlayCard from "./PlayCard.component";

const shuffleList = (list) => {
  return list.sort((a, b) => 0.5 - Math.random());
};

export default function PlaySlider(props) {
  return (
    <Swiper
      spaceBetween={8}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      slidesPerView={"auto"}
      modules={[Navigation, Pagination]}
    >
      {props.itemsList &&
        shuffleList(props.itemsList).map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <PlayCard play={item} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
