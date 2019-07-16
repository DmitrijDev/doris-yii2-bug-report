import {Model} from "@/core/components/model";
import {IssueInterface} from "@/core/entities/issue/interface";
import {IssueMetaInterface} from "./interface";
import {DynamicFieldInterface} from "../../../application/components/form-generator/fields/dynamic-fields-list/dynamic-fields-list.component";

export class Issue extends Model implements IssueInterface {
    public image: File;
    public description: string;
    public errors?: { [key: string]: DynamicFieldInterface };
    public meta: IssueMetaInterface;

    constructor(data: IssueInterface) {
        super();

        this.meta = data.meta;
        this.image = data.image;
        this.description = data.description;

        if (data.errors) {
            this.errors = data.errors;
        }
    }
}
