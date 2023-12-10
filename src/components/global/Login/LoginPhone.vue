<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useForm } from "vee-validate";
import { useAuthStore } from "@/stores/auth";
import * as Yup from "yup";
import { defineEmits } from "vue";
import AOS from "aos";

// i18n
const { t } = useI18n();

// auth store
const authStore = useAuthStore();

// formRef
const formRef = ref(null);

// emit
let emit = defineEmits(["OnSubmitFun"]);

// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    login: Yup.string().required(t("requiredFiled")),
    password: Yup.string().min(6).required(t("requiredFiled")),
  }),
});

//login ,password
const login = defineInputBinds("login");
const password = defineInputBinds("password");

// input password type
const passwordFieldType = ref<string>("password");

// show/hide new password
const switchVisibility = () => {
  passwordFieldType.value =
    passwordFieldType.value === "password" ? "text" : "password";
};

// handel submit
let onSubmit = handleSubmit((values: any) => {
  emit("OnSubmitFun", values);
});

onMounted(() => {
  AOS.init();
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="form mt-4">
      <div
        class="col-md-12 mt-3"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <SimpleInput>
          <vue3-reactive-tel-input
            :rootStyle="{ backgroundColor: '#f9f9f9' }"
            :inputStyle="{ backgroundColor: '#f9f9f9' }"
            :listStyle="{ backgroundColor: '#f9f9f9' }"
            :dropdownStyle="{ backgroundColor: '#f9f9f9' }"
            :class="{ 'is-invalid': errors.login }"
            v-bind="login"
            placeholder=""
          />
          <div class="invalid-feedback">{{ errors.login }}</div>
        </SimpleInput>
      </div>
      <div
        class="col-md-12 mt-2 passwordField"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="700"
      >
        <SimpleInput>
          <!-- <label>Email <span class="text-red">*</span> </label> -->
          <input
            :type="passwordFieldType"
            id="password"
            name="password"
            :placeholder="t('password')"
            required
            v-bind="password"
            :class="{ 'is-invalid': errors.password }"
          />
          <img
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
        class="col-md-12 mt-1 mb-4 forget_remember"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="900"
      >
        <div class="d-flex align-items-center">
          <input type="checkbox" value="lsRememberMe" id="rememberMe" />
          <label for="rememberMe" class="mx-2"> {{ t("remember_me") }}</label>
        </div>
        <router-link to="/forget-password">{{ t("forgetPass") }}</router-link>
      </div>
      <div
        class="col-12 mt-3"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1100"
      >
        <SimpleButton type="send" class="register_lab">
          <button type="submit" v-if="!authStore.is_loading">
            {{ t("Login") }}
          </button>
          <button type="submit" disabled v-else>
            {{ t("wait") }}
          </button>
        </SimpleButton>
      </div>
    </div>
  </form>
</template>
<style lang="scss" scoped>
@import "./AuthSyling.scss";
</style>

<style lang="scss">
@import "./AuthSyling.scss";
.vue3-reactive-tel-input {
  div:last-child {
    width: 100%;
  }
}
</style>
