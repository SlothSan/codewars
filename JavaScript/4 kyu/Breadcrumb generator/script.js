function generateBC(url, separator) {
  let breadcrumb = [];
  let href = "";
  let text = "";
  let tag = "";
  let linkedHref = "";
  url = url.split("/").filter((curr) => !curr.includes("index"));
  for (let i = 0; i < url.length; i++) {
    if (!i) {
      href = "/";
      text = "HOME";
      tag = "a";
      breadcrumb.push(`<${tag} href="${href}">${text}</${tag}>`);
    } else if (i === url.length - 1) {
      href = "active";
      text = url[i].split(".")[0].toUpperCase();
      tag = "span";
      breadcrumb.push(`<${tag} class="${href}">${text}</${tag}>`);
    } else {
      linkedHref
      href = `/${url[i]}/`;
      text = `${url[i].toUpperCase()}`;
      tag = "a";
      breadcrumb.push(`<${tag} href="${href}">${text}</${tag}>`);
    }
  }
  return breadcrumb.join(separator);
}

console.log(generateBC("mysite.com/pictures/holidays.html", " : "));
console.log(
  generateBC(
    "www.microsoft.com/important/confidential/docs/index.htm#top",
    " * "
  )
);
