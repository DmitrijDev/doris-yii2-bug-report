import Vue from 'vue';
import Component from 'vue-class-component';
import {SCREEN_MUTATIONS, ScreenTools} from "../../../../../../store/modules/screen";

@Component({})
export default class CircleToolComponent extends Vue {

    get activeTool(): ScreenTools {
        return this.$store.getters.getScreenActiveTool;
    }

    isActive() {
        return this.activeTool === ScreenTools.circle;
    }

    changeTool() {
        this.$store.commit(SCREEN_MUTATIONS.setActiveTool, ScreenTools.circle);
    }
}

