import Vue from 'vue';
import Vuex from 'vuex';
import Screen from './modules/screen';
import Client from './modules/client';
import {SynchronizationPlugin} from './plugins/synchronization';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        screen: Screen,
        client: Client,
    },
    plugins: [SynchronizationPlugin],
});

export default store;
