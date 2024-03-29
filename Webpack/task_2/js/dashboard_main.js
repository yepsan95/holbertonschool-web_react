import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<img id="logo" src="../assets/holberton-logo.jpg"></img>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="button">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let clickCounter = 0;

function updateCounter() {
  clickCounter++;
  $('#count').text(`${clickCounter} clicks on the button`);
}

const debouncedUpdate = _.debounce(updateCounter, 500);

$('#button').click(debouncedUpdate);
