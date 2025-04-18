#!/usr/bin/env node
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { posting } from './services/posting';
import { reading } from './services/reading';
import { following } from './services/following';
import { wall } from './services/wall';

const commands = [
    { condition: (input: string) => input.includes('->'), command: posting },
    { condition: (input: string) => input.includes('follows'), command: following },
    { condition: (input: string) => input.includes('wall'), command: wall },
    { condition: (input: string) => !input.includes('->'), command: reading },
];

export async function main(): Promise<void> {
    const rl = readline.createInterface({ input, output });
    const answer: string = await rl.question('> ');
    rl.close();

    const matchedCommands = commands.find(({ condition }) => condition(answer));

    if (matchedCommands) {
        await matchedCommands.command(answer);
    } else {
        return await main();
    }
}

console.clear();
(async () => {
    await main();
})();