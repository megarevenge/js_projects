const now = new Date();
const clock = document.getElementById('clock');
setInterval(() => {
  const time = new Date().toLocaleTimeString();
  clock.textContent = time;
}, 1000);

