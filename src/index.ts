#!/usr/bin/env node
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { posting } from './services/posting';
import { reading } from './services/reading';

export async function main(): Promise<void> {
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question('> ');
    rl.close();

    if (answer.includes('->')) {
        await posting(answer)
    } else if (answer.includes('follows')) {
        // following()
        console.log('following')
    }
    else if (answer.includes('wall')) {
        // wall()
        console.log('wall')
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