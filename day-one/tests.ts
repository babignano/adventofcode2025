import assert from 'node:assert/strict';
import { test } from 'node:test';
import runner from "./index.ts";

const instructions = ['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82'];

test('Run day one sample', { concurrency: true }, () => {
    const actual:number = runner(instructions);
    const expected: number = 3;
    assert.equal(actual, expected);
});