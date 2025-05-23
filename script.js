// script.js
function updateClock() {
  const now = new Date();

  // Format time as HH:MM:SS
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;

  // Format date as Month Day, Year (Weekday)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);

  // Update DOM
  document.getElementById('time').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

// Update clock immediately and every second
updateClock();
setInterval(updateClock, 1000);
