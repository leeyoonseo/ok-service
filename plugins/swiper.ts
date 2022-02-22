import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { Swiper as SwiperClass, Navigation, Pagination, Autoplay, EffectFade } from "swiper/core";
import "swiper/swiper-bundle.min.css";

SwiperClass.use([Navigation, Pagination, Autoplay, EffectFade]);
Vue.use(VueAwesomeSwiper);
