/*
Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.

Task:
Your goal is to create a function instrumental() which returns the valid form of a valid Hungarian word w in instrumental case i. e. append the correct suffix -vel or -val to the word w based on vowel harmony rules.

Vowel Harmony Rules (simplified)
Front vowels: e, é, i, í, ö, ő, ü, ű

Back vowels: a, á, o, ó, u, ú

Vowel pairs (short -> long): a -> á, e -> é, i -> í, o -> ó, u -> ú, ö -> ő, ü -> ű

Digraphs: sz, zs, cs

Word ends with a vowel
Change the ending vowel from short to long form.
Append the suffix:
vel if the ending vowel is a front vowel
val if the ending vowel is a back vowel
Word ends with a consonant
Step one
Default case: Double the ending consonant and continue with step two.
Special case: If the word ends with a digraph then double the first letter (e. g. sz -> ssz)
Step two
Append the suffix:

el if the last vowel is a front vowel
al if the last vowel is a back vowel
Examples:
instrumental("fa") === "fával"
instrumental("teve") === "tevével"
instrumental("betű") === "betűvel"
instrumental("ablak") === "ablakkal"
instrumental("szék") === "székkel"
instrumental("otthon") === "otthonnal"
instrumental("kar") === "karral"
instrumental("rács") === "ráccsal"
instrumental("kosz") === "kosszal"
Preconditions:
All strings are unicode strings.
The tests don't contain:
exceptional cases like kávé -> kávéval
words ending with doubled consonants (e. g. tett)
words ending with y
words ending with u, i
*/

const instrumental = (w) => {
  const front = "eéiíöőüű";
  const back = "aáoóuú";
  const short2long = { a: "á", e: "é", i: "í", o: "ó", u: "ú", ö: "ő", ü: "ű" };

  const lastChar = w.slice(-1);
  const isVowel = (c) => front.includes(c) || back.includes(c);

  if (isVowel(lastChar)) {
    const longVowel = short2long[lastChar] || lastChar;
    const stem = w.slice(0, -1) + longVowel;
    const suffix = front.includes(longVowel) ? "vel" : "val";
    return stem + suffix;
  }

  let stem;
  if (w.endsWith("sz")) stem = w.slice(0, -2) + "ssz";
  else if (w.endsWith("zs")) stem = w.slice(0, -2) + "zzs";
  else if (w.endsWith("cs")) stem = w.slice(0, -2) + "ccs";
  else stem = w + lastChar;

  let lastVowel = "";
  for (let i = w.length - 1; i >= 0; i--) {
    if (isVowel(w[i])) {
      lastVowel = w[i];
      break;
    }
  }
  const suffix = front.includes(lastVowel) ? "el" : "al";
  return stem + suffix;
};

console.log(instrumental("rokkant")); //rokkanttal
