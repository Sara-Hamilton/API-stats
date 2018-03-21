import $ from 'jquery';

export class Dino {

  constructor(paragraph_count, word_count) {
    this.paragraph_count = paragraph_count;
    this.word_count = word_count;
  }

  getDinoData() {
    $.get(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${this.paragraph_count}&words=${this.word_count}`).then(function(response) {
      $('#dino-data').text(response);
    }).fail(function(error) {
      $('#dino-data').text("Error");
    });
  }

}
