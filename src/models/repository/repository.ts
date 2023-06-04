import {Aggregate} from "../interfaces/aggregate";

export interface Repository<T extends Aggregate> {
    create(data: T): string | T;

    getAll(): Array<T> | string;
}