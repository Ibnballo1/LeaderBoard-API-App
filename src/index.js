import './style.css';
import getData from '../modules/addscore.js';

const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const submitButton = document.getElementById('submit-btn');
const form = document.getElementById('form');

// Add event listener
form.addEventListener('submit', (e) => {
  if (form.data === true) {
    e.preventDefault();
  }
  else {
    form.data('submitted', true);
    console.log('I worked');
  }
  /*const nameVal = nameInput.value;
  const scoreVal = scoreInput.value;
  const sendGame = async () => {
    const obtain = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/g85gOOK1Kvia0Pysqqy3/scores', {
      method: 'POST',
      body: JSON.stringify({
        user: nameVal,
        score: scoreVal,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const postObj = await obtain.json()
  }
  sendGame()*/
  e.preventDefault();
});

getData();
