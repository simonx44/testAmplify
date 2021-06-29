<template>
  <div>
    <v-app-bar app color="white" flat>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="link in links" link :to="link.href" :key="link.title">
          {{ link.title }}
        </v-tab>
      </v-tabs>
      <Logout />
    </v-app-bar>

    <v-content :class="$style.mainContent">
      <v-container class="px-4 py-0 fill-height" fluid>
        <v-row class="fill-height">
          <v-col>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Logout from "@/components/forms/Logout";

export default {
  components: {
    Logout,
  },

  data: () => ({
    links: [
      {
        title: "Bestellungen",
        href: "/orders",
      },
      {
        title: "Restaurantprofil",
        href: "/restaurantprofil",
      },
      {
        title: "Speisekarte",
        href: "/menu",
      },
    ],
    isLoading: false,
  }),
};
</script>


<style module lang="scss">
.mainContent {
  background: #e2dedd;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
}
.container {
  max-width: 100% !important;
  width: 100% !important;
}
</style>
