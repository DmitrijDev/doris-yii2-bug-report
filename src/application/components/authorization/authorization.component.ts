import Vue from 'vue';
import Component from 'vue-class-component';
import {User} from '@/core/entities/user/model';
import {CLIENT_ACTIONS, CLIENT_MUTATIONS} from '../../../store/modules/client';
import {Schema} from '../form-generator/settings/interfaces';
import {FORM_FIELDS} from '../form-generator/settings/fields';
import {UserMapper} from '../../../core/entities/user/mapper';
import {RequestCriteria} from '../../../core/services/request-criteria';
import {UserCollection} from '../../../core/entities/user/collection';

@Component({})
export default class AuthorizationComponent extends Vue {
    public loading: boolean = false;

    public model: any = {
        email: '',
    };

    public formError = '';

    public schema: Schema = {
        fields: [
            FORM_FIELDS.email(),
            FORM_FIELDS.submit(this.loginUser, {buttonText: 'Авторизоваться'}),
        ],
    };

    get client(): User | undefined {
        return this.$store.getters.getClient;
    }

    public loginUser() {
        const userMapper = new UserMapper();
        const criteria = new RequestCriteria({
            condition: this.model,
        });

        this.loading = true;

        userMapper.findByAttributes(criteria).then((collection: UserCollection) => {
            if (collection.isEmpty()) {
                return;
            }

            const user = collection.getEntities()[0];
            this.$store.commit(CLIENT_MUTATIONS.setClient, user);
            this.loading = true;
            this.$modal.hide('authorization');
        }, (error: string) => {
            this.formError = error;
            this.loading = true;
        });
    }

    public clearUser() {
        this.$store.dispatch(CLIENT_ACTIONS.clearClient);
    }
}
