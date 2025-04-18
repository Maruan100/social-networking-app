import { main } from "..";
import { validReadingInput } from "../validations/validateReading";

export async function reading(userName: string): Promise<void> {
    console.log('reading')
    if (!validReadingInput(userName)) {
        return await main();
    }
}