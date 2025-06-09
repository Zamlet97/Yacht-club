import Swiper from "swiper/bundle";
import {Navigation} from "swiper/modules";
import 'swiper/css';

const swiperScreens = new Swiper('.screens__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  effect: "fade",
  loop: true,
  mousewheel: true,
  autoHeight: true,
  keyboard: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.screens-next',
    prevEl: '.screens-prev',
    },
});

export default swiperScreens;
