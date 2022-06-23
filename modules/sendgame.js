import AddGame from "./addscore.js";

// Variable Declaration
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const submitButton = document.getElementById('submit-btn');
const form = document.getElementById('form');
let allLists = [];
let counter = 0;

const addNewScore = (event) => {
  event.preventDefault();
  const nameVal = nameInput.value;
  const scoreVal = scoreInput.value;
  const addScores = new AddGame(nameVal, scoreVal);
  const { user, score } = addScores;
  console.log(`username is ${user} and score is ${score}`);
  /*para.textContent = `${user}: ${score}`;
  eachDiv.appendChild(para);
  allLists.push(addScores);
  //if (counter)
  mainList.appendChild(eachDiv);
*/
  //localStorage.setItem('allList', JSON.stringify(allLists));
  //counter += 1;
}
// Add event listener
form.addEventListener('submit', addNewScore);

//getStoredData();
export { nameInput, scoreInput, submitButton, form, allLists, counter };