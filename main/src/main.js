import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import microApp from "@micro-zoe/micro-app";

Vue.config.productionTip = false;

microApp.start({
  lifeCycles: {
    created() {
      console.log("created 全局监听");
    },
    beforemount() {
      console.log("beforemount 全局监听");
    },
    mounted() {
      console.log("mounted 全局监听");
    },
    unmount() {
      console.log("unmount 全局监听");
    },
    error() {
      console.log("error 全局监听");
    },
  },
  plugins: {
    modules: {},
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
