# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @trachea/lotide`

**Require it:**

`const _ = require('@trachea/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Used for internal testing. Checks if `arr1` and `arr2` have the same elements
* `assertEqual(a, b)`: Used for internal testing. Checks if `a ===  b`. Only works for primitive data types. 
* `assertObjectsEqual(obj1, obj2)`: Used for internal testing. Checks if the two objects: `obj1` and `obj2` have the same keys-value pairs.
* `countLetters(string)`: Takes in a `string` and returns an object where the keys each unique letter in `string` and the values are the number of occurences in `string`.
* `countOnly(arr, obj)`: Returns an objects where the keys are elements in `arr` such that the key exists in `obj` and it's value is `true` and the values are the number of occurences in `arr`. 
* `eqArrays(arr1, arr2)`: Returns true only if all the elements in `arr1` exist in `arr2` and the lenght of `arr` and `arr2` are the same.
* `eqObjects(obj1, obj2)`: Returns true only if both objects have the same number of key-value pairs and every key-value pair in `obj1` exists in `obj2`. 
* `findKey(obj, function)`: Returns the first occurence of the key in `obj` that satisfies `function`. `function` must be a callback function that returns true only if a condition is met. If no key is found, returns `undefined`.
* `findKeyByValue(obj, value)`: Returns the first occurence of the key in `obj` that has value `value`. If no key is found, returns `undefined`.
* `flatten(arr)`: Returns a new array that is contains every element in `arr` flattened.
* `head(arr)`: Returns the first element of `arr`.
* `letterPositions(string)`: Returns an object that contains each unique letter in `string` where the value is an array where the element representing the index where the key appears in `string`.
* `map(arr, function)`: Returns a new array that is the same length as `arr` and each element is the result of `function(element)`.
* `middle(arr)`: Returns an array that contains the middle value of `arr`. One value if length of `arr` is odd and two values if length of `arr` is even. If the length of `arr` is less or equal to two, then returns an empty array.
* `tail(arr)`: Returns a new array which is `arr` without it's first element.
* `takeUntil(arr, function)`: Returns an array that is all the elements in `arr` until an element satisifies `function` and `function` returns true;
* `without(sources, values)`: Returns an array that is `sources` where all occurences of any element in `values` has been removed.