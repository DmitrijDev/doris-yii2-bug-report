import Vue from 'vue';
import App from '@/application/app/app.component.vue';
import store from '@/store/store';

/* Libs */
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';
import VModal from 'vue-js-modal';


/* Declare and imports */
// import 'sanitize.css';
import "./assets/scss/main.scss";
import './application/components/form-generator/settings/validations';
import './application/components/form-generator/settings/translations';
import request from '@/core/services/request';
import LoaderComponent from '@/application/components/loader/loader.component';
import ButtonComponent from './application/components/form-generator/fields/button/button.component';
import ErrorsListComponent from "./application/components/form-generator/fields/errors-list/errors-list.component";
import FormBuilderComponent from './application/components/form-generator/form-builder/form-builder.component';

Vue.use(VueFormGenerator);
Vue.use(VModal)

Vue.component('loader', LoaderComponent);
Vue.component("form-builder", FormBuilderComponent);
Vue.component("fieldCbutton", ButtonComponent);
Vue.component('fieldErrorsList', ErrorsListComponent);

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h: any) => h(App),
}).$mount('#app');
