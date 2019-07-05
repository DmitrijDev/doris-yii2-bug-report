import {Model} from '@/core/components/model';

export abstract class Collection {

    protected entities: Model[] = [];

    public setEntity(entity: object): void {
        this.entities.push(this.createModel(entity));
    }

    public setEntities(entities: object[]): void {
        this.entities = this.entities.map((entity: object) => {
            return this.createModel(entity);
        });
    }

    public isEmpty() {
        return !this.entities.length;
    }

    public getEntities(): Model[] {
        return this.entities;
    }

    protected abstract createModel(data: object): Model;
}
