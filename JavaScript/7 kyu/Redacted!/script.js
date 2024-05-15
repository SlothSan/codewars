/*
Meanwhile... somewhere in a Pentagon basement
Your job is to compare two confidential documents that have come into your possession.

The first document has parts redacted, and the other one doesn't.


But the original (unredacted) document might be a fake!

You need to compare the two documents and decide if it is possible they are the same or not.

Kata Task
Return true if the two documents are possibly the same. Return false otherwise.

Notes
Each document is made of any visible characters, spaces, punctuation, and newlines \n
Any character might be redacted (except \n)
The redaction character is X
The redacted document is always the first one
Examples
Document 1 (redacted)	Document 2 (original)	Possibly Same?
TOP SECRET:
The missile launch code for Sunday XXXXXXXXXX is:
XXXXXXXXXXXXXXXXX
TOP SECRET:
The missile launch code for Sunday 5th August is:
7-ZERO-8X-ALPHA-1
true
The name of the mole is Professor XXXXX
The name of the mole is Professor Plum
false
XXXXXXXX XXXXXXX XXXXXXXXXXXXXXXXXXX
XXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXXX XXXXX
Area-51. Medical Report. 23/Oct/1969
E.T. subject 4 was given an asprin after reporting sick for duty today
true
*/

const redacted = (doc1, doc2) => {
  if (doc1.length !== doc2.length) {
    return false;
  }
  for (let i = 0; i < doc1.length; i++) {
    const char = doc1[i];
    if (
      (char !== doc2[i] && char !== "X") ||
      (char === "X" && doc2[i] === "\n")
    ) {
      return false;
    }
  }
  return true;
};

const doc1 =
  "TOP SECRET:\nThe missile launch code for Sunday XXXXXXXXXX is:\nXXXXXXXXXXXXXXXXX";
const doc2 =
  "TOP SECRET:\nThe missile launch code for Sunday 5th August is:\n7-ZERO-8X-ALPHA-1";

console.log(redacted(doc1, doc2));
// True
