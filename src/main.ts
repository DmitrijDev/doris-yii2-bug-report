import Vue from 'vue';
import App from '@/application/app/app.component.vue';
import store from '@/store/store';

/* Libs */
import VueFormGenerator from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';

/* Declare and imports */
// import 'sanitize.css';
import './application/components/form-generator/settings/validations';
import './application/components/form-generator/settings/translations';
import request from '@/core/services/request';
import LoaderComponent from '@/application/components/loader/loader.component';

Vue.use(VueFormGenerator);

Vue.component('loader', LoaderComponent);

Vue.config.productionTip = false;

Vue.config.errorHandler = function(err: any, vm: any, info: any) {
    request.post('client-error-log', {
        message: err.message,
        meta: {
            url: window.location.href,
            element: vm.$el.getAttribute ? vm.$el.getAttribute('id') : 'none',
            place: info,
        },
    }, false).then();
};

new Vue({
    store,
    render: (h: any) => h(App),
}).$mount('#app');
