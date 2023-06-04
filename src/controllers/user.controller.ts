import {UserRepository} from "../models/repository/user.repository";
import {User} from "../models/interfaces/user";

export class UserController implements UserRepository {
    private readonly users: Array<User>;

    constructor() {
        this.users = new Array<User>();
    }

    create(data: User): string | User {
        if (data && !(this.users.includes(data))) {
            this.users.push(data);
            return data;
        }
        throw new Error('User not found');
    }

    getAll(): Array<User> | string {
        if (this.users.length !== 0) {
            return this.users;
        }
        return 'does not exist data ';
    }

}