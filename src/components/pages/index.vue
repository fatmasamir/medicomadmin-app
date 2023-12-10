<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import AOS from "aos";

// i18n
const { t } = useI18n();

// formRef
const formRef = ref(null);

// meta
const { meta } = useForm();

// formLogin
const { errors, handleSubmit, defineInputBinds } = useForm({
  validationSchema: Yup.object({
    name: Yup.string().required(),
    phone: Yup.string().min(6).required(),
    message: Yup.string().min(6).required(),
  }),
});

//message ,name,phone
const name = defineInputBinds("name");
const phone = defineInputBinds("phone");
const message = defineInputBinds("message");
const image = ref();
const imageUrl = ref();
const imageName = ref();
const error = ref(false);

// fileSelected
let fileSelected = (event) => {
  const file = event.target.files.item(0);
  image.value = file;
  const reader = new FileReader();
  error.value = false;
  reader.addEventListener("load", imageLoaded);
  reader.readAsDataURL(file);
};
let imageLoaded = (event) => {
  imageUrl.value = event.target.result;
  imageName.value = image.value.name;
};
// handel submit
let onSubmit = handleSubmit((values: any) => {
  error.value = false;
  if (image.value) {
    let formdata = new FormData();
    let data = {
      name: values.name,
      phone: values.phone,
      message: values.message,
      image: image.value,
    };
    for (let key in data) {
      formdata.append(key, data[key]);
    }
    console.log("formdata =", formdata);
  } else {
    error.value = true;
  }
});

onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="header-app">
    <div class="row"><div class="col-lg-12">jhjhkjkjk</div></div>
    <form @submit.prevent="onSubmit">
      <div class="row mt-4">
        <div class="col-md-6">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <input
              type="text"
              id="name"
              name="name"
              v-bind="name"
              placeholder="Name"
              :class="{ 'is-invalid': errors.name }"
            />

            <div class="invalid-feedback">{{ errors.name }}</div>
          </SimpleInput>
        </div>
        <div class="col-md-6">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <input
              type="tel"
              id="phone"
              name="phone"
              v-bind="phone"
              placeholder="phone"
              :class="{ 'is-invalid': errors.phone }"
            />

            <div class="invalid-feedback">{{ errors.phone }}</div>
          </SimpleInput>
        </div>
        <div class="col-10 upload_content">
          <p v-if="imageName">{{ imageName }}</p>
          <p v-else>Upload your problem images</p>
          <div class="invalid-feedback" v-if="error">
            Upload your problem images is a required field
          </div>
        </div>
        <div class="col-2 upload_icon">
          <img src="@/assets/images/export.svg" />
          <input
            type="file"
            accept="image/*"
            @change="fileSelected"
            class="imgfileType"
          />
        </div>
        <div class="col-md-12 mt-3">
          <SimpleInput>
            <!-- <label>Email <span class="text-red">*</span> </label> -->
            <textarea
              type="message"
              id="message"
              name="message"
              v-bind="message"
              placeholder="message"
              :class="{ 'is-invalid': errors.message }"
            ></textarea>

            <div class="invalid-feedback">{{ errors.message }}</div>
          </SimpleInput>
        </div>
        <div class="col-12 mt-3">
          <SimpleButton type="send" class="register_lab">
            <button type="submit">
              {{ t("Send") }}
            </button>
            <!-- <button type="submit" disabled v-else>
                {{ t("wait") }}
              </button> -->
          </SimpleButton>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped lang="scss">
.card {
  overflow-y: hidden;
  width: 50%;
  padding: 15px;
  margin: 7% auto;
  h6 {
    font-weight: 600;
  }
  form {
    .simple-input {
      input,
      textarea {
        background: rgba(246, 246, 246, 1);
        border: 0px;
        text-align: left;
        color: rgba(154, 154, 154, 1);
        border-radius: 8px;
        &:focus {
          background: rgba(246, 246, 246, 0.673) !important;
          border: 1px solid rgba(154, 154, 154, 0.344);
        }
      }
      input {
        height: 50px;
      }
    }
    .simple-button.send button {
      background-color: rgba(0, 16, 99, 1);
    }
    .upload_content p,
    .upload_icon {
      background: rgba(246, 246, 246, 1);
      border: 0px;
      text-align: left;
      color: rgba(154, 154, 154, 1);
      border-radius: 8px;

      padding: 15px;
      margin: 10px 0px;
    }
    .upload_content {
      height: auto;
      .invalid-feedback {
        display: block;
      }
    }
    .upload_icon {
      height: 53px;
      text-align: center;
      padding-top: 10px;
      cursor: pointer !important;
      position: relative;
      .imgfileType {
        width: 100%;
        height: 100%;
        cursor: pointer !important;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .card {
    width: 95%;
    padding: 10px 0px;
    .row {
      margin: 0px;
      padding: 0px;
      > div {
        margin: 0px;
      }
    }
  }
  .card form .upload_content p {
    margin: 0px;
  }
}
</style>
