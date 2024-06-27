/*
In Western music, a major chord (major third) starts at a root note and adds the note 4 semitones and 7 semitones above it.

A minor chord (minor third) starts at a root note and adds the note 3 semitones and 7 semitones above it.

Given a root note root, please return an array of the major chord and the minor chord for that root.

The notes are C, C#, D, D#, E, F, F#, G, G#, A, A#, B –– you are given this as a constant

For a music theory kata from a different point of view (figuring out whether a given set of notes is a major chord or minor chord or neither), try this kata from aniametz. 
*/

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function chords(root) {
  const rootIndex = notes.indexOf(root);
  const getNote = (semitones) => notes[(rootIndex + semitones) % 12];

  const majorChord = [root, getNote(4), getNote(7)];
  const minorChord = [root, getNote(3), getNote(7)];

  return [majorChord, minorChord];
}

console.log(chords("C"));
//[ [ 'C', 'E', 'G' ], [ 'C', 'D#', 'G' ] ]
