import Vue from 'vue';
import Component from 'vue-class-component';
import {SCREEN_ACTIONS, ScreenTools} from "../../../../store/modules/screen";

@Component({})
export default class PointToolComponent extends Vue {
    public canvas?: HTMLElement;
    public started: boolean = false;

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

        this.canvas.addEventListener('mousedown', this.mouseDown, false);
        this.canvas.addEventListener('mousemove', this.mouseMove, false);
        this.canvas.addEventListener('mouseup', this.mouseUp, false);
    }

    destroy() {
        if (!this.canvas) {
            return;
        }

        this.canvas.removeEventListener('mousedown', this.mouseDown, false);
        this.canvas.removeEventListener('mousemove', this.mouseMove, false);
        this.canvas.removeEventListener('mouseup', this.mouseUp, false);
    }

    isActive() {
        return this.activeTool === ScreenTools.pencil;
    }

    mouseDown(event: MouseEvent) {
        this.$store.dispatch(SCREEN_ACTIONS.addPoint, this.getPoint(event)).then(() => {
            this.started = true;
        });
    };

    mouseMove(event: MouseEvent) {
        if (!this.started) {
            return;
        }

        this.$store.dispatch(SCREEN_ACTIONS.addPoint, this.getPoint(event)).then(() => {
            this.started = true;
        });
    };

    mouseUp(event: MouseEvent) {
        if (!this.started) {
            return;
        }

        this.$store.dispatch(SCREEN_ACTIONS.clearPoints).then(() => {
            this.started = false;
        });
    };

    getPoint(event: MouseEvent) {
        if (!this.canvas) {
            return;
        }

        let height = this.canvas.clientHeight;
        let width = this.canvas.clientWidth;

        let coefX = width / this.screenWidth;
        let coefY = height / this.screenHeight;

        return {x: event.offsetX / coefX, y: event.offsetY / coefY};
    }
}

