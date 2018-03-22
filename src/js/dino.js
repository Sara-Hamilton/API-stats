import $ from 'jquery';

export class Dino {

  constructor(paragraph_count, word_count) {
    this.paragraph_count = paragraph_count;
    this.word_count = word_count;
  }

  getDinoData(displayData) {
    $.get(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${this.paragraph_count}&words=${this.word_count}`)
    .then((response) => {
      this.countFirstLetters(response);
      this.lineChart(response);
      displayData(response);
    })
    .fail(function(error) {
      displayData(error);
    });
  }

  countFirstLetters(array) {
    const arrayMap = new Map;
    for(let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        let letter = array[i][j].charAt(0);
        if(arrayMap.has(letter) === true) {
          let currentValue = arrayMap.get(letter);
          arrayMap.set(letter,currentValue+=1);
        } else {
          arrayMap.set(letter, 1);
        }
      }
    }
    this.getBarChart(arrayMap);
  }

  getBarChart(arrayMap) {
    let keys = Array.from(arrayMap.keys());
    let keysString = keys.join(",");
    let values = Array.from(arrayMap.values());
    let valuesString = values.join(",");
    let url =    `https://api.labstack.com/chart/bar?values=${valuesString}&labels=${keysString}&colors=lightseagreen&title=Begins%20With&x_title=First%20Letter`;
    $('#chart').html(`<img src=${url}>`);
  }

  lineChart(array) {
    const lineMap = new Map;
    for(let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        let lastTwo = array[i][j].slice(-2);
        if (lineMap.has(lastTwo) === true) {
          let currentValue = lineMap.get(lastTwo);
          lineMap.set(lastTwo, currentValue+=1);
        } else {
          lineMap.set(lastTwo, 1);
        }
      }
    }
    this.getLineChart(lineMap);
  }

  getLineChart(lineMap) {
    let lineKeys = Array.from(lineMap.keys());
    let lineKeysString = lineKeys.join(",");
    let lineValues = Array.from(lineMap.values());
    let lineValuesString = lineValues.join(",");
    let lineurl =
    `https://api.labstack.com/chart/line?values=${lineValuesString}&labels=${lineKeysString}&title=Ends%20With&x_title=Last%20Two%20Letters`;
    $('#linechart').html(`<img src=${lineurl}>`);
  }

}
