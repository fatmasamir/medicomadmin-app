<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import NicePassword from "@/components/global/CusomInputs/NicePassword/NicePassword.vue";
import { useRouter } from "vue-router";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import AOS from "aos";

// i18n
const { t } = useI18n();

// router
const router = useRouter();

// loading
const loading = ref(false);

// auth store
const authStore = useAuthStore();

// error
const error = ref<number>();

// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    login: Yup.string().required(),
  }),
});

// login defineInputBinds
const login = defineInputBinds("login");

// handel submit
let onSubmit = handleSubmit((values) => {
  loading.value = true;
  console.log("values", JSON.stringify(values));
  if (values) {
    try {
      authStore.forgetPassword(JSON.stringify(values)).then(() => {
        authStore.resetPassword.login = values.login;
        console.log(
          "authStore.resetPassword.login",
          authStore.resetPassword.login
        );
        if (authStore.is_auth) {
          setTimeout(() => {
            router.push("/otp-authentication");
          }, 1000);
          authStore.is_waiting = false;
        }
      });
    } catch (err) {
      error.value = err as number;
    }
  }
});
onMounted(() => {
  AOS.init();
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
            <h3>{{ t("Forgetpassword") }}</h3>
            <p>{{ t("forget_msg") }}</p>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="form mt-4">
              <div
                class="col-md-12 mt-3"
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <SimpleInput>
                  <!-- <label>Email <span class="text-red">*</span> </label> -->

                  <vue3-reactive-tel-input
                    :rootStyle="{ backgroundColor: '#f9f9f9' }"
                    :inputStyle="{ backgroundColor: '#f9f9f9' }"
                    :listStyle="{ backgroundColor: '#f9f9f9' }"
                    :dropdownStyle="{ backgroundColor: '#f9f9f9' }"
                    :class="{ 'is-invalid': errors.login }"
                    v-bind="login"
                  />
                </SimpleInput>
              </div>
              <div
                class="col-12 mt-3"
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1100"
              >
                <SimpleButton type="send" class="register_lab">
                  <button
                    type="submit"
                    @click="handelSubmit"
                    v-if="!authStore.is_loading"
                  >
                    {{ t("send") }}
                  </button>
                  <button type="submit" disabled v-else>
                    {{ t("wait") }} ...
                  </button>
                </SimpleButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- main box -->
  </section>
</template>
<style lang="scss" scoped>
@import "../Login/AuthSyling.scss";
.auth-form .main-box .simple-button.send button {
  margin-top: 0px;
}
</style>
