/*
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0. */

const longestPalindrome = (string) => {
  let longestPalLength = 0;
  let longestPalLeft = 0;
  let longestPalRight = 0;

  const getLongestPalindrome = (leftPosition, rightPosition) => {
    while (
      leftPosition >= 0 &&
      rightPosition < string.length &&
      string[leftPosition] === string[rightPosition]
    ) {
      leftPosition--;
      rightPosition++;
    }
    if (rightPosition - leftPosition > longestPalLength) {
      longestPalLeft = leftPosition + 1;
      longestPalRight = rightPosition - 1;
      longestPalLength = longestPalRight - longestPalLeft + 1;
    }
  };

  // Loop through the letters
  for (let i = 0; i < string.length; i++) {
    getLongestPalindrome(i, i + 1);
    getLongestPalindrome(i, i);

    if ((string.length - i) * 2 < longestPalLength) {
      break;
    }
  }

  return string.slice(longestPalLeft, longestPalRight + 1).length;
};

console.log(
  longestPalindrome(
    "FourscoreandsevenyearsagoourfaathersbroughtforthonthiscontainentanewnationconceivedinzLibertyanddedicatedtothepropositionthatallmenarecreatedequalNowweareengagedinagreahtcivilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
  )
);
