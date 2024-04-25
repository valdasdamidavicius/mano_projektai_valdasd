function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", (_) => {
  // Global variables
  let balls = [];
  let currentIndex = 1;
  let timer;
  let elapsedTime = 0;

  // Function to initialize the game
  function initGame() {
    clearInterval(timer);
    currentIndex = 1;
    elapsedTime = 0;
    updateTimerDisplay();

    // Reset left square
    document.getElementById("left-square").innerHTML = "";
    const numbers = Array.from({ length: 25 }, (_, i) => i + 1);
    shuffle(numbers);
    for (let i = 0; i < numbers.length; i++) {
      const ball = document.createElement("div");
      ball.className = "ball";
      ball.textContent = numbers[i];
      ball.style.backgroundColor = getRandomColor();
      balls.push(ball);
      ball.addEventListener("click", moveBall);
      document.getElementById("left-square").appendChild(ball);
    }

    // Reset right square
    document.getElementById("right-square").innerHTML = "";
  }

  // Function to move a ball from left to right square
  function moveBall() {
    const clickedIndex = parseInt(this.textContent);
    if (clickedIndex === currentIndex) {
      const ball = balls.find((ball) => ball.textContent == currentIndex);
      document.getElementById("right-square").appendChild(ball);
      currentIndex++;
      if (currentIndex === 26) {
        endGame();
      }
    } else {
      alert("Pasirinkite kitą rutuliuką!");
    }
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Function to end the game
  function endGame() {
    clearInterval(timer);
    alert("Žaidimas baigtas! Laikas: " + elapsedTime + " sek.");
  }

  // Function to update timer display
  function updateTimerDisplay() {
    document.getElementById("timer").textContent =
      "Laikas: " + elapsedTime + " sek.";
  }

  // Event listener for start button
  document.getElementById("start-btn").addEventListener("click", () => {
    initGame();
    timer = setInterval(() => {
      elapsedTime++;
      updateTimerDisplay();
    }, 1000);
  });

  // Event listener for reset button
  document.getElementById("reset-btn").addEventListener("click", () => {
    initGame();
  });
});
