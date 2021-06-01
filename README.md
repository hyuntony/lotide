# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hyuntony/lotide`

**Require it:**

`const _ = require('@hyuntony/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)` : returns the first(head) element of the array
* `tail(array)` : returns the tail(all elements execept the first) of the array
* `middle(array)` : returns the middle element(s) of the array
* `assertArraysEqual(actual, expected)` : checks if two arrays are equal and outputs a message
* `assertEqual(actual, expected)` : checks if two primitive data are equal and outputs a message
* `assertObjectsEqual(actual expected)` : checks if two objects are equal and outputs a message
* `countLetters(string)` : returns a object with count of each charater
* `countOnly(array, itemsToCount)` : returns a object with the count of items
* `eqArrays(actual, expected)` : returns true if arrays are equal
* `eqObjects()` : returns true if objects are equal
* `findKey(object, callback)` : returns key for object according to the callback function
* `findKeyByValue(object, value)` : returns key with its value data
* `flatten(array)` : returns the array without nested elements in the main array
* `letterPositions(string)` : returns object with key value letter:index
* `map(array, callback)` : returns new array with callback applied
* `takeUntil(array, callback)` : returns reduced array upto the callback value
* `without(array, itemsToRemove)` : returns reduced array with elements specified removed