import assert from 'node:assert/strict';
import { test } from 'node:test';
import { runner } from "./index.ts";
import fs from 'node:fs';

let data = [];

try {
    data = fs.readFileSync('./day-three/input.txt', 'utf8').split('\n');
} catch (err) {
    console.log('err', err)
    throw new Error('Error reading file synchronously');
}

test('Run day three part one sample input', { concurrency: true }, () => {
    const actual:number = runner([
        '987654321111111',
        '811111111111119',
        '234234234234278',
        '818181911112111'
    ], 2);
    const expected: number = 357;
    assert.equal(actual, expected);
});

test('Run day three part two sample input', { concurrency: true }, () => {
    const actual:number = runner([
        '987654321111111',
        '811111111111119',
        '234234234234278',
        '818181911112111',
    ], 12);
    const expected: number = 3121910778619;
    assert.equal(actual, expected);
});

test('Run day three part one real input', { concurrency: true }, () => {
    const actual:number = runner(data, 2);
    const expected: number = 17113;
    assert.equal(actual, expected);
});

test('Run day three part two real input', { concurrency: true }, () => {
    const actual:number = runner(data, 12); // 199999999997113: That's not the right answer; your answer is too high
    const expected: number = 169709990062889;
    assert.equal(actual, expected);
});
