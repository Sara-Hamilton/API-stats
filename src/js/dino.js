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
      displayData(response);
    })
    .fail(function(error) {
      console.log(error);
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
    console.log(arrayMap);
    console.log("values",arrayMap.values());
    console.log("keys",arrayMap.keys());
  }

}
