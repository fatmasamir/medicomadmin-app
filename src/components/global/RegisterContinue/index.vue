<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import NicePassword from "@/components/global/CusomInputs/NicePassword/NicePassword.vue";
import { useRouter, useRoute } from "vue-router";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
// router
const router = useRouter();
// router
const route = useRoute();

// auth store
const authStore = useAuthStore();

// input
let is_lender = ref(true);

// input
let ErrorMessage = ref(false);

// i18n
const { t } = useI18n();

// handel submit
const handelSubmit = async () => {
  console.log("is_lender", JSON.stringify(authStore.registertion));
  if (authStore.registertion.phone) {
    try {
      authStore.registertion.is_lender = is_lender.value ? 1 : 0;
      await authStore
        .register(JSON.stringify(authStore.registertion))
        .then(() => {
          router.push("/otp-registerion");
        });
    } catch (err) {
      console.log("error");
    }
  } else if (authStore.registerSocialMedia.access_token) {
    try {
      authStore.registerSocialMedia.is_lender = is_lender.value ? 1 : 0;
      if (route.params.nameRegister == "Google") {
        await authStore
          .registerGoogle(JSON.stringify(authStore.registerSocialMedia))
          .then(() => {
            if (authStore.is_auth) {
              setTimeout(() => {
                router.push("/");
              }, 1000);
              authStore.is_waiting = false;
            }
          });
      } else if (route.params.nameRegister == "Facebook") {
        await authStore
          .registerFacebook(JSON.stringify(authStore.registerSocialMedia))
          .then(() => {
            if (authStore.is_auth) {
              setTimeout(() => {
                router.push("/");
              }, 1000);
              authStore.is_waiting = false;
            }
          });
      }
    } catch (err) {
      error.value = err as number;
    }
  }
};

onMounted(() => {
  AOS.init();
  if (!authStore.registertion.phone) {
    if (!authStore.registerSocialMedia.access_token) {
      setTimeout(() => {
        router.push("/register");
      }, 2000);
      ErrorMessage.value = true;
    }
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
            <h3>{{ t("Register") }}</h3>
            <p>{{ t("Register_msg") }}</p>
          </div>
          <div class="form mt-4">
            <div class="alert alert-danger" role="alert" v-if="ErrorMessage">
              You Must Have Otp Number
            </div>
            <div
              class="row mt-3 mx-0 px-0"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div class="col-md-6 p-0">
                <div class="content_Borrower">
                  <div
                    class="image_chooes"
                    :class="is_lender ? 'active' : ''"
                    @click="is_lender = true"
                  >
                    <img src="@/assets/images/global/icons/global/rental.svg" />
                  </div>
                  <p class="text-center">{{ t("Borrower") }}</p>
                </div>
              </div>
              <div class="col-md-6 p-0">
                <div class="content_Car_rental">
                  <div
                    class="image_chooes"
                    :class="!is_lender ? 'active' : ''"
                    @click="is_lender = false"
                  >
                    <img
                      src="@/assets/images/global/icons/global/car-rental.svg"
                    />
                  </div>
                  <p class="text-center">{{ t("Car_rental") }}</p>
                </div>
              </div>
            </div>
            <div class="col-12 mt-2 mx-1">
              <SimpleButton type="send" class="register_lab">
                <button
                  type="submit"
                  @click="handelSubmit"
                  v-if="!authStore.is_loading"
                >
                  {{ t("Signup") }}
                </button>
                <button type="submit" disabled v-else>
                  {{ t("wait") }}
                </button>
              </SimpleButton>
            </div>
            <div class="col-12 register mt-3">
              <p>{{ t("Have_an_account") }}</p>
              <router-link to="/login" class="new_lab px-2">
                {{ t("Login") }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- main box -->
  </section>
</template>
<style lang="scss" scoped>
@import "../Login/AuthSyling.scss";
.auth-form {
  /* main-box */
  .main-box {
    .content_Car_rental,
    .content_Borrower {
      margin: 0px;
      padding: 0px;
      &:first-child {
        padding-left: 5px;
      }
      &:last-child {
        padding-right: 5px;
      }
    }
    .image_chooes {
      background: #c4c4c43d;
      width: 100%;
      height: auto;
      border-radius: 8px;
      margin-bottom: 10px;
      cursor: pointer;
      padding: 20px;
      img {
        width: 50px;
        height: 50px;
        margin: auto;
        display: block;
      }
    }
    .active {
      background: #d4effe;
    }
    .simple-button.send button {
      width: 98%;
    }
  }
}
</style>
