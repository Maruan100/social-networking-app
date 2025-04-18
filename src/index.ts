#!/usr/bin/env node
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { posting } from './services/posting';
import { reading } from './services/reading';
import { following } from './services/following';
import { wall } from './services/wall';

export async function main(): Promise<void> {
    const rl = readline.createInterface({ input, output });
    const answer: string = await rl.question('> ');
    rl.close();

    if (answer.includes('->')) {
        await posting(answer)
    } else if (answer.includes('follows')) {
        await following(answer)
    }
    else if (answer.includes('wall')) {
        await wall(answer)
    }
    else if (!answer.includes('->')) {
        await reading(answer)
    } else {
        return await main();
    }

}

console.clear();
(async () => {
    await main();
})();