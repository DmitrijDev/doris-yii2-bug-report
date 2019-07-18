import {ActionContext} from 'vuex';
import {User} from '@/core/entities/user/model';

export const CLIENT_MUTATIONS = {
    setInitState: 'setClientInitState',
    setClient: 'setClientClient',
};

export const CLIENT_ACTIONS = {
    clearClient: 'clearClient',
};

export interface ClientState {
    model?: User;
}

const state: ClientState = {
    model: undefined,
};

export default {
    state,
    mutations: {
        [CLIENT_MUTATIONS.setInitState]: (clientState: ClientState, initState: ClientState) => {
            Object.assign(clientState, initState);
        },
        [CLIENT_MUTATIONS.setClient]: (clientState: ClientState, client: User) => {
            clientState.model = client;
        },
    },
    getters: {
        getClient: (clientState: ClientState): User | undefined => clientState.model,
    },
    actions: {
        [CLIENT_ACTIONS.clearClient]: (context: ActionContext<ClientState, any>) => {
            return new Promise(() => {
                context.commit(CLIENT_MUTATIONS.setClient, undefined);
            });
        },
    },
};
