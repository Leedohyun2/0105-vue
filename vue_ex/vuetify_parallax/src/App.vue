<template>
  <v-app>
    <v-parallax src="../src/assets/bg3b_6_11zon.png" width="100%"></v-parallax>
    <div class="bee">
      <img src="../src/assets/bee4_1_11zon_2_11zon.png" alt="">
    </div>
    <div class="bee2">
      <img src="../src/assets/bee4_1_11zon_2_11zon.png" alt="">
    </div>
    <div class="bee3">
      <img src="../src/assets/bee4b_5_11zon.png" alt="">
    </div>
    <div class="bee4">
      <img src="../src/assets/bee4_1_11zon_2_11zon.png" alt="">
    </div>
    <div class="bee5">
      <img src="../src/assets/bee4b_5_11zon.png" alt="">
    </div>
    <div class="bee6">
      <img src="../src/assets/bee1b_8_11zon.png" alt="">
    </div>
    <div class="back">
      <img src="../src/assets/set3_1_11zon.png" alt="">
    </div>
    <v-parallax src="../src/assets/bg3b_6_11zon.png" width="100%"></v-parallax>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
.bee {
  position: absolute;
  animation: motion 0.4s
    /* 속도 */
    linear 0s
    /* 처음부터 끝까지 일정 속도로 진행 */
    infinite alternate;
  /* 무한 반복 */
}

.bee2 {
  position: absolute;
  top: 150px;
  left: 180px;
  z-index: 1000;
  animation: motion 0.6s
    /* 속도 */
    linear 0s
    /* 처음부터 끝까지 일정 속도로 진행 */
    infinite alternate;
  /* 무한 반복 */
}

.bee3 {
  position: absolute;
  top: 80px;
  left: 480px;
  z-index: 1000;
  animation: motion 0.4s
    /* 속도 */
    linear 0s
    /* 처음부터 끝까지 일정 속도로 진행 */
    infinite alternate;
  /* 무한 반복 */
}

.bee4 {
  position: absolute;
  top: 380px;
  left: 250px;
  z-index: 1000;
  animation: motion 0.3s
    /* 속도 */
    linear 0s
    /* 처음부터 끝까지 일정 속도로 진행 */
    infinite alternate;
  /* 무한 반복 */
}

.bee5 {
  position: absolute;
  top: 410px;
  left: 550px;
  z-index: 1000;
  animation: motion 0.5s linear 0s infinite alternate;
}

.bee6 {
  position: absolute;
  top: 650px;
  left: 300px;
  z-index: 1000;
  animation: motion 0.8s linear 0s infinite alternate;
}

.bee6 img{
  width: 300px;
}

.back {
  z-index: 1000;
}

.back img {
  position: absolute;
  width: 50%;
  top: 380px;
  right: 180px;
  /* animation: motion 0.5s linear 0s; */
}

@keyframes motion {
  0% {
    /* margin-top: 20px; */
    margin-left: 10px;
  }

  /* 처음 위치 */
  100% {
    /* margin-top: 10px; */
    margin-right: 20px;
  }

  /* 마지막 위치 */

}
</style>