<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import SimpleInput from "@/components/global/CusomInputs/SimpleInput/SimpleInput.vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { useForm } from "vee-validate";
import * as Yup from "yup";
import AOS from "aos";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faSmile);
library.add(faCompass);
library.add(faUserCheck);

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
    <section class="doctor-search-section">
      <div class="container">
        <div class="row align-items-center m-0 p-0">
          <div class="col-lg-6">
            <div class="doctor-search">
              <div class="banner-header">
                <h2>
                  Search Doctor, <br />
                  Make an Appointment
                </h2>
              </div>
              <div class="doctor-form">
                <form action="#" class="doctor-search-form">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Location</label>
                        <div class="form-custom">
                          <input
                            type="text"
                            class="form-control"
                            value="true"
                            spellcheck="false"
                            data-ms-editor="true"
                          />
                          <font-awesome-icon icon="compass" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Gender</label>
                        <div class="form-custom">
                          <input
                            type="text"
                            class="form-control"
                            value="true"
                            spellcheck="false"
                            data-ms-editor="true"
                          /><font-awesome-icon icon="smile" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Department</label>
                        <div class="form-custom">
                          <input
                            type="text"
                            class="form-control"
                            value="true"
                            spellcheck="false"
                            data-ms-editor="true"
                          /><font-awesome-icon icon="user-check" />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <SimpleButton type="send" class="register_lab">
                        <button type="submit">
                          MAKE APPOINTMENT
                        </button></SimpleButton
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <img
              src="@/assets/images/header-doctor.png"
              class="img-fluid dr-img"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
.header-app {
  background: #e1f3ff;
  .doctor-search-section {
    padding-top: 170px;
  }
  h2 {
    color: #186db5;
    font-size: 32px;
    font-weight: 600;
    line-height: 54px;
  }
  form {
    label {
      display: inline-block;
      margin-bottom: 0.5rem;
    }
    .form-custom {
      position: relative;
      input {
        border: 1px solid rgba(16, 222, 253, 0.1);
        border-radius: 5px;
        box-shadow: 0 4px 4px hsla(0, 0%, 93%, 0.25);
        min-height: 60px;
        text-align: left;
        &:focus {
          border-color: #bbb;
          box-shadow: none;
          outline: 0 none;
        }
      }
      svg {
        color: #dd2d4e;
        position: absolute;
        right: 15px;
        top: 20px;
      }
    }
    button {
      background: #1c5b90;
      border-radius: 130px;
      color: #fff;
      margin-top: 20px;
      font-size: 14px;
      font-weight: 600;
      padding: 20px 30px;
      width: 100%;
      height: 60px;
      &:hover {
        background: #10defd;
        color: #fff;
      }
    }
  }
  .img-fluid,
  .img-thumbnail {
    height: auto;
    max-width: 100%;
  }
}
@media only screen and (max-width: 991.98px) {
  .dr-img {
    display: none;
  }
  .doctor-search {
    padding: 30px 0;
  }
}
@media only screen and (max-width: 767.98px) {
  .banner-header h2 {
    font-size: 26px;
    line-height: 40px;
  }
}
</style>
