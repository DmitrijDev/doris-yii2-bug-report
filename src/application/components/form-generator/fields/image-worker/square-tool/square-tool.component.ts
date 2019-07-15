import Vue from 'vue';
import Component from 'vue-class-component';
import {SCREEN_MUTATIONS, ScreenTools} from "../../../../../../store/modules/screen";

@Component({})
export default class SquareToolComponent extends Vue {

    get activeTool(): ScreenTools {
        return this.$store.getters.getScreenActiveTool;
    }

    isActive() {
        return this.activeTool === ScreenTools.square;
    }

    changeTool() {
        this.$store.commit(SCREEN_MUTATIONS.setActiveTool, ScreenTools.square);
    }
}

