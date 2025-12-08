import assert from 'node:assert/strict';
import { test } from 'node:test';
import { runner } from "./index.ts";
import fs from 'node:fs';

let data = [];

try {
    data = fs.readFileSync('./day-four/input.txt', 'utf8').split('\n');
} catch (err) {
    console.log('err', err)
    throw new Error('Error reading file synchronously');
}

test('Run day four part one sample input', { concurrency: true }, () => {
    const actual:number = runner([
        '..@@.@@@@.',
        '@@@.@.@.@@',
        '@@@@@.@.@@',
        '@.@@@@..@.',
        '@@.@@@@.@@',
        '.@@@@@@@.@',
        '.@.@.@.@@@',
        '@.@@@.@@@@',
        '.@@@@@@@@.',
        '@.@.@@@.@.',
    ]);
    const expected: number = 13;
    assert.equal(actual, expected);
});

test('Run day four part one real input', { concurrency: true }, () => {
    const actual:number = runner(data);
    const expected: number = 1363;
    assert.equal(actual, expected);
});

test('Run day four part two sample input', { concurrency: true }, () => {
    const actual:number = runner([
        '..@@.@@@@.',
        '@@@.@.@.@@',
        '@@@@@.@.@@',
        '@.@@@@..@.',
        '@@.@@@@.@@',
        '.@@@@@@@.@',
        '.@.@.@.@@@',
        '@.@@@.@@@@',
        '.@@@@@@@@.',
        '@.@.@@@.@.',
    ], true);
    const expected: number = 43;
    assert.equal(actual, expected);
});

test('Run day four part two real input', { concurrency: true }, () => {
    const actual:number = runner(data, true);
    const expected: number = 8184;
    assert.equal(actual, expected);
});
