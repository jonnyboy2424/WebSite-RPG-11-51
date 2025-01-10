
import { birdStoryText } from "./storylineText.js";
import {birdStats} from "./character-stats.js"
import {updateStoryline, healthBar} from "./front-end.js"
export function birdRoute() {
  let cigarettesRemaining = 12;
  let powerRanking = 0;
  let storyline = document.getElementById("story-narration")
  const peckAction = document.getElementById("Peck")
  const cigaretteOffer = document.getElementById('Cigarette Offer')
  const peck2x = document.getElementById("Peck 2x")
  const cigaretteOffer2x = document.getElementById("Cigarette Offer 2x")
  peck2x.classList.add("unlearnedMoves")
  cigaretteOffer2x.classList.add("unlearnedMoves")
  const cigarettesLeft = document.getElementById('cigaretteTotal')
  let currentStoryIndex = 0;
  let health = 6
  
  
  //bird exclusive game mechanic 
  function cigaretteDecrement (param) {
    if (cigarettesRemaining === 0) {
      cigarettesLeft.innerText = `Cigarettes Remaining: None`
      document.getElementById(``)
    } else {
      cigarettesRemaining -= param;
      cigarettesLeft.innerText = `Cigarettes Remaining: ${cigarettesRemaining}`
    }
    console.log(`You gave a cigarette away. Now you have ${cigarettesRemaining}`)
  }

//take damage game mechanic
function takeDamage (damage) {
  health -= damage;
  healthBar.innerHTML = `<p> Health Left: ${health} </p>`
}

  cigarettesLeft.innerHTML = `<p> Cigarettes Remaining: ${cigarettesRemaining} </p>`
  
  storyline.innerText = birdStoryText.startingLine
   
    peckAction.addEventListener("click", function(){
      switch(currentStoryIndex) {
        case 0:
          updateStoryline(birdStoryText.peckTheFemale);
          takeDamage(1);
          break;
        case 1:
          updateStoryline(birdStoryText.peckBuckyAdams);
          break;
        case 2:
          updateStoryline(birdStoryText.peckFamily);
          break;
        case 3:
          updateStoryline(birdStoryText.peckFBI);
          break;
        case 4:
          updateStoryline(birdStoryText.peckDarcy);
          takeDamage(1)
          break;
        case 5:
          updateStoryline(birdStoryText.peckCat);
          break;
        case 6:
          updateStoryline(birdStoryText.peckMrTabacco);
          break;
        case 7:
          updateStoryline(birdStoryText.peckDoomsdayPrepper);
          break;
        case 8:
          updateStoryline(birdStoryText.peckMrHeart);
          break;}
          currentStoryIndex++

})

  cigaretteOffer.addEventListener("click", function(){
    switch(currentStoryIndex) {
          case 0:
            updateStoryline(birdStoryText.cigTheFemale);
            cigaretteDecrement(1);
            break;
          case 1:
            updateStoryline(birdStoryText.cigBuckyAdams);
            break;
          case 2:
            updateStoryline(birdStoryText.cigFamily);
            break;
          case 3:
            updateStoryline(birdStoryText.cigFBIAgent);
            break;
          case 4:
            updateStoryline(birdStoryText.cigDarcy);
            break;
          case 5:
            updateStoryline(birdStoryText.cigCat);
            break;
          case 6:
            updateStoryline(birdStoryText.cigTabacco);
            break;
          case 7:
            updateStoryline(birdStoryText.cigZombiePrepper);
            break;
          case 8:
            updateStoryline(birdStoryText.cigMrHeart);
            break;
  
  
        }
      cigaretteDecrement(1);
      currentStoryIndex++
      console.log(currentStoryIndex)
    })
  
    cigaretteOffer2x.addEventListener("click", function(){
      switch(currentStoryIndex) {
        case 2:
          updateStoryline(birdStoryText.cigFamilyTwice);
          break;
        case 3:
          updateStoryline(birdStoryText.cigFBIAgentTwice);
          break;
        case 4:
          updateStoryline(birdStoryText.cigDarcyTwice);
          break;
        case 5:
          updateStoryline(birdStoryText.cigCatTwice);
          break;
        case 6:
          updateStoryline(birdStoryText.cigTabaccoTwice);
          break;
        case 7:
          updateStoryline(birdStoryText.cigZombiePrepperTwice);
          break;
        case 8:
          updateStoryline(birdStoryText.cigMrHeartTwice);
          break;
}
  cigaretteDecrement(2);
  currentStoryIndex++;
})
  
  
  
  

  
  }

