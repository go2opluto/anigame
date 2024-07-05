let timer;
let timeRemaining;
let isPaused = false;
let isRunning = false;
let sessionsCompleted = 0;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const sessionsDisplay = document.getElementById('sessions-done');

startButton.addEventListener('click', () => {
  if (!isRunning) {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    timeRemaining = (minutes * 60) + seconds;
    startTimer();
    startButton.innerText = 'Pause';
    stopButton.innerText = 'Stop';
  } else if (isPaused) {
    startTimer();
    startButton.innerText = 'Pause';
    stopButton.innerText = 'Stop';
  } else {
    clearInterval(timer);
    isPaused = true;
    startButton.innerText = 'Resume';
    stopButton.innerText = 'Done';
  }
});

stopButton.addEventListener('click', () => {
  if (isPaused) {
    resetTimer();
    startButton.innerText = 'Start';
    stopButton.innerText = 'Stop';
  } else {
    clearInterval(timer);
    isPaused = true;
    startButton.innerText = 'Resume';
    stopButton.innerText = 'Done';
    // Do not increment sessions here, only when timer ends
  }
});

function startTimer() {
  timer = setInterval(() => {
    if (timeRemaining <= 0) {
      clearInterval(timer);
      playNotificationSound(); // Play notification sound at timer end
      alert('Time\'s up!');
      sessionsCompleted++; // Increment sessions only when timer ends
      updateSessionsDisplay(); // Update display after increment
      resetTimer();
    } else {
      timeRemaining--;
      const mins = Math.floor(timeRemaining / 60);
      const secs = timeRemaining % 60;
      document.getElementById('timer-display').innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
  }, 1000);
  isRunning = true;
  isPaused = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  isPaused = false;
  document.getElementById('timer-display').innerText = '00:00';
}

function playNotificationSound() {
  const audio = new Audio('sounds/boxing_bell.mp3'); // Adjust path as needed
  audio.play();
}

function updateSessionsDisplay() {
  sessionsDisplay.innerText = `Sessions Done: ${sessionsCompleted}`;
}

// Initial display update
updateSessionsDisplay();


var menuBtn =document.getElementById("menuBtn")
var sideNav =document.getElementById("sideNav")
var menu =document.getElementById("menu")

sideNav.style.right = "-250px";    

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src ="images/2123880_app_cancel_essential_icon.png"
    }
    else{
        sideNav.style.right = "-250px";
        menu.src ="images/3643763_list_mark_menu_option_sign_icon.png" 
    }
}

var scroll = new SmoothScroll('a[href*="#"]', {
speed: 1000,
speedAsDuration: true
}); 