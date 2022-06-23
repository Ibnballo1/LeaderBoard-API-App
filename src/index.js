import './style.css';
import displayGames from '../modules/displaygames.js';
// Fetch data from API
const getData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';
  const request = new Request(url);
  const results = await fetch(request);
  const gameObj = await results.json();
  const { result } = gameObj;
  //console.log(result.length);
  displayGames(result)
}
getData();
