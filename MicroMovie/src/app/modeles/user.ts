import _user from './user.json';

export interface User {
    id : number;
    nom : string;
    email : string;
}

export const users = _user as User[];