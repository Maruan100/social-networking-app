import { Publication } from "../models/publication";
import { publications, users } from "../db/db";
import { User } from "../models/user";
import { sanitize } from "../utils/string";
import { main } from "..";
import { validPostingInput } from "../validations/validatePosting";

export async function posting(post: string): Promise<void> {
    if (!validPostingInput(post)) {
        return await main();
    }
    
    const [userName, text] = post.split(" -> ");
    const sanitizedUserName = sanitize(userName as string);

    const user = new User(sanitizedUserName);
    const publication = new Publication(sanitizedUserName, text as string);

    users.push(user);
    publications.push(publication);

    console.log("\x1b[32m%s\x1b[0m", publication.message());
    await main();
}