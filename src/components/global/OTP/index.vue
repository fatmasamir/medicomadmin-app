<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
import VOtpInput from "vue3-otp-input";

// router
const router = useRouter();

// auth store
const authStore = useAuthStore();

// i18n
const { t } = useI18n();

// otpInput
const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
const bindModal = ref("");

// handleOnComplete
const handleOnComplete = (value: string) => {
  console.log("OTP completed: ", value);
};

// handel submit
const handelSubmit = async () => {
  authStore.resetPassword.otp = bindModal.value;
  console.log("authStore.resetPassword.login", authStore.resetPassword);
  router.push("/reset-password");
};
onMounted(() => {
  AOS.init();
  if (!authStore.resetPassword.login) {
    setTimeout(() => {
      router.push("/forget-password");
    }, 2000);
  }
});
</script>

<template>
  <section class="auth-form otp-form">
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
            <h3>{{ t("OTPTitle") }}</h3>
            <p>{{ t("forget_msg") }}</p>
          </div>
          <div class="form mt-3">
            <div
              class="alert alert-danger mb-4"
              role="alert"
              v-if="!authStore.resetPassword.login"
            >
              You Must Have phone Number
            </div>
            <div class="style_otp">
              <v-otp-input
                ref="otpInput"
                v-model:value="bindModal"
                input-classes="otp-input"
                separator=" "
                :num-inputs="6"
                :should-auto-focus="true"
                input-type="letter-numeric"
                :conditionalClass="[
                  'one',
                  'two',
                  'three',
                  'four',
                  'five',
                  'six',
                ]"
                :placeholder="['-', '-', '-', '-', '-', '-']"
                @on-change="handleOnChange"
                @on-complete="handleOnComplete"
              />
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
            <div
              class="col-12 register mt-3"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1300"
            >
              <p>
                {{ t("SendAgain") }} <span class="color-main">(30:00)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- main box -->
  </section>
</template>
<style lang="scss">
@import "../Login/AuthSyling.scss";
@import "./stylingOtp.scss";
</style>
