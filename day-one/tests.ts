import assert from 'node:assert/strict';
import { test } from 'node:test';
import runner from "./index.ts";
import fs from 'node:fs';

test('Run day one sample input', { concurrency: true }, () => {
    const actual:number = runner(['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82'], 50);
    const expected: number = 3;
    assert.equal(actual, expected);
});

test('Run day one real input', { concurrency: true }, () => {

    let data = [];

    try {
        data = fs.readFileSync('./day-one/input.txt', 'utf8').split('\n');
    } catch (err) {
        console.log('err', err)
        throw new Error('Error reading file synchronously');
    }
    const actual:number = runner(data, 50);
    const expected: number = 1081;
    assert.equal(actual, expected);
});
