import assert from 'node:assert/strict';
import { test } from 'node:test';
import { runner } from "./index.ts";
import fs from 'node:fs';

let data = [];

try {
    data = fs.readFileSync('./day-five/input.txt', 'utf8').split('\n\n');
} catch (err) {
    console.log('err', err)
    throw new Error('Error reading file synchronously');
}

test('Run day four part one sample input', { concurrency: true }, () => {
    const actual = runner([
        '3-5',
        '10-14',
        '16-20',
        '12-18'], [
        '1',
        '5',
        '8',
        '11',
        '11',
        '17',
        '32'
    ]);
    const expected: number = 3;
    assert.equal(actual, expected);
});

test('Run day four part one real input', { concurrency: true }, () => {
    const actual = runner(data[0].split('\n'), data[1].split('\n'));
    const expected: number = 782;
    assert.equal(actual, expected);
});

test('Run day four part two sample input', { concurrency: true }, () => {
    const actual = runner([
        '3-5',
        '5-5',
        '10-14',
        '10-14',
        '12-18',
        '16-20'], [
        '1',
        '5',
        '8',
        '11',
        '11',
        '17',
        '32'
    ], 2);
    const expected: number = 14;
    assert.equal(actual, expected);
});

test('Run day four part two part partial real input 1', { concurrency: true }, () => {
    const actual = runner([
        '271989803577321-279602339477609',
        '424856501898112-428035763754024',
        '553860524271401-558642119641208',
        '207805184611983-207805184611983',
        '259193819454825-259579144927094',
        '531011436262632-532730188496897',
        '324862150905536-325308627426439',
        '544360641242438-547252096319631',
        '202013426255968-207805184611982',
        '329605467972299-330335188096945',
        '435210058526292-440885261025799',
        '3039566344631-8780284248360',
        '282056648700908-282056648700908',
        '260203725552350-260755039702968',
        '271989803577321-279602339477609',
        '18242858078610-18638426261426',
        '324862150905536-325308627426439',
        '324862150905536-325044312776734',
        '484733718753429-491106133143809',
        '257280321419896-257561344188619'], [
        '1',
        '5',
        '8',
        '11',
        '11',
        '17',
        '32'
    ], 2);
    const expected: number = 46553120807087;
    assert.equal(actual, expected);
});

test('Run day four part two part partial real input 2', { concurrency: true }, () => {
    const actual = runner([
        '259579144927094-259887082783455',
        '525437082250281-526791498069427',
        '65132562924432-66605592627596',
        '323558917364514-324075416509607',
        '406193608821034-408168799055066',
        '328183851347826-328640174740800',
        '153799112188589-159057230596012',
        '528672148056836-530237898465989',
        '258398126590623-259193819454825',
        '330335188096945-330571374271893',
        '293745406346302-296134734367662',
        '233417222089379-236454326007261',
        '68887081363771-70179545208574',
        '196203070850441-197671936927213',
        '83601830902361-88811433216491',
        '253698285888197-254156336938296',
        '410028326377766-411872120273854',
        '540204623759364-540204623759364',
        '477624672045619-481587433161886',
        '527641323687467-529170439253009'], [
        '1',
        '5',
        '8',
        '11',
        '11',
        '17',
        '32'
    ], 2);
    const expected: number = 34631938613285;
    assert.equal(actual, expected);
});

test('Run day four part two real input', { concurrency: true }, () => {
    const actual = runner(data[0].split('\n'), data[1].split('\n'), 2);
    const expected: number = 353863745078671;
    assert.equal(actual, expected);
});

