
import { birdStoryText } from "./storylineText.js";
import { birdStats } from "./character-stats.js"
import { updateStoryline, healthBar } from "./front-end.js"
export function birdRoute() {
  let cigarettesRemaining = 12;
  let storyline = document.getElementById("story-narration")
  const peckAction = document.getElementById("Peck")
  const cigaretteOffer = document.getElementById('Cigarette Offer')
  const peck2x = document.getElementById("Peck 2x")
  const cigaretteOffer2x = document.getElementById("Cigarette Offer 2x")
  peck2x.classList.add("unlearnedMoves")
  cigaretteOffer2x.classList.add("unlearnedMoves")
  const cigarettesLeft = document.getElementById('cigaretteTotal')
  let currentStoryIndex = 0;
  let health = birdStats.healthLeft
  let totalFriendshipPoints = 0;


  //bird exclusive game mechanic 
  function cigaretteDecrement(param) {
    if (cigarettesRemaining === 0) {
      cigarettesLeft.innerText = `Cigarettes Remaining: None`
      document.getElementById(``)
    } else {
      cigarettesRemaining -= param;
      cigarettesLeft.innerText = `Cigarettes Remaining: ${cigarettesRemaining}`
    }
    console.log(`You gave a cigarette away. Now you have ${cigarettesRemaining}`)
  }

  function takeAllCigarettes() {
    cigarettesRemaining -= cigarettesRemaining;
    cigarettesLeft.innerText = `Cigarettes Remaining: None`
    document.getElementById(``);
    if (cigaretteOffer2x) { cigaretteOffer2x.classList.add("unlearnedMoves"); }
    cigaretteOffer.classList.add('unlearnedMoves')
  }

  function cigaretteGift() {
    cigarettesRemaining++;
    cigarettesLeft.innerText = `Cigarettes Remaining: ${cigarettesRemaining}`
  }

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

  // this function determines the ending
  function endingDetermine(friendshipPoints) {
    const requiredFriendshipPoints = 4;

    if (friendshipPoints < requiredFriendshipPoints && cigarettesRemaining > 0) {
      cigaretteDecrement(1)
      updateStoryline(birdStoryText.badEnding);
    }
    else if (friendshipPoints < requiredFriendshipPoints && cigarettesRemaining === 0) {
      updateStoryline(birdStoryText.badEndingWithNoCig)
    }
    else if (friendshipPoints >= requiredFriendshipPoints && birdGotCigarette) {
      updateStoryline(birdStoryText.goodEndingWithFemaleBird);
      currentStoryIndex++;
      continueGame.classList.add("unlearnedMoves");
      peckAction.classList.remove("unlearnedMoves");
      cigaretteOffer.classList.remove("unlearnedMoves");
      peck2x.classList.remove("unlearnedMoves");
      cigaretteOffer2x.classList.remove("unlearnedMoves");
    }
  }



  // continue function that removes all moves and leaves only 'continue'
  function choiceJudgement() {
    continueGame.classList.remove("unlearnedMoves");
    peckAction.classList.add("unlearnedMoves");
    cigaretteOffer.classList.add("unlearnedMoves");
    peck2x.classList.add("unlearnedMoves");
    cigaretteOffer2x.classList.add("unlearnedMoves");
  }

  cigarettesLeft.innerHTML = `<p> Cigarettes Remaining: ${cigarettesRemaining} </p>`

  storyline.innerText = birdStoryText.startingLine

  /* continueGame.addEventListener("click", function () {
    switch (currentStoryIndex) {
      case 10:
        endingDetermine(totalFriendshipPoints)
        break;
    }
  }) */

  peckAction.addEventListener("click", function () {
    switch (currentStoryIndex) {
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
        peck2x.classList.remove("unlearnedMoves");
        break;
      case 4:
        updateStoryline(birdStoryText.peckDarcy);
        takeDamage(1)
        break;
      case 5:
        updateStoryline(birdStoryText.peckCat);
        takeDamage(2);
        break;
      case 6:
        updateStoryline(birdStoryText.peckMrTabacco);
        takeAllCigarettes();
        break;
      case 7:
        updateStoryline(birdStoryText.peckDoomsdayPrepper);
        break;
      case 8:
        updateStoryline(birdStoryText.peckMrHeart);
        break;
    }
    currentStoryIndex++

  })

  cigaretteOffer.addEventListener("click", function () {
    switch (currentStoryIndex) {
      case 0:
        updateStoryline(birdStoryText.cigTheFemale);
        cigaretteDecrement(1);
        let birdGotCigarette = true;
        break;
      case 1:
        updateStoryline(birdStoryText.cigBuckyAdams);
        cigaretteOffer2x.classList.remove("unlearnedMoves");
        break;
      case 2:
        updateStoryline(birdStoryText.cigFamily);
        takeDamage(1);
        break;
      case 3:
        updateStoryline(birdStoryText.cigFBIAgent);
        break;
      case 4:
        updateStoryline(birdStoryText.cigDarcy);
        break;
      case 5:
        updateStoryline(birdStoryText.cigCat);
        takeDamage(2);
        break;
      case 6:
        updateStoryline(birdStoryText.cigTabacco);
        heal()
        break;
      case 7:
        updateStoryline(birdStoryText.cigZombiePrepper);
        takeDamage(1);
        break;
      case 8:
        updateStoryline(birdStoryText.cigMrHeart);
        break;


    }
    cigaretteDecrement(1);
    currentStoryIndex++
    console.log(currentStoryIndex)
  })

  cigaretteOffer2x.addEventListener("click", function () {
    switch (currentStoryIndex) {
      case 2:
        updateStoryline(birdStoryText.cigFamilyTwice);
        takeDamage(1);
        break;
      case 3:
        updateStoryline(birdStoryText.cigFBIAgentTwice);
        break;
      case 4:
        updateStoryline(birdStoryText.cigDarcyTwice);
        break;
      case 5:
        updateStoryline(birdStoryText.cigCatTwice);
        takeDamage(2);
        break;
      case 6:
        updateStoryline(birdStoryText.cigTabaccoTwice);
        break;
      case 7:
        updateStoryline(birdStoryText.cigZombiePrepperTwice);
        takeDamage(1);
        break;
      case 8:
        updateStoryline(birdStoryText.cigMrHeartTwice);
        takeDamage(1);
        break;
    }
    cigaretteDecrement(2);
    currentStoryIndex++;
  })

  peck2x.addEventListener("click", function () {
    switch (currentStoryIndex) {
      case 4:
        updateStoryline(birdStoryText.peckDarcyTwice);
        break;
      case 5:
        updateStoryline(birdStoryText.peckCatTwice);
        cigaretteGift()
        break;
      case 6:
        updateStoryline(birdStoryText.peckTabaccoTwice);
        break;
      case 7:
        updateStoryline(birdStoryText.peckDoomsdayPrepperTwice);
        break;
      case 8:
        updateStoryline(birdStoryText.peckMrHeartTwice);
        takeDamage(1);
        break;
    };
    currentStoryIndex++;
  })






}

