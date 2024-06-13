import { createApp } from 'vue'
import App from './App.vue'
import Tarefa from './components/Tarefa.vue'

const app = createApp(App)
app.component('tarefa', Tarefa)
app.mount('#app');
