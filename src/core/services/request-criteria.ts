export enum ORDER_TYPES {
    DESC = 'desc',
    ASC = 'asc'
}

export interface RequestCriteriaInterface {
    perPage?: number;
    expand?: String[];
    page?: number;
    condition?: { [fieldName: string]: Array<number | string | boolean> | null };
    mixins?: String[];
    order?: {
        field: string;
        type: ORDER_TYPES;
    } | 'random';
    groupBy?: String[]
}

export class RequestCriteria implements RequestCriteriaInterface {
    perPage?: number;
    page?: number;
    expand?: String[];
    condition?: { [fieldName: string]: Array<number | string | boolean> | null };
    mixins?: String[];
    order?: {
        field: string;
        type: ORDER_TYPES;
    } | 'random';
    groupBy?: String[];

    constructor(data: RequestCriteriaInterface) {
        if (data.perPage) {
            this.perPage = data.perPage;
        }
        if (data.page) {
            this.page = data.page;
        }
        if (data.expand) {
            this.expand = data.expand;
        }
        if (data.condition) {
            this.condition = data.condition;
        }
        if (data.mixins) {
            this.mixins = data.mixins;
        }
        if (data.order) {
            this.order = data.order;
        }
        if (data.groupBy) {
            this.groupBy = data.groupBy;
        }
    }

    getProps() {
        let props = {
            expand: '',
            page: 0,
            mixins: '',
            groupBy: '',
            perPage: 0,
            sort: '',
            filter: {}
        };

        if (this.expand) {
            props.expand = this.expand.join(',');
        }

        if (this.page) {
            props.page = this.page;
        }

        if (this.mixins) {
            props.mixins = this.mixins.join(',');
        }

        if (this.groupBy) {
            props.groupBy = this.groupBy.join(',');
        }

        if (this.perPage) {
            props.perPage = this.perPage;
        }

        if (this.order) {
            let value = '';


            if (this.order === 'random') {
                value = this.order;
            } else {
                let sign = this.order.type === ORDER_TYPES.ASC ? '' : '-';
                value = sign + this.order.field
            }

            props.sort = value;
        }


        if (this.condition && Object.keys(this.condition).length) {
            props.filter = this.condition;
        }

        return props;
    }
}
