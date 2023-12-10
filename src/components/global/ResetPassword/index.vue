<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import AOS from "aos";

// router
const router = useRouter();

// loading
const loading = ref(false);

// auth store
const authStore = useAuthStore();
// formRef
const formRef = ref(null);

// meta
const { meta } = useForm();
// formLogin
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    password: Yup.string().min(6).required(),
    password_confirmation: Yup.string()
      .required()
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  }),
});

//login ,password
const password = defineInputBinds("password");
const password_confirmation = defineInputBinds("password_confirmation");

// input password type
const passwordFieldType = ref<string>("password");
// input password type
const passwordFieldTypeComfirm = ref<string>("password");

// i18n
const { t } = useI18n();

// error
const error = ref<number>();

let date = new Date();

// show/hide new password
const switchVisibility = () => {
  passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password";
};

// show/hide new password
const switchVisibilityComfirm = () => {
  passwordFieldTypeComfirm.value =
    passwordFieldTypeComfirm.value === "password" ? "text" : "password";
};

// update password
// const updatePassword = (value: string) => {
//   password.value = value;
// };

// handel submit
let onSubmit = handleSubmit((values) => {
  loading.value = true;
  if (values) {
    console.log("values", JSON.stringify(values));
    authStore.resetPassword.password = values.password;
    authStore.resetPassword.password_confirmation =
      values.password_confirmation;
    console.log("authStore.resetPassword.login", authStore.resetPassword);
    try {
      authStore
        .PasswordReset(JSON.stringify(authStore.resetPassword))
        .then(() => {
          if (authStore.is_auth) {
            setTimeout(() => {
              router.push("/login");
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
  if (!authStore.resetPassword.otp) {
    setTimeout(() => {
      router.push("/otp-authentication");
    }, 2000);
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
          <div class="auth-header text-start">
            <h3>{{ t("ResetPassword") }}</h3>
            <p>{{ t("OTPmessage") }}</p>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="form mt-4">
              <div
                class="alert alert-danger"
                role="alert"
                v-if="!authStore.resetPassword.otp"
              >
                You Must Have Otp Number
              </div>
              <div
                class="col-md-12 mt-3 passwordField"
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <SimpleInput>
                  <!-- <label>Email <span class="text-red">*</span> </label> -->
                  <input
                    :type="passwordFieldType"
                    id="NewpasswComfirmPassord"
                    name="Newpassword"
                    :placeholder="t('Newpassword')"
                    required
                    v-bind="password"
                    :class="{ 'is-invalid': errors.password }"
                  /><img
                    src="@/assets/images/global/icons/global/eye-svgrepo.svg"
                    @click="switchVisibility"
                    class="pass_icon"
                    v-if="passwordFieldType == 'password'"
                  /><img
                    src="@/assets/images/global/icons/global/eye-slash.svg"
                    @click="switchVisibility"
                    class="pass_icon"
                    v-else
                  />
                  <div class="invalid-feedback">{{ errors.password }}</div>
                </SimpleInput>
              </div>
              <div
                class="col-md-12 mt-3 passwordField"
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="600"
              >
                <SimpleInput>
                  <!-- <label>Email <span class="text-red">*</span> </label> -->
                  <input
                    :type="passwordFieldTypeComfirm"
                    id="ComfirmPass"
                    name="ComfirmPass"
                    :placeholder="t('Rewrite_new_password')"
                    required
                    v-bind="password_confirmation"
                    :class="{ 'is-invalid': errors.password_confirmation }"
                  /><img
                    src="@/assets/images/global/icons/global/eye-svgrepo.svg"
                    @click="switchVisibilityComfirm"
                    class="pass_icon"
                    v-if="passwordFieldTypeComfirm == 'password'"
                  /><img
                    src="@/assets/images/global/icons/global/eye-slash.svg"
                    @click="switchVisibilityComfirm"
                    class="pass_icon"
                    v-else
                  />
                  <div class="invalid-feedback">
                    {{ errors.password_confirmation }}
                  </div>
                </SimpleInput>
              </div>
              <div
                class="col-12 mt-3"
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1100"
              >
                <SimpleButton type="send" class="register_lab">
                  <button type="submit" v-if="!authStore.is_loading">
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

/* auth-form */
// .auth-form {
//   /* main-box */
//   .main-box {
//     height: 100vh;
//     max-width: 100%;
//     max-height: 100vh;
//     background: var(--white-color);
//     padding: 150px 30px 50px 70px;
//     border-radius: var(--main-border-radius);
//     &::-webkit-scrollbar {
//       width: 5px;
//     }
//     &::-webkit-scrollbar-track {
//       box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
//     }

//     &::-webkit-scrollbar-thumb {
//       background-color: transparent;
//       outline: 1px solid transparent;
//     }
//     .forget-header {
//       h3,
//       p {
//         margin: 0;
//       }
//       h3 {
//         font-weight: 700;
//         margin: {
//           bottom: 10px;
//         }
//       }
//       p {
//         color: var(--second-text-color);
//         padding: 0px;
//       }
//     }

//     /* simple-input */
//     .simple-input {
//       label {
//         margin-bottom: 0;
//       }
//       text-align: initial;
//       input,
//       select {
//         height: 55px !important;
//         text-align: left;
//         background: #f9f9f9;
//       }
//     }
//     /* simple-button.send button */
//     .simple-button.send button {
//       width: 100%;
//       background: var(--orange-text-color);
//       height: 55px !important;
//     }
//     /* passwordField */
//     .passwordField {
//       position: relative;
//       /* pass_icon */
//       .pass_icon {
//         position: absolute;
//         right: 10px;
//         top: 15px;
//         cursor: pointer;
//         width: 24px;
//         height: 24px;
//       }
//     }
//     .domin_group {
//       .input-group-text {
//         background-color: rgba(
//           $color: var(--orange-text-color),
//           $alpha: 0.1
//         ) !important;
//         text-transform: lowercase;
//         border: 1px solid #dcddeb;
//         padding: 0 5px;
//         // border-top-left-radius: 8px !important;
//         // border-bottom-left-radius: 8px !important;
//         border-radius: 8px !important;
//         margin: 0 5px;
//         // order: 3;
//       }
//     }
//     /* ContinueWith */
//     .ContinueWith {
//       display: flex;
//       justify-content: start;
//       align-items: center;
//       margin: 10px 0px 30px;
//       margin-right: 50px;
//       a.card {
//         display: flex;
//         padding: 15px 14px;
//         justify-content: space-around;
//         background: #e5ecf3 !important;
//         cursor: pointer;
//         margin: 0px 10px;
//         width: max-content;
//         flex-direction: row;
//         align-items: center;
//         cursor: pointer;
//         margin: 0px 10px;
//         color: #2f3b48;
//         p {
//           margin: 0px 5px;
//         }
//         img {
//           width: 29px;
//           height: 29px;
//         }
//         &:first-child {
//           background: (229, 236, 243, 1);
//         }
//         &:hover {
//           background: #d4effe;
//         }
//       }
//     }
//     /* Or */
//     .Or {
//       p {
//         color: var(--orange-text-color);
//       }
//     }
//     /* register */
//     .register {
//       display: flex;
//       justify-content: center;
//       align-items: top;
//       p {
//         margin: 0px;
//       }
//       a {
//         color: var(--orange-text-color);
//       }
//     }
//     /* forget_remember */
//     .forget_remember {
//       display: flex;
//       justify-content: space-between;
//       align-content: center;
//       a {
//         color: #f4a71d !important;
//       }
//     }
//   }
//   /* logo_box */
//   .logo_box {
//     background: white;
//     margin: 0px;
//     padding: 0px;
//     position: relative;

//     /* logo */
//     .logo {
//       position: absolute;
//       top: 50px;
//       left: 50px;
//       right: auto;
//       color: white;
//       z-index: 2;
//     }

//     /* logo_box_img */
//     .logo_box_img {
//       width: 95%;
//       margin-right: 5%;
//       background: url(../../../assets/images/global/icons/global/Carbackground.svg)
//         no-repeat right center;
//       background-size: cover;
//       height: 100%;
//       img {
//         width: 100%;
//         height: 100%;
//         display: none;
//       }
//     }
//   }
// }

/*media query */
</style>
