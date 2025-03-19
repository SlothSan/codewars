/*
In this kata you will have to transform each string so that it contains count for every symbol it contains, starting from 2. The order of symbols should be preserved.

Example: abbreviation => a2b2revi2ton
*/

const transform = (str) => {
    const freq = {};
    for (const char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    const seen = new Set();
    let result = '';
    for (const char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += freq[char] > 1 ? char + freq[char] : char;
        }
    }
    return result;
}

console.log(transform('elevation')) //e2lvation
