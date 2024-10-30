/*
Fun with ES6 Classes #6 - Fake Files (Basic)
Kata and Series Overview

In Kata #1-4 in this series, we learned the fundamentals and features of ES6 classes including ES6 class syntax, classical inheritance in ES6 (as opposed to prototypal inheritance in all previous versions of ECMAScript/Javascript), getters and setters. In Kata #5 of this Series we began to apply our knowledge of ES6 classes to solve the challenge, but the challenge was still a bit Codecademy-like (traning level code) and did not resemble a real world application. Therefore, in this Kata of the series, we are going to apply our knowledge of ES6 class syntax and features in a semi-real world application.
Task

You will be defining a class File (ES6 syntax please :) ) with the following properties and methods:
Properties

    fullName
    filename
    extension

Methods

    getContents()
    write(str)
    gets()
    getc()

Note regarding filenames

For the purposes of this Kata, all filenames used in this Kata will be valid filenames. Valid filenames are summarized as follows:

    Contains a filename and extension (e.g. LICENSE.txt is a valid filename, LICENSE is not)
Filename contains only alphanumeric characters (both uppercase and lowercase), underscores, spaces and/or dots (e.g. index.php, class.phptester.php, alpha beta.gamma_delta01.complicatedExample.txt are all valid filenames). Edge cases will not be considered (e.g. successive dots - Hello World..txt - will not appear in the test cases)
Extension contains only lowercase alphanumeric characters (e.g. txt, php, php3 are all valid)

Note regarding file content

All file content will be valid. In this Kata, valid file content may include alphanumeric characters (uppercase or lowercase), underscores, ordinary whitespace, punctuation or mathematical symbols, in which each line will be separated from the next by a newline character ("\n"). There will not be tabs or other whitespace/newline characters other than "\s" (spacebar) or "\n" and the contents of any file will not start or end with a newline. You may also assume that when the tests use the write(str) method, the string str will not contain newline characters itself.
*/

class File {
    constructor(fullName, contents) {
        this._fullName = fullName;
        this._contents = contents;
        this._lines = contents.split("\n");
        this._currentLine = 0;
        this._currentChar = 0;
    }

    get fullName() {
        return this._fullName;
    }

    get filename() {
        return this._fullName.slice(0, this._fullName.lastIndexOf('.'));
    }

    get extension() {
        return this._fullName.slice(this._fullName.lastIndexOf('.') + 1);
    }

    getContents() {
        return this._contents;
    }

    write(str) {
        this._contents += (this._contents ? "\n" : "") + str;
        this._lines = this._contents.split("\n");
    }

    gets() {
        return this._currentLine < this._lines.length
            ? this._lines[this._currentLine++]
            : undefined;
    }

    getc() {
        if (this._currentChar < this._contents.length) {
            return this._contents[this._currentChar++];
        }
        return undefined;
    }
}

const file = new File('Hello-world.txt', 'Hello World');

console.log(file.fullName);
console.log(file.filename);
console.log(file.extension);
console.log(file.getContents());
file.write('New Line');
console.log(file.gets());
console.log(file.gets());
console.log(file.gets());
console.log(file.getc());
/*
Hello-world.txt
Hello-world
txt
Hello World
Hello World
New Line
undefined
H
*/
