let startTimestamp;
let duration = 60000;
let waterCount = 0;

let colors = {
  fondo: "#000000",
  water: "#00aaff",
  white: "#ffffff",
};

function setup() {
  let canvas = createCanvas(280, 100);
  canvas.parent("canvasContainer");

  // Recuperar datos
  let savedStart = getItem("startTimestamp");
  let savedCount = getItem("waterCount");
  let savedDuration = getItem("duration");

  if (savedDuration === null) {
    storeItem("duration", duration);
  } else {
    duration = savedDuration;
  }

  if (savedStart === null) {
    startTimestamp = Date.now();
    storeItem("startTimestamp", startTimestamp);
  } else {
    startTimestamp = savedStart;
  }

  if (savedCount === null) {
    waterCount = 0;
    storeItem("waterCount", waterCount);
  } else {
    waterCount = savedCount;
  }

  let btn = document.getElementById("drinkBtn");
  btn.addEventListener("click", resetTimer);

  let select = document.getElementById("timeSelect");

  // poner valor guardado
  select.value = duration;

  // detectar cambio
  select.addEventListener("change", function () {
    duration = Number(this.value);
    storeItem("duration", duration);

    // reiniciar tiempo
    startTimestamp = Date.now();
    storeItem("startTimestamp", startTimestamp);
  });
}

function draw() {
  background(colors.fondo);
  let elapsed = Date.now() - startTimestamp;
  let progress = elapsed / duration;
  progress = constrain(progress, 0, 1);

  // convertir a segundos
  let remainingMs = max(0, duration - elapsed);
  let remainingSec = Math.floor(remainingMs / 1000);

  // vaso centrado
  let glassX = 110;
  let glassY = 5;
  let glassW = 60;
  let glassH = 85;

  stroke(colors.white);
  strokeWeight(2);
  noFill();
  rect(glassX, glassY, glassW, glassH, 10);

  // agua
  let fillH = glassH * progress;
  let liquidY = glassY + (glassH - fillH);

  noStroke();
if (progress >= 1) {
  if (frameCount % 30 < 15) {
    fill(255, 50, 50);
  } else {
    fill(0);
  }
} else {
  fill(colors.water);
}  rect(glassX + 3, liquidY, glassW - 6, fillH, 8);

  // texto del popup
  let remaining = max(0, duration - elapsed);

  if (progress < 1) {
    document.getElementById("statusText").innerText =
      "Tiempo restante: " + remainingSec + "s";
  } else {
    document.getElementById("statusText").innerText =
      "¡Es momento de beber agua!";
  }
  document.getElementById("countText").innerText =
    "Has bebido agua " + waterCount + " veces";
}

function resetTimer() {
  startTimestamp = Date.now();
  storeItem("startTimestamp", startTimestamp);

  waterCount++;
  storeItem("waterCount", waterCount);
}


