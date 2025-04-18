import { sanitize, capitalize } from "../utils/string";
export class User {
    name: string;
    following: Array<string>;

    constructor(name: string) {
        this.name = name.trim().toLowerCase();
        this.following = [];
    }

    followUser(userToFollow: string): void {
        this.following.push(sanitize(userToFollow));
        console.log(`${capitalize(this.name)} is now following ${capitalize(userToFollow)}`);
    }
}