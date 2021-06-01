"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(data) {
    return data === true;
}

function isFalse(data) {
    return data === false;
}

function not(input) {
    return !input;
}

function addOne(number) {
    return Number(number) + 1;
}

function isEven(number) {
    if (typeof number != 'number' && typeof number != 'string') {
        return false;
    }
    return number % 2 == 0;
}

function isIdentical(value0, value1) {
    return value0 === value1;
}

function isEqual(value0, value1) {
    return value0 == value1;
}

function or(input0, input1) {
    return input0 || input1;
}

function and(input0, input1) {
    return input0 && input1;
}