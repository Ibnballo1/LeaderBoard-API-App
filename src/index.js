import './style.css';
import getData from '../modules/addscore.js';
import refresh from '../modules/refresh.js';

const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const form = document.getElementById('form');
const postResult = document.getElementById('res');

// Add event listener
form.addEventListener('submit', (e) => {
  //console.log('I worked');
  const nameVal = nameInput.value;
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
    const postObj = await obtain.json();
    //console.log(postObj)
    const { result } = postObj;
    postResult.innerHTML = postObj['result'];
  }
  sendGame();
  e.preventDefault();
});

getData();