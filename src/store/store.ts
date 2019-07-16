import Vue from 'vue';
import Vuex from 'vuex';
import Screen from './modules/screen';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        screen: Screen,
    },
});

export default store;
