<script setup>
import { defineComponent, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 6,
    snapAlign: "start",
  },
};
const Clinics = ref([
  {
    id: 0,
    title: "UROLOGY",
    image: new URL(`@/assets/images/UROLOGY.png`, import.meta.url).href,
  },
  {
    id: 1,
    title: "Orthopedic",
    image: new URL(`@/assets/images/Orthopedic.png`, import.meta.url).href,
  },
  {
    id: 2,
    title: "Cardiologist",
    image: new URL(`@/assets/images/Cardiologist.png`, import.meta.url).href,
  },
  {
    id: 3,
    title: "Dentist",
    image: new URL(`@/assets/images/Dentist.png`, import.meta.url).href,
  },
  {
    id: 2,
    title: "Neurology",
    image: new URL(`@/assets/images/Neurology.png`, import.meta.url).href,
  },
  {
    id: 2,
    title: "Cardiologist",
    image: new URL(`@/assets/images/Cardiologist.png`, import.meta.url).href,
  },
  {
    id: 0,
    title: "UROLOGY",
    image: new URL(`@/assets/images/UROLOGY.png`, import.meta.url).href,
  },
  {
    id: 1,
    title: "Orthopedic",
    image: new URL(`@/assets/images/Orthopedic.png`, import.meta.url).href,
  },
  {
    id: 2,
    title: "Cardiologist",
    image: new URL(`@/assets/images/Cardiologist.png`, import.meta.url).href,
  },
  {
    id: 3,
    title: "Dentist",
    image: new URL(`@/assets/images/Dentist.png`, import.meta.url).href,
  },
  {
    id: 2,
    title: "Neurology",
    image: new URL(`@/assets/images/Neurology.png`, import.meta.url).href,
  },
]);
</script>
<template>
  <div class="ClinicSpecialities">
    <div class="shapes">
      <img
        src="../../../../assets/images/shap1.png"
        class="img-fluid shape-1"
      />
      <img
        src="../../../../assets/images/shap2.png"
        class="img-fluid shape-2"
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 overflow-hidden">
          <div class="section-heading" data-aos="fade-up">
            <h2>Clinic &amp; Specialities</h2>
            <p>
              Access to expert physicians and surgeons, advanced technologies
              and top-quality surgery facilities right here.
            </p>
          </div>
        </div>
      </div>
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        :wrap-around="true"
      >
        <Slide v-for="slide in Clinics" :key="slide">
          <div class="clinic-item">
            <div class="clinics-card">
              <div class="clinics-img">
                <img
                  src="../../../../assets/images/imageClient.jfif"
                  class="img-fluid"
                />
              </div>
              <div class="clinics-info">
                <img :src="slide.image" class="img-fluid" /><a href="#"
                  ><span>{{ slide.title }}</span></a
                >
              </div>
            </div>
            <div class="clinics-icon">
              <router-link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M313.9 216H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h301.9v46.1c0 21.4 25.9 32.1 41 17l86.1-86.1c9.4-9.4 9.4-24.6 0-33.9l-86.1-86.1c-15.1-15.1-41-4.4-41 17V216z"
                  />
                </svg>
              </router-link>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>
<style scoped lang="scss">
.ClinicSpecialities {
  padding: 30px 0 0px;
  margin: 35px 0px;
  position: relative;
  .shapes {
    width: 100%;
    .shape-1,
    .shape-2 {
      position: absolute;
      top: 0;
      z-index: -1;
    }
    .shape-1 {
      left: 0;
    }
  }
  .shape-2 {
    right: 0;
  }
  .section-heading {
    h2 {
      color: #1c5b90;
      font-size: 26px;
      font-weight: 700;
    }
    p {
      color: #757578;
      font-size: 14px;
      margin-bottom: 0;
    }
  }
  .clinic-item {
    margin: 35px 15px 15px 0px;
    .clinics-card {
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      .clinics-img {
        position: relative;
      }
      img {
        display: block;
        width: 100%;
      }
    }
    .clinics-img {
      position: relative;
      &:after {
        background: rgba(28, 91, 144, 0.9);
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .clinics-info {
      left: 0;
      margin: 0 auto;
      position: absolute;
      right: 0;
      text-align: center;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      img {
        margin: auto auto 10px;
        width: 60px !important;
      }
      span {
        color: #fff;
        font-size: 18px;
        font-weight: 600;
      }
    }
    .clinics-icon {
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      transition: all 0.3s ease 0s;
      a {
        background: #10defd;
        border-radius: 50%;
        display: block;
        width: 35px;
        height: 35px;
        line-height: 35px;
        margin: auto;
        text-align: center;
        text-align: center;
        svg {
          width: 15px;
          height: 15px;
          fill: #fff;
        }
      }
    }
    &:hover .clinics-card .clinics-img:after {
      background: rgba(45, 226, 253, 0.9);
    }
  }
  .clinic-item:hover .clinics-icon {
    -webkit-transform: translateY(-180%);
    transform: translateY(-180%);
    a {
      background: white;
      svg {
        fill: #000;
      }
    }
  }
}

@media only screen and (max-width: 991.98px) {
  .section-heading h2 {
    font-size: 20px;
  }
}
</style>
<style lang="scss">
@media only screen and (max-width: 991.98px) {
  .ClinicSpecialities .carousel {
    .carousel__prev,
    .carousel__next {
      top: 15px !important;
    }
  }
}
</style>
