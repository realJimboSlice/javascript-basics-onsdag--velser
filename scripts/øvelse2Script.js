let WhatisTheTime = new Date().getHours();

if (WhatisTheTime > 4 && WhatisTheTime < 10) {
  console.log("Godmorgen");
  document.getElementsByClassName("velkomst")[0].innerHTML = "Godmorgen!";
} else if (WhatisTheTime > 9 && WhatisTheTime < 18) {
  console.log("Goddag");
  document.getElementsByClassName("velkomst")[0].innerHTML = "Goddag!";
} else if (WhatisTheTime > 17 && WhatisTheTime < 24) {
  console.log("Godaften");
  document.getElementsByClassName("velkomst")[0].innerHTML = "Godaften!";
} else if (WhatisTheTime > 23 || WhatisTheTime < 5) {
  console.log("Godnat");
  document.getElementsByClassName("velkomst")[0].innerHTML = "Godnat!";
}
