/* 
You're given a string of dominos. For each slot, there are 3 options:

    "|" represents a standing domino

    "/" represents a knocked over domino

    " " represents a space where there is no domino

For example:

"||| ||||//| |/"

Tipping a domino will cause the next domino to its right to fall over as well, but if a domino is already tipped over, or there is a domino missing, the reaction will stop.
What you must do is find the resulting string if the first domino is pushed over. So in out example above, the result would be:

"/// ||||//| |/"

since the reaction would stop as soon as it gets to a space.
*/

export function dominoReaction(sequence: string): string {
  let result = "";
  let tipping = true;

  for (let char of sequence) {
    if (char === "|" && tipping) {
      result += "/";
    } else {
      result += char;
      if (char === " " || char === "/") {
        tipping = false;
      }
    }
  }

  return result;
}
