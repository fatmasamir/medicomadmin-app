import callServer from "@/assets/scripts/callServer/callServer";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
export const UsecardCategories = defineStore("cardCategories", () => {
  const cardCategories = ref([]);
  const cards_Categorie = ref();
  let Cards = ref([]);
  let CardChoose = ref();
  const OrderList = ref();
  const redirect_url = ref();
  // is_waiting
  const is_waiting = ref<Boolean>(false);

  //Get cardCategories
  async function get_cardCategories() {
    const response = await callServer({
      url: "api/cards-category",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        cardCategories.value = data.data;
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get cardCategories
  async function get_cardCategorie_cards(id) {
    CardChoose.value = "";
    const response = await callServer({
      url: "api/cards-category/" + id,
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        cards_Categorie.value = data.data;
        CardChoose.value = cards_Categorie.value.card[0];
      });
    } else {
      toast.error("Has Error");
    }
  }
  //Get Cards
  async function get_cards() {
    console.log("cards");
    const response = await callServer({
      url: "api/cards",
      auth: true,
    });
    if (response.ok) {
      response.json().then((data) => {
        Cards.value = data.data;
        console.log("Blog.value", Cards.value);
      });
    } else {
      toast.error("Has Error");
    }
  }
  // register
  async function add_Order(data) {
    redirect_url.value = "";
    is_waiting.value = true;
    console.log("data", data);
    is_waiting.value = true;
    const response = await callServer({
      url: "api/submit-order",
      method: "POST",
      data,
    });
    if (response.ok) {
      response.json().then((data) => {
        toast.success("Successfully ... ");
        redirect_url.value = data.data.redirect_url;
        console.log("redirect_url", redirect_url.value);
        window.location.href = redirect_url.value;
      });
    } else {
      response.json().then((data) => {
        for (let key in data.errors) {
          toast.error(data.errors[key][0]);
        }
        is_waiting.value = false;
      });
    }
  }
  return {
    get_cardCategories,
    get_cards,
    get_cardCategorie_cards,
    add_Order,
    Cards,
    cardCategories,
    cards_Categorie,
    CardChoose,
    is_waiting,
    OrderList,
    redirect_url,
  };
});
