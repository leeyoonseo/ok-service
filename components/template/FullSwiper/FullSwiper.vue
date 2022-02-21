<template>
  <client-only>
    <div>
      <swiper ref="fullSwiper" :options="options">
        <swiper-slide v-for="(item, index) in 5" :key="index">
          {{ `Slide ${index}` }}
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </div>
  </client-only>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FullSwiper',
  data() {
    return {
      options: {
        // effect: 'fade',
        loop: true,
        spaceBetween: 20,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.pagination-index',
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
});
</script>
<style lang="scss">
@import './FullSwiper';
</style>
