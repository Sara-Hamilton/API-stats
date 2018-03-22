import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dino } from './js/dino.js'

const showData = function(response) {
  console.log("response",response);
  if(response.statusText === "error") {
    $('#error').html("There was an error handling your request.");
  } else if (response.length === 0) {
    $('#error').html("The search returned no results.");
  } else {
    response.forEach(function(paragraph) {
      let splitString = paragraph.join(" ");
      $('#dino-data').append(`<p> ${splitString} </p>`);
    });
  }
}

$(document).ready(function() {
  $('#dino-form').submit(function(event) {
    event.preventDefault();
    const paragraphs = parseInt($('#paragraphs').val());
    const words = parseInt($('#words').val());
    $('#dino-form').hide();
    let dino = new Dino(paragraphs, words);

    dino.getDinoData(showData);
    dino.countFirstLetters(showData);
  });

});
