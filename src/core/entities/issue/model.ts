import {Model} from "@/core/components/model";
import {IssueInterface} from "@/core/entities/issue/interface";
import {IssueMetaInterface} from "./interface";

export class Issue extends Model implements IssueInterface {
    public image: File;
    public description: string;
    public meta: IssueMetaInterface;

    constructor(data: IssueInterface) {
        super();

        this.meta = data.meta;
        this.image = data.image;
        this.description = data.description;
    }

}
