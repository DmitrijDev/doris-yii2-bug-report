import {Mapper} from '@/core/components/mapper';
import Request from '@/core/services/request';
import {Comment} from "./model";
import CommentInterface from "./interface";
import {CommentCollection} from "./collection";

export class CommentMapper extends Mapper {

    protected action = 'comment';

    protected createModel(data: CommentInterface): Comment {
        return new Comment(data);
    }

    protected createCollection(data: CommentInterface[]): CommentCollection {
        const collection: CommentCollection = new CommentCollection();
        collection.setEntities(data);

        return collection;
    }
}
