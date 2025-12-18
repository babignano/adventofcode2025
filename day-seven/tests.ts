import assert from 'node:assert/strict';
import { test } from 'node:test';
import { runner } from "./index.ts";
import fs from 'node:fs';
import util from 'util';

let data:string[] = [];

try {
    data = fs.readFileSync('./day-seven/input.txt', 'utf8').trim().split('\n');
} catch (err) {
    console.log('err', err)
    throw new Error('Error reading file synchronously');
}

test('Run day seven part one sample input', { concurrency: true }, () => {
    const sample:string[][]= [
        '.......S.......',
        '...............',
        '.......^.......',
        '...............',
        '......^.^......',
        '...............',
        '.....^.^.^.....',
        '...............',
        '....^.^...^....',
        '...............',
        '...^.^...^.^...',
        '...............',
        '..^...^.....^..',
        '...............',
        '.^.^.^.^.^...^.',
        '...............'
    ].map(line => line.split(''))
    const actual = runner(sample);
    const expected: number = 21;
    assert.equal(actual, expected);
});

test('Run day seven part two sample input', { concurrency: true }, () => {
    const sample:string[][]= [
        '.......S.......',
        '...............',
        '.......^.......',
        '...............',
        '......^.^......',
        '...............',
        '.....^.^.^.....',
        '...............',
        '....^.^...^....',
        '...............',
        '...^.^...^.^...',
        '...............',
        '..^...^.....^..',
        '...............',
        '.^.^.^.^.^...^.',
        '...............'
    ].map(line => line.split(''))
    const actual = runner(sample, 2);
    const expected: number = 40;
    assert.equal(actual, expected);
});

test('Run day seven part one real input', { concurrency: true }, () => {
    const actual = runner(data.map(line => line.split('')));
    const expected: number = 1698;
    assert.equal(actual, expected);
});


test('Run day seven part two real input', { concurrency: true }, () => {
    const actual = runner(data.map(line => line.split('')), 2);
    const expected: number = 95408386769474;
    assert.equal(actual, expected);
});
