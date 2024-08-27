
import { createApp } from 'vue'
import App from './App.vue'
import Routes from './router/index'

const app = createApp(App);
app.use(Routes);

app.mount('#app')
