/** @module Main */

/**
    @constant
    @type {string}
    @default
*/

const greeting = 'Hello';

/**
* Represent the default location city name
* @constant
* @type {string}
* @default
*/
const location = 'Chicago';

/**
* Represent the add function
* @function addTwo
* @param {number} num - The number to which add 2.
* @returns {number}
*/

var addTwo = function(num) {
  return num + 2;
}

/**
 * Represents a book.
 * @class
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
 class Book {
   constructor(title, author) {
     this.title = title;
     this.author = author;
   }
 }

/**
* Represent the return word function
* @deprecated since version 2.0
* @function returnWord
* @param {string} word - The word it has to return.
* @returns {string}
*/

var returnWord = function(word) {
  return word;
}
