import Vue from 'vue';
import Component from 'vue-class-component';
import {SCREEN_ACTIONS, SCREEN_MUTATIONS, ScreenTools} from "../../../../../store/modules/screen";
import html2canvas from 'html2canvas';
import CanvasModuleComponent from "./canvas-module/canvas-module.component";
import PointToolComponent from "./point-tool/point-tool.component";
import {abstractField} from "vue-form-generator";
import SquareToolComponent from "./square-tool/square-tool.component";

@Component({
    mixins: [abstractField],
    components: {
        'canvas-module': CanvasModuleComponent,
        'point-tool': PointToolComponent,
        'square-tool': SquareToolComponent
    }
})
export default class ImageWorkerComponent extends Vue {
    mounted() {
        document.addEventListener('paste', this.getImageFromClipboard);
    }

    destroy() {
        document.removeEventListener('paste', this.getImageFromClipboard);
    }

    // get this code from https://stackoverflow.com/questions/6333814/how-does-the-paste-image-from-clipboard-functionality-work-in-gmail-and-google-c
    getImageFromClipboard(event: ClipboardEvent) {
        if (!event || !event.clipboardData) {
            return;
        }

        var items: DataTransferItemList = event.clipboardData.items;
        for (let index in items) {
            let item: DataTransferItem = items[index];

            // @ts-ignore
            if (item.kind === 'file') {
                // @ts-ignore
                var blob = item.getAsFile();

                this.loadImageFromReader(blob);
            }
        }
    }

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

                    this.$store.dispatch(SCREEN_ACTIONS.setSrc, urlCreator.createObjectURL(blob));
                    this.$modal.show('bug-report-tool');
                });
            });
        }, 100)
    }

    loadImageFromReader(file: any) {
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
                    this.$store.dispatch(SCREEN_ACTIONS.setSrc, imageUrl);
                };

                img.src = _URL.createObjectURL(file);
            });
    }

    loadImage(event: any) {
        let file = event.target.files[0];

        if (!file) {
            return;
        }

        this.loadImageFromReader(file);
    }
}

