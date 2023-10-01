import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import content from './content'
import './styles/index.scss'

const app = createApp(App)
  .use(router)

app.config.globalProperties.$content = content

app.mount('#app')
