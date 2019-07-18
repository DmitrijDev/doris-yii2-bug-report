import Vue from 'vue';
import Component from 'vue-class-component';
import {User} from '@/core/entities/user/model';

@Component({})
export default class ApplicationNavigationComponent extends Vue {

    get client(): User | undefined {
        return this.$store.getters.getClient;
    }

    public showCanvasModal() {
        if (!this.client) {
            this.showAuthorizationModal();
            return;
        }

        this.$modal.show('bug-report-tool');
    }

    public showAuthorizationModal() {
        this.$modal.show('authorization');
    }

    // public showListMenu() {
    // }
}
