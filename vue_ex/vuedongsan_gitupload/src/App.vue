<template>
  <div class="menu">
    <!-- 모달창 -->
    <div class="black-bg" v-if="modalOpen == true">
      <div class="white-bg">
        <h4>상세페이지임</h4>
        <p>상세페이지 내용임</p>
      </div>
      <button @click="modalOpen = false">닫기</button>
    </div>


    <!-- v-for문 쓰는방법 -->
    <!-- <a v-for="nav_menu in 4" :key="nav_menu">menu</a> -->

    <!-- 반복문에 숫자가 아닌 데이터를 집어넣을수도있음 -->
    <a v-for="nav_menu in menus" :key="nav_menu">{{ nav_menu }}</a>
  </div>
  <div class="main_container">
    <h1>부동산</h1>
    <div class="first_content" @click="modalOpen = true">
      <img src="./assets/room0.jpg" alt="" class="room">
      <!-- {{ 데이터값 }} 으로 저장된 데이터 출력 -->
      <!-- 데이터를 가져다쓰고싶으면 :style처럼 : 을 붙여야함 -->
      <h4>{{ products[0] }}</h4>
      <p>{{ price1 }} 만원</p>
      <!-- 버튼 누를때마다 신고수 올라감 -->
      <button @click="btnCount[0]++">허위매물 신고버튼</button> <span>신고수 : {{ btnCount[0] }}</span>
    </div>
    <div class="second_content">
      <img src="./assets/room1.jpg" alt="" class="room">
      <h4>{{ products[1] }}</h4>
      <p>{{ price2 }} 만원</p>
      <button @click="btnCount[1]++">허위매물 신고버튼</button> <span>신고수 : {{ btnCount[1] }}</span>
    </div>
    <div class="third_content">
      <img src="./assets/room2.jpg" alt="" class="room">
      <h4> {{ products[2] }}</h4>
      <p>{{ price3 }} 만원</p>
      <button @click="btnCount[2]++">허위매물 신고버튼</button> <span>신고수 : {{ btnCount[2] }}</span>
    </div>

    <!-- 원룸정보 반복문 -->
    <!-- <div v-for="(room, i) in products" :key="i">
      <h4>{{ room }}</h4>
      <p>50만원</p>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  // 데이터 보관함
  data() {
    return {
      menus: ['home', 'about', 'customer', 'shop'],
      products: ['역삼동', '천호동원룸', '마로구원룸'],
      price1: 180,
      price2: 220,
      price3: 70,
      btnCount: [0, 0, 0],
      modalOpen: false
    }
  },
  methods: {
    increase(){
      this.btnCount[0] += 1;
    },
  },
  components: {
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #000;
}

ul,
li {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 10px;
}

.menu a {
  color: #fff;
  padding: 10px;
}

.main_container {
  padding: 20px;
}

.main_container h1 {
  margin-bottom: 30px;
}

.main_container div {
  margin-bottom: 25px;
}

.room {
  width: 80%;
  margin: auto;
}

.first_content, .second_content, .third_content {
  background: skyblue;
}


/* 동적인 ui만드는 법 
1. ui의 현재 상태를 데이터로 저장해둠
2. 데이터에 따라 ui가 어떻게 보일지 작성*/
/* 모달창 */
body {
  margin: 0
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
