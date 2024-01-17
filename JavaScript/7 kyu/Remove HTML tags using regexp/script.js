/*
Remove HTML tags and return string without:
<tag> and </tag>
<tag/>
<tag />
html tags with attributes.
Don't trim space, tab etc.
You have to use regexp.

Tests are using function:
String.prototype.replace(your regexp, "")

Have fun :)
*/

const reg = /<.+?>/g;

console.log("<div>TESTING!23</div>".replace(reg, ""));
//TESTING!23
