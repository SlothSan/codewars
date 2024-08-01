/*
As breadcrumb menùs are quite popular today, I won't digress much on explaining them, leaving the wiki link to do all the dirty work in my place.

What might not be so trivial is instead to get a decent breadcrumb from your current url. For this kata, your purpose is to create a function that takes a url, strips the first part (labelling it always HOME) and then builds it making each element but the last a <a> element linking to the relevant path; last has to be a <span> element getting the active class.

All elements need to be turned to uppercase and separated by a separator, given as the second parameter of the function; the last element can terminate in some common extension like .html, .htm, .php or .asp; if the name of the last element is index.something, you treat it as if it wasn't there, sending users automatically to the upper level folder.

A few examples can be more helpful than thousands of words of explanation, so here you have them:

generateBC("mysite.com/pictures/holidays.html", " : ") == '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
generateBC("www.codewars.com/users/GiacomoSorbi", " / ") == '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
generateBC("www.microsoft.com/docs/index.htm", " * ") == '<a href="/">HOME</a> * <span class="active">DOCS</span>'
Seems easy enough?

Well, probably not so much, but we have one last extra rule: if one element (other than the root/home) is longer than 30 characters, you have to shorten it, acronymizing it (i.e.: taking just the initials of every word); url will be always given in the format this-is-an-element-of-the-url and you should ignore words in this array while acronymizing: ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]; a url composed of more words separated by - and equal or less than 30 characters long needs to be just uppercased with hyphens replaced by spaces.

Ignore anchors (www.url.com#lameAnchorExample) and parameters (www.url.com?codewars=rocks&pippi=rocksToo) when present.

Examples:

generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.htm", " > ") == '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + ") == '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'
You will always be provided valid url to webpages in common formats, so you probably shouldn't bother validating them.

If you like to test yourself with actual work/interview related kata, please also consider this one about building a string filter for Angular.js.

Special thanks to the colleague that, seeing my code and commenting that I worked on that as if it was I was on CodeWars, made me realize that it could be indeed a good idea for a kata :)
*/

const generateBC = (url, separator) => {
  const extensionRegex = /(.*)(\.[0-9a-z]+)+$/i;
  const parts = [];
  const regex = /^index\..*/;
  let clearedUrl = url;
  if (url.indexOf("?") > -1) {
    clearedUrl = url.slice(0, url.indexOf("?"));
  }
  if (clearedUrl.indexOf("#") > -1) {
    clearedUrl = clearedUrl.slice(0, clearedUrl.indexOf("#"));
  }
  [, clearedUrl] = clearedUrl.match(
    /(?:https:\/\/|http:\/\/)?((.*)(?:\.[a-z]+)+(.*))/
  );

  clearedUrl
    .split("/")
    .filter((el) => el.length > 0)
    .forEach((part) => {
      if (!regex.test(part)) {
        parts.push(part);
      }
    });
  let bc = [],
    builtUrl = "";
  parts.forEach((el, index) => {
    if (index === 0) {
      let link = `<a href="/">HOME</a>`;
      if (index === parts.length - 1) {
        link = `<span class="active">HOME</span>`;
      }
      bc.push(link);
      builtUrl += "/";
    } else {
      let label = el;

      if (extensionRegex.test(label)) {
        [, label] = label.match(extensionRegex);
      }
      const ignoredWords = [
        "the",
        "of",
        "in",
        "from",
        "by",
        "with",
        "and",
        "or",
        "for",
        "to",
        "at",
        "a",
      ];
      if (label.length > 30) {
        label = label
          .split("-")
          .filter((word) => !ignoredWords.includes(word))
          .map((word) => word.charAt(0))
          .join("")
          .toUpperCase();
      } else {
        label = label.replace(/-/g, " ").toUpperCase();
      }

      if (index < parts.length - 1) {
        bc.push(`<a href="${builtUrl}${el}/">${label}</a>`);
        builtUrl += `${el}/`;
      } else {
        bc.push(`<span class="active">${label}</span>`);
      }
    }
  });

  return bc.join(`${separator}`);
};

console.log(generateBC("mysite.com/pictures/holidays.html", " : "));
console.log(
  generateBC(
    "www.microsoft.com/important/confidential/docs/index.htm#top",
    " * "
  )
);
