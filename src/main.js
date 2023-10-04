import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import DatePicker from './components/DatePicker.vue';
import DependencySelector from './components/DependencySelector.vue';

const app = createApp(App);

app.use(router);

app.component('date-picker', DatePicker);

app.component('DependencySelector', DependencySelector);

app.mount('#app');