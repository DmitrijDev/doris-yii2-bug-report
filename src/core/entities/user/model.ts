import {Model} from '@/core/components/model';
import {UserInterface} from './interface';

export class User extends Model implements UserInterface {

    public id: number;
    public email: string;
    public name: string;

    constructor(data: UserInterface) {
        super();

        this.id = data.id;
        this.email = data.email;
        this.name = data.name;
    }
}
