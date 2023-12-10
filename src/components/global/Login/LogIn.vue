<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import LoginEmail from "./LoginEmail.vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import LoginPhone from "./LoginPhone.vue";
import ContinueSocial from "../ContinueSocial/index.vue";
import AOS from "aos";
// i18n
const { t } = useI18n();

// router
const router = useRouter();

// loading
const loading = ref(false);

// auth store
const authStore = useAuthStore();

// LoginEmail
const ShowLoginEmail = ref(true);

// handel submit
let OnSubmitFun = (values: any) => {
  console.log("values ===", values);
  loading.value = true;
  console.log("values", JSON.stringify(values));
  if (values) {
    console.log("values", JSON.stringify(values));
    try {
      authStore.login(JSON.stringify(values)).then(() => {
        if (authStore.is_auth) {
          setTimeout(() => {
            router.push("/");
          }, 1000);
          authStore.is_waiting = false;
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
};

//onMounted
onMounted(() => {
  AOS.init();
  if (localStorage.getItem("access_token")) {
    router.push("/");
  }
});
</script>

<template>
  <section class="auth-form">
    <div class="row">
      <div class="col-lg-7 col-12 m-0 p-0 logo_box">
        <div
          class="logo"
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-out"
        >
          <router-link to="/">
            <img src="../../../assets/images/global/icons/global/logo.svg"
          /></router-link>
        </div>
        <div class="logo_box_img">
          <img src="@/assets/images/global/icons/global/Carbackground.svg" />
        </div>
      </div>
      <div
        class="col-lg-5 col-12 main-box"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-out"
      >
        <div class="middle">
          <div class="auth_header text-start">
            <h3>{{ t("Login") }}</h3>
            <p>{{ t("login_msg") }}</p>
            <ContinueSocial type="Login" />
            <div class="Or">
              <p>{{ t("OR") }}</p>
            </div>
          </div>
          <ul class="tab row">
            <li @click="ShowLoginEmail = true" class="col-sm-6">
              <p :class="ShowLoginEmail ? 'active' : ''">{{ t("Email") }}</p>
            </li>
            <li class="col-sm-6" @click="ShowLoginEmail = false">
              <p :class="!ShowLoginEmail ? 'active' : ''">
                {{ t("Phone_number") }}
              </p>
            </li>
          </ul>
          <LoginEmail v-if="ShowLoginEmail" @OnSubmitFun="OnSubmitFun" />
          <LoginPhone v-if="!ShowLoginEmail" @OnSubmitFun="OnSubmitFun" />
        </div>
        <div class="col-12 register mt-3 text-center">
          <p>{{ t("Dont_have_account") }}</p>
          <router-link to="/register" class="new_lab px-2">
            {{ t("Signup") }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "./AuthSyling.scss";
.tab {
  padding: 0px;
  list-style-type: none;
  width: 82% !important;
  margin: 0px;
  padding: 0px;
  li {
    margin: 10px 0px;
    padding: 0px;
    padding-right: 10px;
    text-align: center;
    p {
      background: #f9f9f9;
      border: 1px solid #f9f9f9;
      color: black;
      padding: 10px;
      width: 100%;
      border-radius: 8px;
      margin: 0px;
    }
    .active {
      background: white;
      color: #f4a71d;
      border: 1px solid #f4a71d;
    }
  }
}

.auth-form {
  /* main-box */
  .main-box {
    height: 100vh;
    margin-bottom: 50px;
  }
  .register {
    width: 80%;
  }
  a {
    cursor: pointer;
  }
}
@media screen and (max-width: 991px) {
  .tab {
    width: 100% !important;
  }
}
</style>
