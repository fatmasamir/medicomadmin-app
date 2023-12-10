<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { defineProps } from "vue";

// props
let props = defineProps(["Links"]);

// //Login
// const Login = localStorage.getItem("access_token");

// emit;
let emit = defineEmits(["changeshowMobile", "Logout"]);
// i18n
const { t } = useI18n();

const showMobile = () => {
  emit("changeshowMobile");
};
//Logout
// const LogoutFun = () => {
//   emit("Logout");
// };
</script>

<template>
  <div class="mobile pb-5">
    <div class="mobile_sec">
      <div class="header">
        <img src="../../../assets/images/logo.png" />
        <div class="close">
          <button class="navbar-toggler" type="button" @click="showMobile()">
            X
          </button>
        </div>
      </div>
      <div>
        <div class="navbar-nav">
          <ul class="list_links">
            <li>
              <div class="Contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                  />
                </svg>
                <p>Contact: +1 315 369 5943</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-btns">
        <div>
          <!-- Doctor / login -->
          <SimpleButton type="send">
            <router-link to="/" class="btn btn-main"
              ><img src="../../../assets/images/icon.png" />
              Doctor login
            </router-link></SimpleButton
          >
        </div>
        <div class="mx-4">
          <!-- Medical / Login -->
          <SimpleButton type="send">
            <router-link to="/" class="btn btn-main"
              ><img src="../../../assets/images/icon.png" />
              Medical Login
            </router-link></SimpleButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "./NavbarStyling.scss";
</style>
