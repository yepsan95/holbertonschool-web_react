import $ from 'jquery';
import './body.css';

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="button">Click here to get started</button>');
$('body').append('<p id="count"></p>');

let clickCounter = 0;

function updateCounter() {
  clickCounter++;
  $('#count').text(`${clickCounter} clicks on the button`);
}

const debouncedUpdate = _.debounce(updateCounter, 500);

$('#button').click(debouncedUpdate);
