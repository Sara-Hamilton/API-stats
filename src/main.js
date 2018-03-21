import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dino } from './js/dino.js'

$(document).ready(function() {
  $('#dino-form').submit(function(event) {
    event.preventDefault();
    const paragraphs = parseInt($('#paragraphs').val());
    const words = parseInt($('#words').val());

    let dino = new Dino(paragraphs, words);
    let response = dino.getDinoData();
  });
});
