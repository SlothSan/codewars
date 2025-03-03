/*
Section numbers are strings of dot-separated integers. The highest level sections (chapters) are numbered 1, 2, 3, etc. Second level sections are numbered 1.1, 1.2, 1.3, 2.1, 2.2, 2.3, etc. Next level sections are numbered 1.1.1, 1.1.2, 1.1.2, 1.2.1, 1.2.2, erc. There is no bound on the number of sections a document may have, nor is there any bound on the number of levels.

A section of a certain level may appear directly inside a section several levels higher without the levels between. For example, section 1.0.1 may appear directly under section 1, without there being any level 2 section. Section 1.1 comes after section 1.0.1. Sections with trailing ".0" are considered to be the same as the section with the trailing ".0" truncated. Thus, section 1.0 is the same as section 1, and section 1.2.0.0 is the same as section 1.2.

Write a function cmp(section1, section2) that returns -1, 0, or 1 depending on whether section1 is before, same as, or after section2 respectively.
*/

const cmp = (s1, s2) => {
  let a = s1.split(".").map(Number),
    b = s2.split(".").map(Number);
  while (a.length && a[a.length - 1] === 0) a.pop();
  while (b.length && b[b.length - 1] === 0) b.pop();
  for (let i = 0, n = Math.min(a.length, b.length); i < n; i++) {
    if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
  }
  return a.length === b.length ? 0 : a.length < b.length ? -1 : 1;
};

console.log(cmp("1.20", "1.5")); //1
