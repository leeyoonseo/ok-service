<template>
  <div class="container-main">
    <section class="section section-visual">
      <div class="section-inner">
        <div class="contents">
          <h2 class="visual-title">메인입니다</h2>
          <p>메인의 서브 텍스트 입니다.</p>
        </div>
      </div>
    </section>

    <base-section class="section-swiper">
      <strong class="section-title">Section Title</strong>
      <div class="contents">
        <full-swiper :data="swiper" />
      </div>
    </base-section>

    <base-section>
      <strong class="section-title">Section Title</strong>
      <div class="contents">
        <ul>
          <li>테스트</li>
          <li>테스트</li>
          <li>테스트</li>
          <li>테스트</li>
        </ul>
      </div>
    </base-section>

    <!-- TODO: Custom Mobile Scroll  -->
    <base-section class="section-posts">
      <strong class="section-title">Section Title</strong>
      <div class="contents">
        <ul class="cards">
          <li v-for="(itemin, index) in 5" :key="index" class="card-items">
            <Image-card
              type="button"
              src="images/img-cat.jpg"
              title="'소줏값 오른다'"
              text="하이트진로 출고가 7.9% 인상, 주정·병뚜껑 등 원부자재값 인상 이유…업계 줄인상 전망"
              @click="$router.push(`/detail/${index}`)"
            />
          </li>
        </ul>
      </div>
    </base-section>

    <base-section type="full" class="section-banner">
      <div class="contents">
        <strong class="title">전북도, 매달 10일 '일회용품 없는 날' 지정 운영</strong>
        <span class="more">Read more</span>
      </div>
    </base-section>

    <base-section class="section-new">
      <strong>Section Title</strong>
      <div class="contents"></div>
    </base-section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as dummy from '~/constants/dummy';

export default Vue.extend({
  name: 'MainPage',
  layout: 'base',
  data() {
    return {
      swiper: [] as dummy.IFullSwiper[],
    };
  },
  created() {
    this.swiper = dummy.fullSwiper;
  },
  methods: {
    test2() {
      // const a = [100, 1000000000000, 100, 200, 300, 400, 500, 600, 700, 800];
      const a = [
        { name: 'kim', age: 27 },
        { name: 'kim', age: 27 },
      ];
      console.log(a);
    },
    test() {
      console.log('test');
    },
  },
});
</script>
<style lang="scss" scoped>
@import './styles/index.scss';
</style>
