import { users } from "../db/db";
import { sanitize } from "../utils/string";

export function validFollowingInput(input: string) {
    const sanitizedInput = sanitize(input);
    const sanitizedInputArray = sanitizedInput.split("follows");
    const [userName, userToFollow] = sanitizedInputArray.map(str => str.trim());

    if (!sanitizedInput || sanitizedInputArray.length !== 2 || !userName || !userToFollow) {
        console.log("\x1b[31m%s\x1b[0m", `Error: Invalid format. Use 'user name follows user to follow'`);
        return false;
    }

    const user = users.find(user => user.name === userName);
    if (!user) {
        console.log("\x1b[31m%s\x1b[0m", `Error: User ${userName} does not exist.`);
        return false;
    }

    const userToFollowInstance = users.find(user => user.name === userToFollow);
    if (!userToFollowInstance) {
        console.log("\x1b[31m%s\x1b[0m", `Error: User ${userToFollow} does not exist.`);
        return false;
    }

    return true;
}