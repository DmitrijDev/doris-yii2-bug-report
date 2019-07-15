import Vue from 'vue';
import Component from 'vue-class-component';
import {Watch} from 'vue-property-decorator';
import {ImagePoint} from "../../../../../../store/modules/screen";

@Component({})
export default class CanvasModuleComponent extends Vue {
    public context?: CanvasRenderingContext2D;

    get screenWidth(): number {
        return this.$store.getters.getScreenWidth;
    }

    get screenHeight(): number {
        return this.$store.getters.getScreenHeight;
    }

    get screenSrc(): string {
        return this.$store.getters.getScreenSrc;
    }

    get screenPoints(): ImagePoint[] {
        return this.$store.getters.getScreenPoints;
    }

    @Watch('screenSrc') updateImageSrc() {
        this.setImageToCanvas();
    }

    @Watch('screenPoints') updateScreenPoints(points: ImagePoint[]) {
        if (!this.context) {
            return;
        }

        if (this.screenPoints.length < 6) {
            var b = this.screenPoints[0];
            this.context.beginPath();
            this.context.arc(b.x, b.y, this.context.lineWidth / 2, 0, Math.PI * 2, !0);
            this.context.closePath();
            this.context.fill();
            return;
        }

        this.context.beginPath();
        this.context.moveTo(this.screenPoints[0].x, this.screenPoints[0].y);

        for (var i = 1; i < this.screenPoints.length - 2; i++) {
            var c = (this.screenPoints[i].x + this.screenPoints[i + 1].x) / 2,
                d = (this.screenPoints[i].y + this.screenPoints[i + 1].y) / 2;
            this.context.quadraticCurveTo(this.screenPoints[i].x, this.screenPoints[i].y, c, d);
            this.context.quadraticCurveTo(this.screenPoints[i].x, this.screenPoints[i].y, this.screenPoints[i + 1].x, this.screenPoints[i + 1].y);
        }

        this.context.stroke();
    }

    mounted() {
        this.setImageToCanvas();
    }

    setImageToCanvas() {
        // @ts-ignore
        this.context = this.$refs.canvas.getContext("2d");

        var background = new Image();
        background.src = this.screenSrc;

        background.onload = (event) => {
            let imgWidth = this.screenWidth;
            let imgHeight = this.screenHeight;
            let canvas = <HTMLElement>this.$refs.canvas;

            if (!canvas || !this.context) {
                return;
            }

            canvas.setAttribute('width', `${imgWidth}px`);
            canvas.setAttribute('height', `${imgHeight}px`);

            this.context.drawImage(background, 0, 0, imgWidth, imgHeight);
        }
    }
}

