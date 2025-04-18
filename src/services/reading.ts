import { main } from "..";
import { validReadingInput } from "../validations/validateReading";
import { sanitize } from "../utils/string";
import { publications } from "../db/db";

export async function reading(userName: string): Promise<void> {
    if (!validReadingInput(userName)) {
        return await main();
    }

    const sanitizedUserName = sanitize(userName);
    const matchingPublications = publications
        .filter((publication) => publication.userName === sanitizedUserName)
        .map((publication) => publication.message()).reverse();

    console.log("\x1b[32m%s\x1b[0m", matchingPublications.join('\n'));
    main()
}