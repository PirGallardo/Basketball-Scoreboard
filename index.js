let scoreHome = document.getElementById("homeScore");
let scoreGuest = document.getElementById("guestScore");

let homeCount = 0;
let guestCount = 0;

// plusOne, plusTwo, plusThree

function plusOne() {
  homeCount += 1;
  scoreHome.textContent = homeCount;
  updateHighlight();
}

function plusTwo() {
  homeCount += 2;
  scoreHome.textContent = homeCount;
  updateHighlight();
}
function plusThree() {
  homeCount += 3;
  scoreHome.textContent = homeCount;
  updateHighlight();
}

function plusOneGuest() {
  guestCount += 1;
  scoreGuest.textContent = guestCount;
  updateHighlight();
}

function plusTwoGuest() {
  guestCount += 2;
  scoreGuest.textContent = guestCount;
  updateHighlight();
}
function plusThreeGuest() {
  guestCount += 3;
  scoreGuest.textContent = guestCount;
  updateHighlight();
}

function resetScore() {
  homeCount = 0;
  guestCount = 0;
  scoreHome.textContent = 0;
  scoreGuest.textContent = 0;
  updateHighlight();
}

function updateHighlight() {
  // Elimina el resaltado previo
  scoreHome.classList.remove("highlight");
  scoreGuest.classList.remove("highlight");

  // Determina el equipo ganador
  if (homeCount > guestCount) {
    scoreHome.classList.add("highlight");
  } else if (guestCount > homeCount) {
    scoreGuest.classList.add("highlight");
  }
}
