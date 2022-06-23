// Displaying the games on the page
const mainList = document.getElementById('main-list');

const displayGames = (games) => {
  games.forEach((game, index) => {
    //console.log(`The element at index ${index} is ${game['user']}`);
    const eachDiv = document.createElement('div');
    const para = document.createElement('p');

    eachDiv.className = 'eachScore white-bg';
    para.className = 'users user-1';
    para.textContent = `${game['user']}: ${game['score']}`;
    eachDiv.appendChild(para);
    mainList.appendChild(eachDiv);
  });
  
  //console.log(mainList);
}

export default displayGames;