<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-core";
import { useLang } from "@/stores/lang";
import ScrollTop from "./components/global/ScrollTop/index.vue";

//Language
const Language = useLang();

//loading
const loading = ref(true);

//onMounted
onMounted(() => {
  //onMounted
  Language.changeLayout();

  //setTimeout
  setTimeout(function () {
    loading.value = false;
  }, 1000);
});
</script>
<template>
  <div class="text-center loading" v-if="loading">
    <b-spinner label="Spinning" type="grow"></b-spinner>
  </div>
  <div class="scrollTop"><a href="#"></a></div>
  <router-view></router-view><ScrollTop />
</template>
<style scoped lang="scss">
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999;
  padding-top: 20%;
  background: #e1f3ff;
  color: #186db5;
  span {
    width: 40px;
    height: 40px;
  }
}
</style>
