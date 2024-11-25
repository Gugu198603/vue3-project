import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const a = 1
const b = () => {
  console.log(a)
}
b()
