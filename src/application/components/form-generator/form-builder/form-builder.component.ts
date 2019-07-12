import Vue from 'vue';
import Component from 'vue-class-component';
import {FORM_FIELDS} from '@/application/components/form-generator/settings/fields';
import {Watch} from 'vue-property-decorator';

@Component({
    props: {
        schema: Object,
        model: Object,
        formOptions: {
            type: Object,
            default: () => {
                return FORM_FIELDS.options();
            },
        },
        formError: {
            type: String,
            default: '',
        },
    },
    computed: {
        formSchema() {
            const schema = Object.assign({}, this.$props.schema);
            const button = schema.fields.find((field: any) => {
                return field.type === 'submit';
            });

            if (button) {
                this.$data.button = button;

                schema.fields.filter((field: any) => {
                    return field.type !== 'submit';
                });
            }

            if (schema.fields) {
                schema.fields.push({
                    type: 'submit',
                    buttonText: 'Submit',
                    validateBeforeSubmit: true,
                });
            }

            return this.$props.schema;
        },
    },
})
export default class FormBuilderComponent extends Vue {

    @Watch('$props.formError')
    public formErrorChange() {
        this.$data.isTouched = false;
    }

    data() {
        return {
            button: null,
            isTouched: false
        }
    }

    public submit() {
        // @ts-ignore
        if (this.$refs.form.validate()) {
            this.$data.isTouched = false;
            this.$data.button.submit();
        }
    }
}

