import {RoleEnum} from "../enums/role";
import {Aggregate} from "./aggregate";

export interface User extends Aggregate {
    name: string;
    document: string;
    role: RoleEnum,
}