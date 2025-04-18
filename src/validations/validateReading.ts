import { users } from "../db/db";
import { sanitize } from "../utils/string";

export function validReadingInput(input: string): boolean {
    const sanitizedInput = sanitize(input);
    const userName = sanitizedInput.trim();

    if (!sanitizedInput || !userName) {
        console.log("\x1b[31m%s\x1b[0m", `Error: Invalid format. Use 'user name'`);
        return false;
    }

    const user = users.find(user => user.name === userName);
    if (!user) {
        console.log("\x1b[31m%s\x1b[0m", `Error: User ${userName} does not exist.`);
        return false;
    }

    return true;
}