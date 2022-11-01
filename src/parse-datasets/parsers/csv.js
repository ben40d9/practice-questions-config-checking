const { readFileSync } = require("fs");
const { join } = require("path");

const parse = function (path) {
  const contents = readFileSync(join(path), {
    encoding: "utf-8",
  });

  const data = contents.split("\r\n");

  let arrOfObjs = [];

  let uppercaseHeaders = data[0].split(",");

  const headers = uppercaseHeaders.map((ele) => ele.toLowerCase());

  for (let i = 0; i < data.length; i++) {
    const eachLine = data[i].split(",");

    //create empty obj
    let obj = {};
    //iterate through each array & push it to obj var we made
    for (let b = 0; b < eachLine.length; b++) {
      obj[headers[b].trim()] = eachLine[b].trim();
    }
    arrOfObjs.push(obj);
  }
  //now the var arr is an arrayOfObjects

  //takes off the header obj in the arrOfObjs
  let arrObj = arrOfObjs.filter((obj) => obj.winner !== "Winner" || null);

  //take out last weird element
  arrObj.pop();
  console.log(arrOfObjs);
  return console.log(arrOfObjs);
};

const ext = "csv";

module.exports = {
  ext,
  parse,
};
