import { main } from "..";
import { validFollowingInput } from "../validations/validateFollowing";

export async function following(follow: string): Promise<void> {
    console.log('following');
    if (!validFollowingInput(follow)) {
        return await main();
    }
    
}