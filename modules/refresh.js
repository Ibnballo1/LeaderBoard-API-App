const refreshBtn = document.getElementById('refresh-btn');

const refresh = () => {
  location.reload();
  return false;
}
refreshBtn.addEventListener('click', refresh);

export default refresh;