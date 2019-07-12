import Vue from 'vue';
import Component from 'vue-class-component';
import ImageWorkerComponent from "../image-worker/image-worker.component";
import {SchemaDefaultField, Schema} from "../form-generator/settings/interfaces";
import {FORM_FIELDS} from "../form-generator/settings/fields";
import {detect} from "detect-browser";
import {IssueInterface} from "../../../core/entities/issue/interface";
import {Issue} from "../../../core/entities/issue/model";
import {IssueMapper} from "../../../core/entities/issue/mapper";

interface BugReportModel {
    description: string,
    errors: string[]
}

@Component({
    components: {
        'image-worker': ImageWorkerComponent
    }
})
export default class BugReportToolComponent extends Vue {
    public formError: string = '';
    public count: number = 0;
    public schema?: Schema;
    public model: BugReportModel = {
        description: '',
        errors: []
    }

    beforeMount() {
        this.generateSchema();
    }

    generateSchema() {
        this.schema = {
            fields: [
                // FORM_FIELDS.errorsList('errors', this.count),
                FORM_FIELDS.description('description', {
                    label: 'Описание ошибки',
                    placeholder: 'Описание ошибки'
                }),
                FORM_FIELDS.submit(this.submitForm),
            ],
            loading: false
        }
    }

    submitForm() {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('bg-canvas');

        if (!canvas) {
            return;
        }

        canvas.toBlob((blob: Blob | null) => {
            const browser = detect();

            if (!browser || !blob) {
                return;
            }

            let file = new File([blob], 'image.png');

            let data: IssueInterface = {
                description: this.model.description,
                image: file,
                meta: {
                    href: window.location.href,
                    viewportHeight: window.innerHeight,
                    viewportWidth: window.innerWidth,
                    scrollX: window.scrollX,
                    scrollY: window.scrollY,
                    browser: browser.name,
                    browserVersion: browser.version,
                    os: browser.os,
                    source: window.navigator.userAgent
                }
            }

            let model = new Issue(data);
            let mapper = new IssueMapper();

            mapper.create(model).then((response: any) => {
                console.log(response)
            });
        });
    }
}
