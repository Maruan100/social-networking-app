import { users, publications } from "../db/db";
import { sanitize } from "../utils/string";
import { User } from "../models/user";
import { main } from "..";
import { validWallInput } from "../validations/validateWall";

export async function wall(userName: string): Promise<void> {
    if (!validWallInput(userName)) {
        return await main();
    } 

    const sanitizedUserName = sanitize(userName.replace("wall", "").trim());
    const user = users.find(user => user.name === sanitizedUserName) as User;

    const followingUsers = user.following.map(name => name);

    const postsFromUserAndFollowings = publications.filter(publication => [user.name, ...followingUsers].includes(publication.userName)).reverse();
    const posts = postsFromUserAndFollowings.map(publication => publication.wallMessage());

    console.log("\x1b[32m%s\x1b[0m", posts.join('\n'));
    main()
}