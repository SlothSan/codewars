/*
Given multiple lists (name, age, height), each of size n :

An entry contains one name, one age and one height. The attributes corresponding to each entry are determined by the index of each list. For example, the first entry is comprised of the first elements of each list, the second entry is comprised of the second elements of each list, etc.

A duplicate entry is one in which the name, age and height are ALL the same.

Write a function which takes in the attributes for each entry and returns an integer for the number of duplicated entries. For a set of duplicates, the original entry should not be counted as a duplicate.
 */

const countDuplicates = (names, ages, heights) => {
    const seen = {};
    let duplicates = 0;
    for (let i = 0; i < names.length; i++) {
        const key = `${names[i]}|${ages[i]}|${heights[i]}`;
        seen[key] = (seen[key] || 0) + 1;
    }
    for (const key in seen) {
        if (seen[key] > 1) duplicates += seen[key] - 1;
    }
    return duplicates;
}

const name = ['Jack','Ben','Jack','Ben','Jack','Jack'];
const age = [25,25,34,25,25,34];
const height = [180,180,200,180,180,200];

console.log(countDuplicates(name,age,height)) //3

