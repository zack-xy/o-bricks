import { createApp } from "./main";

// 激活
const { app, router, store } = createApp()

// 还原store.state
// window.__INITIAL_STATE__
if (window.__INITINAL_STATE__) {
  store.replaceState(window.__INITINAL_STATE__)
}

router.onReady(() => {
  app.$mount('#app')
})