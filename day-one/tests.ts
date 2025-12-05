import assert from 'node:assert/strict';
import { test } from 'node:test';
import runner from "./index.ts";
import fs from 'node:fs';

let data = [];

try {
    data = fs.readFileSync('./day-one/input.txt', 'utf8').split('\n');
} catch (err) {
    console.log('err', err)
    throw new Error('Error reading file synchronously');
}

test('Run day one part one sample input', { concurrency: true }, () => {
    const actual:number = runner(['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82'], 50);
    const expected: number = 3;
    assert.equal(actual, expected);
});

test('Run day one part one real input', { concurrency: true }, () => {   
    const actual:number = runner(data, 50);
    const expected: number = 1081;
    assert.equal(actual, expected);
});

test('Run day one part two sample input', { concurrency: true }, () => {
    const actual:number = runner(['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82'], 50, true);
    const expected: number = 6;
    assert.equal(actual, expected);
});

test('Run day one part two real input', { concurrency: true }, () => {
    const actual:number = runner(data, 50, true);
    const expected: number = 6689;
    assert.equal(actual, expected);
});
