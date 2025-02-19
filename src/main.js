import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles' 
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'; // MDI 圖標
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'; // Import the router

const vuetify = createVuetify({
  
  // vuetify options here
  icons: {
    defaultSet: 'mdi',  // 設定為 MDI
  },
  components, 
  directives,
})
  
const app = createApp(App)
app.use(vuetify)
app.use(router); // Use the router
app.mount('#app')
