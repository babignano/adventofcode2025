import assert from 'node:assert/strict';
import { test } from 'node:test';
import { runner } from "./index.ts";
import fs from 'node:fs';
import util from 'util';

let data:string[] = [];

try {
    data = fs.readFileSync('./day-six/input.txt', 'utf8').trim().split('\n');
} catch (err) {
    console.log('err', err)
    throw new Error('Error reading file synchronously');
}

test('Run day six part one sample input', { concurrency: true }, () => {
    const actual = runner([
    ['123', '328', '51', '64'], 
    ['45', '64', '387', '23'], 
    ['6','98','215','314'],
    ['*','+','*','+']]);
    const expected: number = 4277556;
    assert.equal(actual, expected);
});

test('Run day six part one real input', { concurrency: true }, () => {
    const input = data.map(line => line.trim().split(/\s+/));
    const actual = runner(input);
    const expected: number = 4805473544166;
    assert.equal(actual, expected);
});

test('Run day six part two sample input', { concurrency: true }, () => {
    const actual = runner([
    ['123', '328', ' 51', '64 '], 
    [' 45', '64 ', '387', '23 '], 
    ['  6', '98 ', '215', '314'],
    ['*','+','*','+']], 2);
    const expected: number = 3263827;
    assert.equal(actual, expected);
});


test('Run day six part two real input', { concurrency: true }, () => {

    // find indexes of all operators on last line
    const indexes = data[data.length - 1].split('').reduce((acc:number[], item:string, index:number) => {
        if (item !== ' ') {
            acc.push(index - 1);
        } 
        return acc;
    }, [])

    // remove the first operator as we don't want to split at the start
    indexes.shift();

    const len = data.length - 2;

    // pop off the last array of operators
    const operators = data.pop().trim().split(/\s+/);

    let splitData:string[][] = data.map(line => line.split(''));

    indexes.forEach((index) => {
        splitData = splitData.map(line => {
            line[index] = '|';
            return line;
        });
    });
    
    splitData = splitData.map(line => line.join('').split('|'));
    splitData.push(operators);

    const actual = runner(splitData, 2);
    const expected: number = 8907730960817; // That's not the right answer; your answer is too low
    assert.equal(actual, expected);
});