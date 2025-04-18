export class User {
    name: string;
    following: Array<string>;

    constructor(name: string) {
        this.name = name;
        this.following = [];
    }
}