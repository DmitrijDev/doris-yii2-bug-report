import Vue from 'vue';
import store from '@/store/store';
import App from '@/application/app/app.component.vue';

/* Libs */
import VModal from 'vue-js-modal';
import 'vue-form-generator/dist/vfg.css';
import Notifications from 'vue-notification'
import VueFormGenerator from 'vue-form-generator';


/* Declare and imports */
// import 'sanitize.css';
import "./assets/scss/main.scss";
import request from '@/core/services/request';
import './application/components/form-generator/settings/validations';
import './application/components/form-generator/settings/translations';
import LoaderComponent from '@/application/components/loader/loader.component';
import ButtonComponent from './application/components/form-generator/fields/button/button.component';
import FormBuilderComponent from './application/components/form-generator/form-builder/form-builder.component';
import ErrorsListComponent from "./application/components/form-generator/fields/errors-list/errors-list.component";
import ImageWorkerComponent from "./application/components/form-generator/fields/image-worker/image-worker.component";

Vue.use(VModal)
Vue.use(Notifications)
Vue.use(VueFormGenerator);

Vue.component('loader', LoaderComponent);
Vue.component("fieldCbutton", ButtonComponent);
Vue.component("form-builder", FormBuilderComponent);
Vue.component('fieldErrorsList', ErrorsListComponent);
Vue.component("fieldImageWorker", ImageWorkerComponent);

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h: any) => h(App),
}).$mount('#app');
