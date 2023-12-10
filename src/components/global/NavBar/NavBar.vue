<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import type { Link } from "./interface";
import { useI18n } from "vue-i18n";
import { useLang } from "@/stores/lang";
// import router from "@/router";
import Mobile from "./Mobile.vue";
import Website from "./website.vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

// i18n
const { t } = useI18n();

// auth store
const authStore = useAuthStore();

// router
const router = useRouter();
const i18n = useI18n();

// showMobileList
const showMobileList = ref<boolean>(false);
// profileLinks
let Links = ref<Link[]>([
  {
    id: 0,
    path: "/",
    title: "Home",
  },
  {
    id: 1,
    path: "/#Why_INSTAB",
    title: "Why_INSTAB",
  },
  {
    id: 2,
    path: "/#aboutUs",
    title: "about_us",
  },
  {
    id: 3,
    path: "/#Card_Order_Steps",
    title: "Card_Order_Steps",
  },
  {
    id: 4,
    path: "/#Our_Cards",
    title: "Our_Cards",
  },
  {
    id: 5,
    path: "/#Contact_us",
    title: "Contact_us",
  },
]);
// handel changeshowMobile
let changeshowMobile = () => {
  console.log("changeshowMobile");
  showMobileList.value = false;
};

//Logout
const Logout = () => {
  authStore.logOut();
  router.push("/login");
};
</script>

<template>
  <!-- Nav -->
  <nav class="navbar navbar-expand-lg py-2">
    <router-link to="/" class="navbar-brand">
      <img src="../../../assets/images/logo.png" />
    </router-link>

    <Website @Logout="Logout" :Links="Links" />
    <button
      class="navbar-toggler"
      type="button"
      @click="showMobileList = !showMobileList"
    >
      <a href="#0" id="mobile_btn"
        ><span class="bar-icon"><span></span><span></span><span></span></span
      ></a>
    </button>
    <Mobile
      :class="showMobileList ? 'show' : ''"
      :Links="Links"
      @changeshowMobile="changeshowMobile()"
    />
  </nav>
</template>
<style scoped lang="scss">
@import "./NavbarStyling.scss";
.navbar-toggler {
  left: 0;
  margin-right: 0;
  padding: 0 15px;
  position: absolute;
  z-index: 99;
}
.navbar-expand-lg .navbar-toggler {
  border: 0px;
}
.navbar .navbar-brand[data-v-6d5f5f20] {
  margin: auto;
}

.bar-icon span:nth-child(2) {
  width: 16px;
}
.bar-icon span:nth-child(3) {
  margin-bottom: 0;
}
.bar-icon span:nth-child(2) {
  width: 16px;
}
.bar-icon span {
  border-radius: 2px;
  display: block;
  float: left;
  height: 3px;
  margin-bottom: 7px;
  width: 31px;
}
.bar-icon {
  display: inline-block;
  width: 31px;
}
.bar-icon span,
.bar-icon-one span {
  background-color: #0de0fe;
}
</style>
