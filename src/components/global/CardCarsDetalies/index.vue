<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import SimpleButton from "@/components/global/Buttons/simpleButton/SimpleButton.vue";
import { defineProps } from "vue";
import AOS from "aos";
const { t } = useI18n();
// props
let props = defineProps(["data"]);
onMounted(() => {
  AOS.init();
});
</script>
<template>
  <div class="the_block">
    <div class="image_car">
      <img :src="props.data.image_car" />
    </div>
    <div class="card">
      <div class="title">
        <h3>{{ props.data.title }}</h3>
        <div class="buttons">
          <div class="rating_number">
            <img
              src="../../../assets/images/global/icons/global/carRental/star.svg"
            />
            {{ props.data.per }}
          </div>
          <SimpleButton type="send" v-if="data.available">
            <router-link
              :to="'/car-detalies/' + data.slug"
              type="submit"
              class="btn"
            >
              {{ t("Available") }}
            </router-link></SimpleButton
          >
        </div>
      </div>
      <p class="my-3">
        {{ data.short_description }}
      </p>
      <div class="row list">
        <div class="col-lg-4">
          <div class="content">
            <span>Power:</span>
            {{ data.power }}
          </div>
        </div>
        <div class="col-lg-4">
          <div class="content">
            <span>Bag:</span>
            {{ data.bags }}
          </div>
        </div>
        <div class="col-lg-4">
          <div class="content">
            <span>Seat:</span>
            {{ data.seats }}
          </div>
        </div>
      </div>
      <hr />
      <div class="BookNow">
        <div>
          <h5>{{ data.per }} LE</h5>
          <span>(per week)</span>
        </div>
        <SimpleButton type="send">
          <a href="https://wa.me/01032337327" target="_blank" class="btn p-2">
            {{ t("BookNow") }}
          </a></SimpleButton
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.the_block {
  .image_car img {
    width: 100%;
    margin: auto auto 20px;
    height: 200px;
  }
  .card {
    border: 1px solid #e7e7e7 !important;
    border-top: 0px !important;
    margin-bottom: 100px;
    padding: 20px;
    a {
      color: initial;
    }
    .title {
      justify-content: space-between;
      align-items: center;
      display: flex;
      h3 {
        font-weight: 700;
      }
      .buttons {
        display: flex;
        align-items: center;
        .rating_number {
          background: black;
          color: white;
          border-radius: 8px;
          padding: 8px 0px;
          margin-right: 10px;
          width: 70px;
          text-align: center;
        }
        a {
          height: 44px;
          padding: 10px 10px;
          background: #44c308;
          border-radius: 8px;
          color: white;
          display: block;
          cursor: pointer !important;
        }
      }
    }
    p {
      color: #818181;
    }
    .list {
      border-radius: 4px;
      > div {
        text-align: center;
        padding: 0px 5px;
        .content {
          background: #fbfbfb;
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
    .BookNow {
      align-items: center;
      justify-content: space-between;
      margin: 20px 0px;
      display: flex;
      h5 {
        display: inline-block;
        font-size: 18px;
      }
      span {
        font-size: 15px;
      }
      button {
        height: 50px;
      }
      a {
        color: white;
      }
      a:focus {
        box-shadow: none;
      }
    }
    hr {
      margin-top: 30px;
      border: 1px solid;
      height: 0px;
    }
  }
}
/*media" */

@media screen and (max-width: 1409px) {
}
@media screen and (max-width: 990px) {
}

/*ar version */
.is-ar {
  .the_block .card .title .buttons .rating_number {
    margin-right: 0px;
    margin-left: 10px;
  }
}
</style>
