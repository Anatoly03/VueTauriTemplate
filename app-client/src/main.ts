import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './styles/global.scss';
import './styles/theme-light.scss';
import './styles/theme-dark.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');
