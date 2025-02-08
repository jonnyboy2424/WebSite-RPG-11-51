
import { pepperStoryText } from "./storylineText.js";
import { pepperStats } from "./character-stats.js"
import { updateStoryline, healthBar } from "./front-end.js"
export function pepperRoute() {
  let storyline = document.getElementById("story-narration")
  const gnashTeethAction = document.getElementById("Gnashing of Teeth")
  const cigaretteOffer = document.getElementById('Cigarette Offer')
  const peck2x = document.getElementById("Peck 2x")
  let health = pepperStats.healthLeft




  gnashTeethAction.addEventListener("click", function () {
    outcomeMaker();
  })

  //take damage game mechanic
  function takeDamage(damage) {
    health -= damage;
    healthBar.innerHTML = `<p> Health Left: ${health} </p>`
  }

  // heal game mechanic
  function heal() {
    health++;
    healthBar.innerHTML = `<p> Health Left: ${health} </p>`;
  }

  function outcomeMaker() {
    let outcome = ((Math.floor(Math.random() * 100) + 1));
    console.log(outcome);
  }

  // this function determines the ending

  storyline.innerText = pepperStoryText.startingLine

  /* continueGame.addEventListener("click", function () {
    switch (currentStoryIndex) {
      case 10:
        endingDetermine(totalFriendshipPoints)
        break;
    }
  }) */




}

