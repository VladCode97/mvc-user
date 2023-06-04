import {UserRepository} from "../models/repository/user.repository";
import {User} from "../models/interfaces/user";

export class UserView implements UserRepository {
    constructor(private readonly userRepository: UserRepository) {
    }

    create(data: User): string | User {
        return this.userRepository.create(data);
    }

    getAll(): Array<User> | string {
        return this.userRepository.getAll();
    }

}