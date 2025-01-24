/*
Create (a) method(s) eqAll that determines if all elements of a list are equal.
list can be a String or an Array; return value is a Boolean.
Your method(s) should not be enumerable. Equality should be strict (===).
Examples

"aaaaa".eqAll() => true
"abcde".eqAll() => false
[0,0,0].eqAll() => true
[0,1,2].eqAll() => false

"".eqAll() => true
[].eqAll() => true

Bonus points

Bonus points for supporting any (finite) iterable!
This will be tested with Sets and custom Objects.
Note that these may lack a length property, and may not be indexable into.
*/

const eqAll = (iterable) => {
    const iterator = iterable[Symbol.iterator]();
    const { value: first, done } = iterator.next();

    if (done) return true;

    for (const item of iterator) {
        if (item !== first) return false;
    }

    return true;
}

Object.defineProperty(String.prototype, "eqAll", {
    value: function () {
        return eqAll(this[Symbol.iterator]());
    },
    writable: true,
    configurable: true,
});

Object.defineProperty(Array.prototype, "eqAll", {
    value: function () {
        return eqAll(this[Symbol.iterator]());
    },
    writable: true,
    configurable: true,
});

console.log(eqAll('aaaaa')) //true
