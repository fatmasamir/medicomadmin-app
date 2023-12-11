<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted, ref } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import AOS from "aos";
const { t } = useI18n();
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <Footer>
    <div class="contentFooter">
      <div class="row">
        <div class="col-lg-3 col-12">
          <div class="Logo">
            <router-link to="#">
              <img src="@/assets/images/footerLogo.png"
            /></router-link>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul class="social_media">
            <li>
              <router-link to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="10"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                  />
                </svg>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                  />
                </svg>
              </router-link>
            </li>
            <li>
              <router-link to="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </router-link>
            </li>
            <li>
              <router-link to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="14"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </router-link>
            </li>
            <li>
              <router-link to="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z"
                  />
                </svg>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5>For Patients</h5>
          <ul class="Patients">
            <li>
              <img src="../../../assets/images/arrow-right-d.png" />
              <router-link to="/"> Search for Doctors</router-link>
            </li>
            <li>
              <img src="../../../assets/images/arrow-right-d.png" />
              <router-link to="/"> Login</router-link>
            </li>
            <li>
              <img src="../../../assets/images/arrow-right-d.png" />
              <router-link to="/"> Register</router-link>
            </li>
            <li>
              <img src="../../../assets/images/arrow-right-d.png" />
              <router-link to="/"> Booking</router-link>
            </li>
            <li>
              <img src="../../../assets/images/arrow-right-d.png" />
              <router-link to="/"> Patient Dashboard</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5>For Doctors</h5>
          <ul class="Doctors">
            <li>
              <img src="../../../assets/images/arrow-right-d.png" />
              <router-link to="/"> Home</router-link>
            </li>
            <li>
              <img src="../../../assets/images/arrow-right-d.png" />
              <router-link to="/">Order Your Card</router-link>
            </li>
            <li>
              <img src="../../../assets/images/arrow-right-d.png" />
              <router-link to="/">Why It Is Worth?</router-link>
            </li>
            <li>
              <img src="../../../assets/images/arrow-right-d.png" />
              <router-link to="/">King Card</router-link>
            </li>
            <li>
              <img src="../../../assets/images/arrow-right-d.png" />
              <router-link to="/"> Princess Card</router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5>Contact Us</h5>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 384 512"
              >
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <router-link to="/">
                <p>
                  3556 Beech Street, San Francisco,California, CA 94108
                </p></router-link
              >
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path
                  d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"
                />
              </svg>
              <router-link to="/"> <p>+1 315 369 5943</p></router-link>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                />
              </svg>
              <router-link to="/"><p>doccure@example.com</p> </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div class="copyRight">
      <h6>© 2020 Doccure. All rights reserved.</h6>
      <ul class="policy-menu">
        <li><a href="/terms">Terms and Conditions</a></li>
        <li><a href="/privacy-policy">Policy</a></li>
      </ul>
    </div>
  </Footer>
</template>
<style scoped lang="scss">
/****media****/
Footer {
  text-align: center;
  color: white;
  background: #15558d;
  padding: 30px 30px 20px;
  .contentFooter {
    margin-top: 70px;
    text-align: left;
    .row {
      .Logo a {
        color: white;
        font-size: 30px;
        font-weight: 700;
      }
      p {
        color: white;
        padding: 20px 0px 0px;
        line-height: 27px;
      }
      h5 {
        color: #fff;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 30px;
        text-transform: capitalize;
      }
      ul {
        padding: 0px;
        list-style: none;
      }
      ul {
        li {
          display: block;
          text-align: left;
          color: rgba(238, 238, 238, 1);
          display: flex;
          align-items: flex-start;
          padding-bottom: 10px;
          h5 {
            color: #fff;
          }
          svg {
            path {
              fill: white;
            }
            width: 22px;
            height: 16px;
            margin-top: 5px;
          }
          a {
            transition: 0.2s all ease-in-out;
            color: #fff !important;
            font-size: 15px;
            position: relative;
            transition: all 0.4s ease 0s;
            font-weight: 500;
            padding-left: 5px;
            p {
              margin: 0px;
              padding: 0px;
            }
          }
        }
      }
      .Patients,
      .Doctors {
        li {
          img {
            filter: brightness(0) invert(1);
            width: 22px;
            height: 16px;
          }
          a {
            &:hover {
              padding-left: 10px;
            }
          }
        }
      }
      .social_media {
        display: flex;
        margin-bottom: 10px;
        li {
          margin-right: 10px;
          svg {
            fill: white;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
  hr {
    background: #1663a6;
    height: 1px;
  }
  .copyRight {
    text-align: left;
    align-items: center;
    justify-content: space-between;
    display: flex;
    h6 {
      padding: 30px 0px;
      color: white;
    }
    .policy-menu {
      padding: 20px 0px;
      display: flex;
      li {
        font-size: 15px;
        a {
          color: white;
          padding: 0px 10px;
        }
      }
      li:first-child:after {
        color: #fff;
        content: "|";
        font-weight: 300;
        position: relative;
      }
    }
  }
}

/*media" */
@media screen and (max-width: 992px) {
  Footer {
    padding-bottom: 0px;
    text-align: center;
    .row {
      > div {
        margin-top: 10px;
      }
      ul {
        padding: 0px 20px;
      }
    }
  }
  Footer .contentFooter .row .social_media {
    display: flex;
    justify-content: space-between;
  }
  Footer .contentFooter .container {
    max-width: 100%;
  }

  Footer h2 {
    font-size: 18px;
    display: block;
    text-transform: lowercase;
  }
}
</style>
