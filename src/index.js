import './style.css';

// Fetch data from API
const getData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';
  const request = new Request(url);
  const results = await fetch(request);
  const gameObj = await resu.json();
  const { result } = gameObj;
  console.log(result);
}
getData();
