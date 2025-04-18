import { main } from "..";
import { validFollowingInput } from "../validations/validateFollowing";
import { users } from "../db/db";
import { User } from "../models/user";
import { sanitize } from "../utils/string";

export async function following(follow: string): Promise<void> {
    if (!validFollowingInput(follow)) {
        return await main();
    }

    const [userName, userToFollow] = follow.split("follows").map(str => str.trim());
    const sanitizedUserName = sanitize(userName as string);

    const user = users.find(user => user.name === sanitizedUserName) as User;
    user.followUser(userToFollow as string);
    await main()
    
}