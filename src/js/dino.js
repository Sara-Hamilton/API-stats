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
    const arrayMap = new Map();
    for(var i = 0; i < array.length; i++) {
      for (var j = 0; j < array[i].length; j++) {
        console.log(array[i][j].charAt(0));
      }
    }

  }
}
