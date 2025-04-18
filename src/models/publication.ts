import { timeAgo } from "../utils/time";
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
}
