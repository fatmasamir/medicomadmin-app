<script setup>
import { defineComponent, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";
library.add(faClock);

import "vue3-carousel/dist/carousel.css";

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};
const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};
const Blogs = ref([
  {
    id: 0,
    name: "UROLOGY",
    image: new URL(`@/assets/images/UROLOGY.png`, import.meta.url).href,
    title: "Doccure – Making your clinic painless visit?",
  },
  {
    id: 1,
    name: "Neurology",
    image: new URL(`@/assets/images/Neurology.png`, import.meta.url).href,
    title: "What are the benefits of Online Doctor Booking?",
  },
  {
    id: 2,
    name: "Orthopedic",
    image: new URL(`@/assets/images/Orthopedic.png`, import.meta.url).href,
    title: "Benefits of consulting with an Online Doctor",
  },
  {
    id: 3,
    name: "Cardiologist",
    image: new URL(`@/assets/images/Cardiologist.png`, import.meta.url).href,
    title: "5 Great reasons to use an Online Doctor",
  },
]);
</script>
<template>
  <div class="our-blog-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 overflow-hidden">
          <div class="section-heading" data-aos="fade-up">
            <h2>Blogs and News</h2>
            <p>Read Professional Articles and Latest Articles</p>
          </div>
        </div>
      </div>
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        :wrap-around="true"
      >
        <Slide v-for="Blog in Blogs" :key="Blog">
          <div class="content">
            <div class="our-blogs">
              <div class="blogs-img">
                <a href="/blog/blog-details"
                  ><img
                    src="@/assets/images/imageClient3.jfif"
                    class="img-fluid"
                /></a>
                <div class="blogs-overlay d-flex">
                  <img
                    src="@/assets/images/imageClient3.jfif"
                    class="img-fluid"
                  /><span class="blogs-writter">Dr. Ruby Perrin</span>
                </div>
              </div>
              <div class="blogs-info">
                <span>{{ Blog.name }}</span
                ><a href="/blog/blog-details"
                  ><h4>{{ Blog.title }}</h4></a
                >
                <p>
                  Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
                  sed do eiusmod tempor.
                </p>
                <span class="blogs-time">
                  <font-awesome-icon icon="clock" /> 3 Dec 2021</span
                >
              </div>
              <div class="blogs-nav">
                <a class="blogs-btn" href="/blog/blog-details">Read More</a>
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
.our-blog-section {
  padding: 30px 0 10px;
  margin: 30px 0px;
  position: relative;
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
  .carousel__slide {
    align-items: baseline;
    height: 100%;
  }
  .content {
    margin-top: 35px;
    text-align: left;
    padding: 0px 15px 0px 0px;
    .our-blogs {
      display: block;
      .blogs-img {
        position: relative;
        .blogs-overlay {
          align-items: center;
          background: #fff;
          border-radius: 30px 0 0 30px;
          bottom: 10px;
          padding: 5px;
          position: absolute;
          right: 0;
          .blogs-writter {
            display: none;
          }
          img {
            border-radius: 50%;
            height: 35px;
            margin-right: 10px;
            width: 35px !important;
          }
        }
      }

      .blogs-info {
        background: #fff;
        border: 1px solid #e8eeff;
        padding: 15px;
        span {
          color: #20c0f3;
        }
        h4 {
          color: #000;
          line-height: 28px;
        }
        p {
          color: #000;
          font-size: 13px;
        }
      }
      .blogs-time {
        color: #17418e !important;
      }
      .blogs-nav {
        border: 1px solid #e8eeff;
        border-top: 0;
        padding: 10px;
        .blogs-btn {
          background: #1c5b90;
          border-radius: 30px;
          color: #fff;
          display: block;
          font-size: 12px;
          padding: 8px 10px;
          text-align: center;
          width: 110px;
        }
      }
      &:hover .blogs-overlay .blogs-writter.blogs-writter {
        display: block;
      }
    }
    img {
      display: block;
      width: 100%;
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
  .our-blog-section .carousel {
    .carousel__prev,
    .carousel__next {
      top: 15px !important;
    }
  }
}
</style>
