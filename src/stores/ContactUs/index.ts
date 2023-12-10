import callServer from "@/assets/scripts/callServer/callServer";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
export const UseContactUs = defineStore("ContactUs", () => {
  // is_loading
  const is_loading = ref<Boolean>(false);

  // is_auth
  const is_auth = ref<Boolean>(false);

  // is_waiting
  const is_waiting = ref<Boolean>(false);

  //ContactUs
  async function get_ContactUs(data) {
    console.log("data", data);
    is_loading.value = true;
    is_waiting.value = true;
    const response = await callServer({
      url: "api/contact-us",
      method: "POST",
      data,
    });
    if (!response.ok) {
      let errors = null;
      console.log("errors == response");
      await response.json().then((data) => {
        toast.error(data.message);
      });
      is_loading.value = false;
      is_waiting.value = false;
      throw errors;
    } else {
      toast.success("Successfully Register ... ");
      is_auth.value = true;
      is_loading.value = false;
    }
  }
  return {
    get_ContactUs,
    is_waiting,
  };
});
