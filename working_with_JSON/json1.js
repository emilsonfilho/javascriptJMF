const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called:';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let fame = 0;

// Add your code here
let arrayObj = strToObj(catString)

for (let obj in arrayObj) {
    motherInfo += ` ${arrayObj[obj].name},`

    for (let cat in arrayObj[obj].kittens) {
      if (arrayObj[obj].kittens[cat].gender === "m") {
        male++
      } else {
        fame++
      }
    }
}

total = male + fame

kittenInfo = `There are a total of ${total} kittens, being ${male} males and ${fame} fames.`

motherInfo = motherInfo.substring(0, motherInfo.length - 1).concat('.')
motherInfo = motherInfo.replaceAt(motherInfo.lastIndexOf(','), ' and ')



// Don't edit the code below here!
  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);

String.prototype.replaceAt = function(index, replacement) {
  if (index >= this.length) {
      return this.valueOf();
  }

  return this.substring(0, index) + replacement + this.substring(index + 1);
}

const strToObj = jsonTxt => JSON.parse(jsonTxt)