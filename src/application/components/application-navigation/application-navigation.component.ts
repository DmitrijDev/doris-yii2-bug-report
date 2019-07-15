import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class ApplicationNavigationComponent extends Vue {

    showCanvasModal() {
        this.$modal.show('bug-report-tool');
    }

    showListMenu() {
    }
}
