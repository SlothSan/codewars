/*
There is a sentence which has a mistake in its ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering

Examples
>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'
*/

const reOrdering = (text) => {
  const words = text.split(" ");
  const capitalizedWord = words.find(
    (word) => word[0] === word[0].toUpperCase()
  );
  const indexOfCapitalized = words.indexOf(capitalizedWord);
  return [
    capitalizedWord,
    ...words.slice(0, indexOfCapitalized),
    ...words.slice(indexOfCapitalized + 1),
  ].join(" ");
};

console.log(reOrdering("world Hello test")); //Hello world test
