<script setup>
import { ref } from "vue";

const Clinics = ref([
  {
    id: 0,
    title: "Urology",
    image: new URL(`@/assets/images/UROLOGY.png`, import.meta.url).href,
  },
  {
    id: 1,
    title: "Neurology",
    image: new URL(`@/assets/images/Neurology.png`, import.meta.url).href,
  },
  {
    id: 2,
    title: "Orthopedic",
    image: new URL(`@/assets/images/Orthopedic.png`, import.meta.url).href,
  },
  {
    id: 3,
    title: "Cardiologist",
    image: new URL(`@/assets/images/Cardiologist.png`, import.meta.url).href,
  },
]);
</script>
<template>
  <section class="specialities-section">
    <div class="shapes">
      <img
        src="data:image/png;base64,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"
        class="img-fluid shape-3"
      /><img
        src="data:image/png;base64,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"
        class="img-fluid shape-4"
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 overflow-hidden mb-3">
          <div class="section-heading bg-area" data-aos="fade-up">
            <h2>Browse by Specialities</h2>
            <p>Find experienced doctors across all specialties</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="slide in Clinics" :key="slide">
          <div class="specialist-card d-flex">
            <div class="specialist-img">
              <img :src="slide.image" class="img-fluid" />
            </div>
            <div class="specialist-info">
              <a href="#"
                ><h4>{{ slide.title }}</h4></a
              >
              <p>21 Doctors</p>
            </div>
            <div class="specialist-nav ml-auto">
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
        </div>
        <div class="col-lg-3 col-md-6" v-for="slide in Clinics" :key="slide">
          <div class="specialist-card d-flex">
            <div class="specialist-img">
              <img :src="slide.image" class="img-fluid" />
            </div>
            <div class="specialist-info">
              <a href="#"
                ><h4>{{ slide.title }}</h4></a
              >
              <p>21 Doctors</p>
            </div>
            <div class="specialist-nav ml-auto">
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
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.specialities-section {
  position: relative;
  padding: 80px 0 55px;
  background: rgba(25, 69, 107, 0.9);
  height: auto;
  .shapes {
    position: absolute;
    width: 100%;
    .shape-3,
    .shape-4 {
      position: absolute;
      top: -110px;
    }
    .shape-4 {
      right: 0;
    }
  }
  .specialist-card {
    align-items: center;
    background: #fff;
    border-radius: 163px;
    box-shadow: 0 4px 24px hsla(0, 0%, 72%, 0.25);
    margin-bottom: 25px;
    padding: 15px;
    .specialist-img {
      background: #1b5d92;
      border-radius: 50%;
      height: 55px;
      margin-right: 10px;
      padding: 10px;
      transition: all 0.3s ease 0s;
      width: 55px;
    }
    .specialist-info {
      h4 {
        color: #274782;
        font-weight: 600;
        margin-bottom: 0;
        font-size: 1.125rem;
      }
      p {
        color: #000;
        font-weight: 500;
        margin-bottom: 0;
      }
    }
    .specialist-nav {
      margin-left: auto !important;
      a {
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 4px 24px hsla(0, 0%, 72%, 0.25);
        display: block;
        height: 35px;
        line-height: 35px;
        margin: auto;
        text-align: center;
        transition: all 0.3s ease 0s;
        width: 35px;
        svg {
          fill: #d84153;
        }
      }
    }
    &:hover {
      background: #e0f2ff;
      .specialist-img {
        background: #10defd;
      }
      .specialist-nav a {
        background: #10defd;
        svg {
          fill: #fff;
        }
      }
    }
  }
  .section-heading.bg-area h2,
  .section-heading.bg-area p {
    color: #fff;
  }
}
</style>
