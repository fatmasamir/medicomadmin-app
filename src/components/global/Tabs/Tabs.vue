<script setup lang="ts">
import NiceNavigators from "@/components/global/Navigators/NiceNavigators/NiceNavigators.vue";
import { onMounted, ref } from "@vue/runtime-core";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const { t } = useI18n();

const props = defineProps(["buttons", "selectedTab", "data", "tStyle"]);
// const emit = defineEmits(["changeTab"]);
const emit = defineEmits<{
  (e: "changeTab"): void;
}>();

const changeOnTab = (tabName) => {
  emit("changeTab", tabName);
};

// router
const router = useRouter();

// route
const route = useRoute();
const buttonName = ref();

// currentNav
function currentFavNav(): void {
  let buttons = document.querySelectorAll(
    ".nice-navigator li button"
  ) as NodeListOf<HTMLElement>;
  // let marker = document.querySelector(".nice-navigator .marker") as HTMLElement;
  buttons.forEach((button: HTMLElement) => {
    button.onclick = () => {
      // change marker height and position to current target
      // marker.style.width = getComputedStyle(button).width;
      // marker.s'buttontyle.left = button.offsetLeft + "px";
      buttonName.value = button.name;
      // custom event to send current nav
      emit("changeCurrent", button.parentElement!.dataset.nav as Types);

      // change current query
      // router.push({
      //   query: {
      //     type: button.parentElement!.dataset.nav,
      //   },
      // });
    };
  });
}
// setup nav
function setUpFavNav() {
  let current_nav = document.querySelector(
    `.nice-navigator ul li[data-nav=${route.query.type}] button`
  ) as HTMLButtonElement;

  if (current_nav) {
    current_nav.click();
  } else {
    let init_button = document.querySelectorAll(
      ".nice-navigator ul li button"
    )[0] as HTMLButtonElement;

    init_button.click();
  }
}
onMounted(() => {
  currentFavNav();
  setUpFavNav();
});
</script>

<template>
  <div class="w-full tabs">
    <section class="nice-navigator">
      <ul ref="list">
        <li
          :data-nav="button.name"
          v-for="button in buttons"
          :key="button.name"
          @click="changeOnTab(button.name)"
        >
          <button
            :name="button.name"
            :class="[
              buttonName == button.name ? 'active' : '',
              { tStyle: tStyle },
            ]"
          >
            <span>{{ button.title }}</span>
          </button>
        </li>
      </ul>
    </section>
    <div class="tabs-content">
      <slot />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/variables";

.tabs {
  .nice-navigator {
    width: 100%;
    display: flex;
    position: relative;
    padding: {
      bottom: 8px;
    }
    .marker {
      width: 100px;
      height: 2px;
      background: var(--first-color);
      position: absolute;
      left: 0;
      bottom: 0;
      transition: var(--main-transition);
    }
    &::before {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: var(--button-border);
    }
    ul {
      width: 100%;
      display: flex;
      column-gap: 10px;

      list: {
        style: none;
      }
      margin: 0;
      padding: 0;
      @media screen and (max-width: map-get($grid, md)) {
        justify-content: center;
      }
      li {
        display: flex;
        button {
          background: unset;
          border: 2px solid transparent;
          outline: none;
          display: flex;
          align-items: center;
          column-gap: 5px;

          padding: 10px;
          font-weight: bold;
          cursor: pointer;
          &.active {
            // color: #094e81;
            border-bottom: 2px solid;
          }
          .icon {
            width: 24px;
            margin: {
              right: 10px;
            }
          }
        }
      }
    }
  }
}
.tabs .nice-navigator ul li button.active {
}
.tabs .nice-navigator ul {
  margin-bottom: -8px;
}
@media (max-width: 535px) {

.tab_dd .tabs .nice-navigator ul{
display: block;
  text-align: center;
}
}
</style>
