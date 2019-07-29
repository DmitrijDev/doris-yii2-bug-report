import {Model} from '@/core/components/model';
import CommentInterface from './interface';

export class Comment extends Model implements CommentInterface {
    public text: string;
    public dateAdded: string;
    public fileUrl: string;

    constructor(data: CommentInterface) {
        super();

        this.text = data.text;
        this.dateAdded = data.dateAdded;
        this.fileUrl = data.fileUrl;
    }
}
