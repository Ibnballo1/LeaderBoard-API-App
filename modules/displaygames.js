// Displaying the games on the page
const mainList = document.getElementById('main-list');

const displayGames = (games) => {
  games.forEach((game, index) => {
    const eachDiv = document.createElement('div');
    const para = document.createElement('p');

    if (index % 2 === 0) {
      eachDiv.className = 'eachScore white-bg';
    } else {
      eachDiv.className = 'eachScore grey-bg';
    }
    para.className = 'users user-1';
    para.textContent = `${game.user}: ${game.score}`;
    eachDiv.appendChild(para);
    mainList.appendChild(eachDiv);
  });
};

export default displayGames;