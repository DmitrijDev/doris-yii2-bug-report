import {Collection} from '@/core/components/collection';
import CommentInterface from './interface';
import {Comment} from './model';

export class CommentCollection extends Collection {

    protected createModel(data: CommentInterface): Comment {
        return new Comment(data);
    }
}
