<template>
  <!-- role 속성은 웹 접근성에 필요할 경우 넣는 속성이므로 swiper의 필수값은 아닙니다 -->
  <swiper ref="filterSwiper" :options="swiperOption" role="tablist" class="swiper_slider">
    <swiper-slide role="tab">
      <a href="#none"><img src="../src/assets/images/lego_new1_1_11zon.png" alt=""></a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none"><img src="../src/assets/images/lego_new2_2_11zon.png" alt=""></a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none"><img src="../src/assets/images/lego_new3_3_11zon.png" alt=""></a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none"><img src="../src/assets/images/lego_new4_4_11zon.png" alt=""></a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none"><img src="../src/assets/images/lego_new5_5_11zon.png" alt=""></a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none"><img src="../src/assets/images/lego_new6_6_11zon.png" alt=""></a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none"><img src="../src/assets/images/lego_new7_7_11zon.png" alt=""></a>
    </swiper-slide>
    <swiper-slide role="tab">
      <a href="#none"><img src="../src/assets/images/lego_new8_8_11zon.png" alt=""></a>
    </swiper-slide>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'FilterSwiper',
  data() {
    const _vm = this
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 6,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        freeMode: true,
        centerInsufficientSlides: true,
        on: {
          click: function () {
            _vm.slideMoveTo()
            _vm.activeTab()
          },
          tap: function () {
            _vm.slideMoveTo()
            _vm.activeTab()
          },
          resize: function () {
            this.allowTouchMove = !_vm.isOverview
          }
        }
      }
    }
  },
  methods: {
    swiperInit: function () {
      this.swiper.allowTouchMove = !this.isOverview
      this.activeTab()
    },
    activeTab: function (swiper) {
      swiper = swiper || this.swiper
      if (swiper.hasOwnProperty('clickedSlide') && !swiper.clickedSlide) return

      const slideSelector = `.${swiper.params.slideClass}`
      const selectedEl = swiper.clickedSlide || swiper.slides[swiper.params.initialSlide]
      const swiperArr = document.querySelectorAll(slideSelector)
      Array.from(swiperArr).forEach((el) => {
        el.setAttribute('aria-selected', 'false')
        selectedEl.setAttribute('aria-selected', 'true')
      })
    },
    slideMoveTo: function (swiper = this.swiper) {
      if (!swiper.clickedSlide) return

      const activeIndex = swiper.clickedIndex
      swiper.slideTo(activeIndex)
    }
  },
  computed: {
    swiper: function () {
      return this.$refs.filterSwiper.swiper
    },
    isOverview: function () {
      return window.innerWidth >= this.swiper.virtualSize
    }
  },
  mounted() {
    this.swiperInit()
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss" scoped>
.swiper-container {
  padding: 15px;

  &:before,
  &:after {
    display: block;
    position: absolute;
    top: 0;
    width: 20px;
    height: 100%;
    z-index: 10;
    content: "";
  }

  &:before {
    left: 0;
    background: linear-gradient(90deg, #fff -20.19%, rgba(255, 255, 255, 0.8) 18.31%, rgba(255, 255, 255, 0) 75%);
  }

  &:after {
    right: 0;
    background: linear-gradient(270deg, #fff -20.19%, rgba(255, 255, 255, 0.8) 18.31%, rgba(255, 255, 255, 0) 75%);
  }

  .swiper-wrapper {
    .swiper-slide {
      width: 40%;
      min-width: 300px;
      padding: 14px;
      background: #fff;
      cursor: pointer;

      &[aria-selected="true"] {
        color: #fff;
        background: #fff;
      }
    }

    .swiper-slide img {
      width: 100%
    }
  }
}
</style>