const cheerio = require("cheerio");
const request = require("request");
const URL = "https://www.codewars.com/users/leaderboard";

function solution() {
  return new Promise(function (resolve, reject) {
    let leaderboard = {
      position: {},
    };

    request(URL, function (error, response, html) {
      let $ = cheerio.load(html);
      $("div.leaderboard table tr").each(function (index, element) {
        if (index !== 0) {
          let data = {
            name: element.attribs["data-username"],
            clan: element.children[2].children[0]
              ? element.children[2].children[0].data
              : "",
            honor: parseInt(
              element.children[3].children[0].data.replace(/,/g, "")
            ),
          };
          leaderboard.position[index] = data;
        }
      });
      resolve(leaderboard);
    });
  });
}

async function run() {
  const result = await solution();
  console.log(result);
}

run();
