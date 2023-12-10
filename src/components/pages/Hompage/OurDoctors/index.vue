<script setup>
import { defineComponent, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

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
    itemsToShow: 4,
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
  <div class="OurDoctors">
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
          <div class="content">
            <div class="our-doctors-card">
              <div class="doctors-header">
                <a href="#"
                  ><img
                    src="../../../../assets/images/imageClient2.jfif"
                    class="img-fluid"
                /></a>
                <div class="img-overlay"><span>$20 - $50</span></div>
              </div>
              <div class="doctors-body">
                <div class="rating">
                  <font-awesome-icon icon="star" class="filled" />
                  <font-awesome-icon icon="star" class="filled" />
                  <font-awesome-icon icon="star" class="filled" />
                  <font-awesome-icon icon="star" class="filled" />
                  <font-awesome-icon icon="star" class="filled" />
                  <span class="d-inline-block average-ratings">3.5</span>
                </div>
                <a href="/patient/doctor-profile"><h4>Dr. Ruby Perrin</h4></a>
                <p>BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
                <div class="location d-flex">
                  <p><i class="fas fa-map-marker-alt"></i> Georgia, USA</p>
                  <p class="ml-auto">
                    <i class="fas fa-user-md"></i> 450 Consultations
                  </p>
                </div>
                <div class="row row-sm">
                  <div class="col-6">
                    <a
                      class="btn view-btn"
                      tabindex="0"
                      href="/patient/doctor-profile"
                      >View Profile</a
                    >
                  </div>
                  <div class="col-6">
                    <a class="btn book-btn" tabindex="0" href="/patient/booking"
                      >Book Now</a
                    >
                  </div>
                </div>
              </div>
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
.OurDoctors {
  padding: 30px 0 10px;
  margin: 30px 0px;
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
  .content {
    padding: 0px 10px;
    .our-doctors-card {
      margin: 30px 0px;
      background: rgba(232, 246, 255, 0.4);
      border: 1px solid rgba(231, 237, 255, 0.5);
      border-radius: 10px;
      padding: 10px;
      .doctors-header {
        position: relative;
        .img-overlay {
          background: #1b5d92;
          border-radius: 110px;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          padding: 5px 10px;
          position: absolute;
          right: 10px;
          top: 10px;
        }
      }
      .doctors-body {
        background: #fff;
        border-radius: 0 0 10px 10px;
        text-align: left;
        padding: 10px;
        .rating {
          font-size: 12px;
          text-align: left;
          .filled {
            color: #1c5b90;
          }
          .average-ratings {
            background: #1c5b90;
            border-radius: 70px;
            color: #fff;
            margin-left: 10px;
            padding: 1px 15px;
          }
        }
        h4 {
          color: #1c1c1c;
          font-weight: 600;
          margin: 0.5rem 0px;
        }
        p {
          color: #204892;
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 0;
        }
        .location {
          padding: 20px 0;
          p {
            color: #000;
            font-size: 14px;
            SVG {
              fill: #1c5b90;
            }
          }
          .ml-auto {
            margin-left: auto !important;
          }
        }
        .view-btn {
        }
        a.btn {
          display: block;
          font-size: 13px;
          font-weight: 500;
          padding: 10px 0;
          text-align: center;
          border-radius: 30px;
        }
        .view-btn {
          background: #e8f6ff;
          border: 1px solid #e8eeff;
          box-sizing: border-box;
          color: rgba(41, 68, 129, 0.9);
        }
        .book-btn {
          background: #10defd;
          border: 0;
        }
      }
      img {
        display: block;
        width: 100%;
      }
    }
    &:first-child {
      padding-left: 0px;
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
  .OurDoctors .carousel {
    .carousel__prev,
    .carousel__next {
      top: 15px !important;
    }
  }
}
</style>
