import $ from 'jquery';

export class Dino {

  constructor(paragraph_count, word_count) {
    this.paragraph_count = paragraph_count;
    this.word_count = word_count;
  }

  getDinoData(displayData) {
    $.get(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${this.paragraph_count}&words=${this.word_count}`)
    .then(function(response) {
      // this.countFirstLetters(response);
      console.log("response in .then" , response);
      displayData(response);
    })
    .fail(function(error) {
      console.log("Error");
      // $('#dino-data').html("Error");
    });
  }
  //
  // countFirstLetters(response) {
  //   let test = this.countFirstLetters(response);
  //   console.log("test ",test);
  //
  // }

}
