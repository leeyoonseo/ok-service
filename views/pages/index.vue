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

    <!-- TODO: Swiper  -->
    <!-- <section class="section section-popular">
      <div class="section-inner">
        <strong>Section Title</strong>
        <div class="contents swiper"></div>
      </div>
    </section> -->

    <base-section class="section-guests">
      <strong>Section Title</strong>
      <div class="contents graph"></div>
    </base-section>

    <base-section class="section-new">
      <strong>Section Title</strong>
      <div class="contents"></div>
    </base-section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MainPage',
  layout: 'base',
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
