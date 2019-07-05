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
            // todo FIX THIS CODE

            // const schema = _.cloneDeep(this.$props.schema);
            // const button = _.find(schema.fields, (field: any) => {
            //     return field.type === 'submit';
            // });
            //
            // if (button) {
            //     this.$data.button = button;
            //
            //     _.remove(schema.fields, (field: any) => {
            //         return field.type === 'submit';
            //     });
            //
            // }
            //
            // if (schema.fields) {
            //     schema.fields.push({
            //         type: 'submit',
            //         buttonText: 'Submit',
            //         validateBeforeSubmit: true,
            //     });
            // }

            return this.$props.schema;
        },
    },
})
export default class FormBuilderComponent extends Vue {
    public button: any;
    public isTouched: boolean = false;

    @Watch('$props.formError')
    public formErrorChange() {
        this.$data.isTouched = false;
    }

    public submit() {
        // @ts-ignore
        if (this.$refs.form.validate()) {
            this.isTouched = false;
            this.button.submit();
        }
    }
}

