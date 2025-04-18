#!/usr/bin/env node
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export async function main(): Promise<void> {
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question('> ');
    rl.close();

    if (answer.includes('->')) {
        // posting()
        console.log('posting')
    } else if (answer.includes('follows')) {
        // following()
        console.log('following')
    }
    else if (answer.includes('wall')) {
        // wall()
        console.log('wall')
    }
    else if (!answer.includes('->')) {
        // reading()
        console.log('reading')
    } else {
        return await main();
    }

}

console.clear();
(async () => {
    await main();
})();