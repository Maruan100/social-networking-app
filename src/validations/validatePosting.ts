import { sanitize } from "../utils/string";

export function validPostingInput(input: string): boolean {
    const sanitizedInput = sanitize(input);
    const sanitizedInputArray = sanitizedInput.split("->");
    const [userName, text] = sanitizedInputArray.map(str => str.trim());

    if (!sanitizedInput || sanitizedInputArray.length !== 2 || !userName || !text) {
        console.log("\x1b[31m%s\x1b[0m", `Error: Invalid format. Use 'user name -> text'`);
        return false;
    }

    return true;
}