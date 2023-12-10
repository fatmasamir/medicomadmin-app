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
    itemsToShow: 3,
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
    title: "Operation",
    image: new URL(`@/assets/images/imageClient2.jfif)`, import.meta.url).href,
  },
  {
    id: 1,
    title: "Medical",
    image: new URL(`@/assets/images/imageClient2.jfif`, import.meta.url).href,
  },
  {
    id: 2,
    title: "Patient Ward",
    image: new URL(`@/assets/images/imageClient2.jfif`, import.meta.url).href,
  },
  {
    id: 3,
    title: "TEST ROOM",
    image: new URL(`@/assets/images/imageClient2.jfif`, import.meta.url).href,
  },
  {
    id: 4,
    title: "ICU",
    image: new URL(`@/assets/images/imageClient2.jfif`, import.meta.url).href,
  },
  {
    id: 5,
    title: "Operation",
    image: new URL(`@/assets/images/imageClient2.jfif`, import.meta.url).href,
  },
]);
</script>
<template>
  <section class="clinic-features-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="section-heading aos" data-aos="fade-up">
            <h2>Availabe Features in Our Clinic</h2>
            <p>Meet our Experts &amp; Book Online</p>
          </div>
        </div>
        <Carousel v-bind="settings" :breakpoints="breakpoints">
          <Slide v-for="slide in Clinics" :key="slide"
            ><div class="content">
              <div class="clinic-features">
                <img
                  src="../../../../assets/images/imageClient2.jfif"
                  class="img-fluid"
                />
              </div>
              <div class="clinic-feature-overlay">
                <a href="#" class="img-overlay">Medical</a>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.clinic-features-section {
  background: url(../../../../assets/images/AvailabeFeatures.jpg);
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 0;
  position: relative;
  .section-heading {
    margin-bottom: 30px;
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
  .carousel__slide {
    .content {
      position: relative;
      padding: 0px;
      margin: 10px 15px 10px 0px;
      width: 100%;
      .clinic-features {
        position: relative;
        img {
          display: block;
          width: 100%;
          border-radius: 10px;
        }
      }
      .clinic-feature-overlay {
        bottom: 20px;
        position: absolute;
        text-align: center;
        width: 100%;
        .img-overlay {
          background: #20c0f3;
          border-radius: 60px;
          color: #e6f4fd;
          display: inline-block;
          font-weight: 600;
          min-width: 150px;
          padding: 10px 15px;
          text-transform: uppercase;
        }
      }
    }
  }
  img {
    display: block;
    width: 100%;
  }
}
</style>
