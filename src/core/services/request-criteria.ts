import * as _ from "lodash";

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
	condition?: { [fieldName: string]: Array<number | string | boolean> };
	mixins?: [];
	order?: {
		field: string;
		type: ORDER_TYPES;
	} | 'random';
	groupBy?: String[];

	constructor(data: RequestCriteriaInterface) {
		_.each(data, (value: any, field: string) => {
			this.setProp(field, value);
		});
	}

	setProp(name: string, value: any) {
		if (_.isUndefined(value)) {
			return;
		}

		_.set(this, name, value);
	}

	getProps() {
		let props = {};

		if (!_.isUndefined(this.expand)) {
			_.set(props, 'expand', this.expand.join(','));
		}

		if (!_.isUndefined(this.page)) {
			_.set(props, 'page', this.page);
		}

		if (!_.isUndefined(this.mixins)) {
			_.set(props, 'mixins', this.mixins.join(','));
		}

		if (!_.isUndefined(this.groupBy)) {
			_.set(props, 'groupBy', this.groupBy.join(','));
		}

		if (!_.isUndefined(this.perPage)) {
			_.set(props, 'per-page', this.perPage);
		}

		if (!_.isUndefined(this.order)) {
			let value = '';

			if (this.order === 'random') {
				value = this.order;
			} else {
				let sign = this.order.type === ORDER_TYPES.ASC ? '' : '-';
				value = sign + this.order.field
			}

			_.set(props, 'sort', value);
		}

		if (this.condition && Object.keys(this.condition).length) {
			let condition = {};

			_.each(this.condition, (value: Array<string | number | boolean>, field: string) => {
				_.set(condition, field, value);
			});

			_.set(props, 'filter', condition);
		}

		return props;
	}
}
