import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router/router";
import vuetify from "./plugins/vuetify";
import Amplify from "aws-amplify";
import "@aws-amplify/ui-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./styles/main.scss";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

console.log(process.env.VUE_APP_REGION);

console.log(process.env.VUE_APP_USER_POOL_ID);

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.VUE_APP_REGION,
    userPoolId: process.env.VUE_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.VUE_APP_CLIENT_ID,
    oauth: {
      /*       domain: config.cognito.DOMAIN,
      scope: config.cognito.SCOPE, */
      redirectSignIn: process.env.VUE_APP_URL,
      redirectSignOut: process.env.VUE_APP_URL,
      responseType: "code",
    },
  },
});

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
