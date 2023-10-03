import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import DatePicker from './components/DatePicker.vue';

const app = createApp(App);

app.use(router);

app.component('date-picker', DatePicker);

app.mount('#app');