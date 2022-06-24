export const refreshBtn = document.getElementById('refresh-btn');

const refresh = () => {
  window.location.reload();
  return false;
};

export default refresh;