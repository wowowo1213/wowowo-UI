import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner, faAngleRight, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faSpinner, faAngleRight, faHome);
import './styles/index.css';

const app = createApp(App);

// 在 Vue 组件中注册 FontAwesomeIcon 组件
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
