import { users } from "../db/db";
import { sanitize } from "../utils/string";

export function validWallInput(input: string) {
    const sanitizedInput = sanitize(input);
    const sanitizedInputArray = sanitizedInput.split("wall");
    const userName = sanitizedInputArray[0]?.trim() ?? '';

    if (!sanitizedInput || sanitizedInputArray.length !== 2 || !userName) {
        console.log("\x1b[31m%s\x1b[0m", `Error: Invalid format. Use 'user name wall'`);
        return false;
    }

    const user = users.find(user => user.name === userName);
    if (!user) {
        console.log("\x1b[31m%s\x1b[0m", `Error: User ${userName} does not exist.`);
        return false;
    }
    return true;
}