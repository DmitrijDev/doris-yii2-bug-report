import Vue from 'vue';
import Component from 'vue-class-component';
import {SCREEN_MUTATIONS, ScreenTools} from "../../../store/modules/screen";
import html2canvas from 'html2canvas';
import CanvasModuleComponent from "../canvas-module/canvas-module.component";
import PointToolComponent from "./point-tool/point-tool.component";

@Component({
    components: {
        'canvas-module': CanvasModuleComponent,
        'point-tool': PointToolComponent
    }
})
export default class ImageWorkerComponent extends Vue {

    makeScreen() {
        const element = document.querySelector("body");

        if (!element) {
            return;
        }

        this.$modal.hide('bug-report-tool');

        setTimeout(() => {
            let options = {
                x: window.scrollX,
                y: window.scrollY,
                width: window.innerWidth,
                height: window.innerHeight
            };

            html2canvas(element, options).then(canvas => {
                this.$store.commit(SCREEN_MUTATIONS.setWidth, canvas.width);
                this.$store.commit(SCREEN_MUTATIONS.setHeight, canvas.height);

                canvas.toBlob((blob) => {
                    // @ts-ignore
                    let urlCreator = window.URL || window.webkitURL;

                    this.$store.commit(SCREEN_MUTATIONS.setSrc, urlCreator.createObjectURL(blob));
                    this.$modal.show('bug-report-tool');

                    console.log(this.$store.getters.getScreenSrc);
                });
            });
        }, 100)
    }

    loadImage(event: any) {
        let file = event.target.files[0];

        if (!file) {
            return;
        }

        let reader = new FileReader();
        reader.readAsDataURL(file);
        // @ts-ignore
        reader.onload = (event) => fetch(event.target.result)
            .then(i => i.blob())
            .then(blob => {
                // @ts-ignore
                let urlCreator = window.URL || window.webkitURL;
                let imageUrl = urlCreator.createObjectURL(blob);

                // @ts-ignore
                let _URL = window.URL || window.webkitURL;
                let img = new Image();
                img.onload = (event) => {
                    // @ts-ignore
                    let width = event.target.width;
                    // @ts-ignore
                    let height = event.target.height;

                    this.$store.commit(SCREEN_MUTATIONS.setWidth, width);
                    this.$store.commit(SCREEN_MUTATIONS.setHeight, height);
                    this.$store.commit(SCREEN_MUTATIONS.setSrc, imageUrl);
                };

                img.src = _URL.createObjectURL(file);
            });
    }

}

