<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <div v-if="!menuItems">Keine Daten vorhanden</div>
    <div v-else>
      <MenuList :id="id" :menu="menuItems" />
    </div>
  </div>
</template>

<script>
import MenuList from "@/components/menuList/MenuList";
import Loading from "@/components/loading/loading";
import { HTTP_SERVICE_INSTANCE } from "@/services/http.service.js";
export default {
  components: {
    MenuList,
    Loading,
  },
  data() {
    return {
      id: this.$route.params.id,
      restaurantInfo: {},
      isLoading: false,
      errorMessage: "",
      menuItems: {},
    };
  },
  methods: {
    async getRestaurantMenu() {
      try {
        const items = {};
        let result = await HTTP_SERVICE_INSTANCE.get(
          `/menu/${this.id}/categories`
        );

        //Prüfen, ob bereits Datenvorhanden sind
        if (result.Item) {
          console.log(result.Item && "categories" in result.Item);
          for (const category of result.Item.categories) {
            items[category] = [];
          }
        } else {
          this.menuItems = undefined;
          this.errorMessage = "Es wurde noch keine Speisekarte angelegt";
          return;
        }
        result = await HTTP_SERVICE_INSTANCE.get(`/menu/${this.id}/items`);
        for (const item of result.Items) {
          items[item.category].push(item);
        }
        /*         const restaurant = await HTTP_SERVICE_INSTANCE.get(
          `/restaurants/${this.id}`
        );

        this.restaurantInfo = restaurant.Item; */

        this.menuItems = items;
      } catch (error) {
        this.errorMessage = "Ein Fehler ist aufgetreten";
      }
    },
  },
  async mounted() {
    this.isLoading = true;
    await this.getRestaurantMenu();
    this.isLoading = false;
    console.log(this.menuItems);
  },
};
</script>

<style></style>
