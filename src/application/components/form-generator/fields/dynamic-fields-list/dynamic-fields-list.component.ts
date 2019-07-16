import Vue from 'vue';
import Component from 'vue-class-component';
import {abstractField} from "vue-form-generator";
import {Watch} from 'vue-property-decorator';

export interface DynamicFieldInterface {
    value: string
    index: number
}

@Component({
    mixins: [abstractField],
})
export default class DynamicFieldsListComponent extends Vue {

    public fields: { index: number, label: string }[] = [];

    @Watch('schema') countUpdateS() {
        this.getFields();
    }

    changeValue(value: string, index: number) {
        let newValue: DynamicFieldInterface = {value: value, index: index};
        // @ts-ignore
        let allValues: DynamicFieldInterface[] = Object.assign([], this.value);

        let indexOfValue = allValues.findIndex((value: any) => value.index === index);

        if (indexOfValue !== -1) {
            allValues.splice(indexOfValue, 1)
        }
        allValues.push(newValue);


        // @ts-ignore
        this.value = allValues;

        this.$props.model[this.$props.schema.model] = allValues;
    }

    mounted() {
        this.getFields();
    }

    getFields() {
        let fields = [];

        for (let i = 0; i < this.$props.schema.count; i++) {
            fields.push({
                index: i,
                label: `${this.$props.schema.text} №${i + 1}`
            })
        }

        this.fields = fields;
    }
}

