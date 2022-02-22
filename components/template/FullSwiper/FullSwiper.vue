<template>
  <client-only>
    <div
      class="full-swiper-wrapper"
      @mouseenter="handleMouseEvents"
      @mouseleave="handleMouseEvents"
    >
      <swiper ref="fullSwiper" :options="options" class="full-swiper">
        <swiper-slide v-for="(item, index) in data" :key="index" class="full-swiper-items">
          <div class="full-swiper-image">
            <img :src="item.src" />
          </div>
          <div class="full-swiper-info">
            <strong class="title">{{ item.title }}</strong>
            <span class="text">{{ item.text }}</span>
            <div class="pagination-wrapper">
              <div class="pagination">
                <div class="pagination-index">
                  <span>{{ index + 1 }}</span>
                  <span>{{ data.length }}</span>
                </div>
                <div slot="pagination" class="pagination-bar"></div>
              </div>
              <button class="prev-button"></button>
              <button class="next-button"></button>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </client-only>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FullSwiper',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      options: {
        effect: 'fade',
        loop: true,
        spaceBetween: 20,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.next-button',
          prevEl: '.prev-button',
        },
        pagination: {
          el: '.pagination-bar',
          type: 'progressbar',
        },
        on: {
          slideChangeTransitionStart(el: any) {
            const slideDuplicateClass = `.${el.params.slideClass}.${el.params.slideDuplicateClass}`;

            el.$wrapperEl.children(slideDuplicateClass).each(function (child: HTMLDivElement) {
              const idx = child.getAttribute('data-swiper-slide-index');
              const slideClass = `.${el.params.slideClass}[data-swiper-slide-index="${idx}"]:not(.${el.params.slideDuplicateClass})`;

              el.innerHTML = el.$wrapperEl.children(slideClass).html();
            });
          },
          slideChangeTransitionEnd(el: any) {
            el.slideToLoop(el.realIndex, 0, false);
          },
        },
      },
    };
  },
  methods: {
    // handleMouseEvents() {
    handleMouseEvents({ type }: { type: string }): void {
      const swiperRef = this.$refs.fullSwiper;
      if (swiperRef) {
        console.log('swiperRef', type, swiperRef);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        // const swiper = swiperRef?.$swiper as Vue | Swiper;
      }
      // if (type === 'mouseenter') {
      //   swiperRef.autoplay.stop();
      // } else {
      //   swiperRef.autoplay.start();
      // }
    },
  },
});
</script>
<style lang="scss">
@import './FullSwiper';
</style>
