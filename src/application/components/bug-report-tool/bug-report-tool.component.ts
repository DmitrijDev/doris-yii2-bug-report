import Vue from 'vue';
import Component from 'vue-class-component';
import {SchemaDefaultField, Schema} from "../form-generator/settings/interfaces";
import {FORM_FIELDS} from "../form-generator/settings/fields";
import {detect} from "detect-browser";
import {IssueInterface} from "../../../core/entities/issue/interface";
import {Issue} from "../../../core/entities/issue/model";
import {IssueMapper} from "../../../core/entities/issue/mapper";
import {ErrorResponseInterface} from '@/core/services/request';
import {ImageSquare} from "../../../store/modules/screen";
import {Watch} from 'vue-property-decorator';
import {DynamicFieldInterface} from '../form-generator/fields/dynamic-fields-list/dynamic-fields-list.component';

export interface BugReportModel {
    description: string,
    errors: DynamicFieldInterface[]
}

@Component({})
export default class BugReportToolComponent extends Vue {
    public formError: string = '';
    public count: number = 0;
    public loading: boolean = false;
    public schema?: Schema;
    public model: BugReportModel = {
        description: '',
        errors: []
    }

    get screenHistorySquares(): ImageSquare[] {
        return this.$store.getters.getScreenHistorySquares;
    }

    @Watch('screenHistorySquares') updateSchema() {
        this.generateSchema();
    }

    beforeMount() {
        this.generateSchema();
    }

    generateSchema() {
        let descriptionFields = [
            FORM_FIELDS.description('description', {
                label: 'Описание ошибки',
                placeholder: 'Описание ошибки'
            }),
            FORM_FIELDS.submit(this.submitForm)
        ];

        if (this.screenHistorySquares.length) {
            descriptionFields.unshift(FORM_FIELDS.dynamicFieldList('errors', this.screenHistorySquares.length));
        }

        this.schema = <Schema>{
            groups: [
                {
                    legend: "Image",
                    styleClasses: 'form-custom-group image-worker',
                    fields: [
                        FORM_FIELDS.imageWorker()
                    ]
                },
                {
                    legend: "Description",
                    styleClasses: 'form-custom-group description',
                    fields: descriptionFields
                }
            ],
            loading: false
        }

        this.$forceUpdate();
    }

    submitForm() {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('bg-canvas');

        if (!canvas) {
            return;
        }

        this.loading = true;

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

            console.log(this.model.errors);
            if (this.model.errors.length) {
                let errors: { [key: string]: DynamicFieldInterface } = {};

                this.model.errors.forEach((error: DynamicFieldInterface) => {
                    errors[error.index.toString()] = error;
                })

                console.log(errors);
                data.errors = errors;
            }

            let model = new Issue(data);
            let mapper = new IssueMapper();

            mapper.create(model).then((response: any) => {
                this.$modal.hide('bug-report-tool');

                this.$notify({
                    group: 'success-message',
                    type: 'success',
                    title: 'Успех!',
                    text: `Правка "${this.model.description.trim()}" была успешно сохранена!`
                });

                this.loading = false;
            }, (error: ErrorResponseInterface) => {
                this.formError = error.message;
                this.loading = false;
            });
        });
    }
}
