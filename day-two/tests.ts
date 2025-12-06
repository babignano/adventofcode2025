import assert from 'node:assert/strict';
import { test } from 'node:test';
import { runner, invalidId, populateIds } from "./index.ts";
import fs from 'node:fs';

let data = [];

try {
    data = fs.readFileSync('./day-two/input.txt', 'utf8').split(',');
} catch (err) {
    console.log('err', err)
    throw new Error('Error reading file synchronously');
}

test('Run validId check for invalid values', { concurrency: true }, () => {
    ['1212', '22', '1010', '1188511885', '222222', '38593859'].map((item: string) => {
        assert.equal(invalidId(item), true)
    });
    assert.equal(invalidId('1188511887'), false);
});

test('Run inbetween id generate populateIds', { concurrency: true }, () => {
    const actual = populateIds('998-1003');
    const expected = [998, 999, 1000, 1001, 1002, 1003];
    assert.deepStrictEqual(actual, expected);
});

test('Run day two part one sample input', { concurrency: true }, () => {
    const actual:number = runner(['11-22','95-115','998-1012','1188511880-1188511890','222220-222224','1698522-1698528','446443-446449','38593856-38593862','565653-565659', '824824821-824824827','2121212118-2121212124'], true);
    const expected: number = 1227775554;
    assert.equal(actual, expected);
});

test('Run day one part one real input', { concurrency: true }, () => {
    const actual:number = runner(data, true);
    const expected: number = 21139440284;
    assert.equal(actual, expected);
});

test('Run day two part two sample input', { concurrency: true }, () => {
    const actual:number = runner(['11-22','95-115','998-1012','1188511880-1188511890','222220-222224','1698522-1698528','446443-446449','38593856-38593862','565653-565659', '824824821-824824827','2121212118-2121212124']);
    const expected: number = 4174379265;
    assert.equal(actual, expected);
});

test('Run day one part two real input', { concurrency: true }, () => {
    const actual:number = runner(data);
    const expected: number = 38731915928;
    assert.equal(actual, expected);
});
