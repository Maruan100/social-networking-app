import { timeAgo } from "../utils/time";
import { capitalize } from "../utils/string";
export class Publication {
    userName: string;
    text: string;
    createdAt: Date;

    constructor(userName: string, text: string) {
        this.userName = userName;
        this.text = text;
        this.createdAt = new Date();
    }

    message(): string {
        return `${this.text} (${timeAgo(this.createdAt)})`;
    }
    
    wallMessage(): string {
        return `${capitalize(this.userName)} - ${this.text} (${timeAgo(this.createdAt)})`;
    }
}
