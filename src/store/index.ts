import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { App } from "vue";

// pinia persist
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export const installStore = (app: App) => {
  app.use(pinia);
};

export default pinia;
