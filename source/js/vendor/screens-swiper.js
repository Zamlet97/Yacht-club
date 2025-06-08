import Swiper from "swiper/bundle";
import {Navigation} from "swiper/modules";

const swiperScreens = new Swiper('.screens__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  mousewheel: true,
  keyboard: true,
  spaceBetween: 40, 
  modules: [Navigation],
  navigation: {
    nextEl: '.screens-next',
    prevEl: '.screens-prev',
    },
});

export default swiperScreens;
