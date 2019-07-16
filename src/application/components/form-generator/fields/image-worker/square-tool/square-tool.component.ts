import Vue from 'vue';
import Component from 'vue-class-component';
import {ImageSquare, SCREEN_ACTIONS, SCREEN_MUTATIONS, ScreenTools} from "../../../../../../store/modules/screen";
import {Watch} from "vue-property-decorator";

@Component({})
export default class SquareToolComponent extends Vue {
    public canvas?: HTMLElement;
    public beginX: number = 0;
    public beginY: number = 0;

    @Watch('activeTool') updateListeners() {
        if (this.isActive()) {
            this.setListeners();
            return;
        }

        this.removeListeners();
    }

    get activeTool(): ScreenTools {
        return this.$store.getters.getScreenActiveTool;
    }

    get screenHeight(): number {
        return this.$store.getters.getScreenHeight;
    }

    get screenWidth(): number {
        return this.$store.getters.getScreenWidth;
    }

    mounted() {
        let canvas = document.getElementById('bg-canvas');

        if (!canvas) {
            throw Error(`Can't find canvas or canvasWrap element`);
            return;
        }

        this.canvas = canvas;

        if (this.isActive()) {
            this.setListeners();
        }
    }

    destroy() {
        this.removeListeners();
    }

    setListeners() {
        if (!this.canvas) {
            return;
        }

        this.canvas.addEventListener('mousedown', this.getBeginCoords, false);
        this.canvas.addEventListener('mouseup', this.setSquare, false);
    }

    removeListeners() {
        if (!this.canvas) {
            return;
        }

        this.canvas.removeEventListener('mousedown', this.getBeginCoords, false);
        this.canvas.removeEventListener('mouseup', this.setSquare, false);
    }

    getBeginCoords(event: MouseEvent) {
        this.beginX = event.offsetX;
        this.beginY = event.offsetY;
    }

    setSquare(event: MouseEvent) {
        let coords = this.getScaledCoordinates(this.beginX, this.beginY, event.offsetX, event.offsetY);

        if (!coords) {
            return;
        }

        let width = coords.endX - coords.beginX;
        let height = coords.endY - coords.beginY;

        if (Math.abs(width) < 40 || Math.abs(height) < 40) {
            this.beginX = 0;
            this.beginY = 0;

            return;
        }

        this.$store.dispatch(SCREEN_ACTIONS.addSquare, {
            beginX: coords.beginX,
            beginY: coords.beginY,
            width: width,
            height: height
        }).then(() => {
            this.beginX = 0;
            this.beginY = 0;
        });
    }

    isActive() {
        return this.activeTool === ScreenTools.square;
    }

    changeTool() {
        this.$store.commit(SCREEN_MUTATIONS.setActiveTool, ScreenTools.square);
    }

    getScaledCoordinates(beginX: number, beginY: number, endX: number, endY: number) {
        if (!this.canvas) {
            return;
        }

        let height = this.canvas.clientHeight;
        let width = this.canvas.clientWidth;

        let coefX = width / this.screenWidth;
        let coefY = height / this.screenHeight;

        return {
            beginX: beginX / coefX,
            beginY: beginY / coefY,
            endX: endX / coefX,
            endY: endY / coefY,
        };
    }
}

