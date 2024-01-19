<template>
  <div class="app">
    <header>
      <div class="header_container">
        <div class="main_logo">
          <img src="../src/assets/city_logo.svg" alt="맨시티로고">
        </div>

        <div class="login_toggle">
          <button class="login_btn">LOGIN</button>
          <button @click="onToggle" class="toggle_btn"><i class="fa-solid fa-bars"></i></button>
        </div>
        <div v-show="toggle" class="toggle_menu">
          <div class="toggle_menu_content">
            <ul>
              <li><a href="#none">NEWS</a></li>
              <li><a href="#none">VIDEO</a></li>
              <li><a href="#none">FIXTURES</a></li>
              <li><a href="#none">TICKETS</a></li>
              <li><a href="#none">SHOP</a></li>
              <li><a href="#none">PLAYERS</a></li>
              <li><a href="#none">CLUB</a></li>
              <li><a href="#none">HELP</a></li>
              <li><a href="#none">MORE</a></li>
            </ul>
          </div>
        </div>
        <div v-show="!toggle" class="toggle_menu"></div>


      </div>
    </header>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const toggle = ref(false);
    const main_title = ref("Manchester CITY")

    // 토글메뉴
    const onToggle = () => {
      toggle.value = !toggle.value;
    }

    return {
      toggle,
      onToggle,
      main_title
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 10px;
  background: #98C5E9;
}

.login_toggle {
  display: flex;
}

.login_btn {
  font-size: 22px;
  font-weight: bold;
}

.header_container button {
  border: none;
  padding: 8px;
  background: #98C5E9;
}

.header_container button i {
  font-size: 30px;

}

h1 {
  color: #fff;
  font-size: 16px;
}

.main_logo {
  display: flex;
}

.main_logo img {
  width: 60px;
}

.toggle_menu_content {
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 20px;
  line-height: 45px;
  background: #001838;
}

.toggle_menu_content ul li:hover {
  background: #98C5E9;
}

.toggle_menu_content ul li a {
  font-size: 30px;
  color: #fff;
  text-align: center;
}
</style>
