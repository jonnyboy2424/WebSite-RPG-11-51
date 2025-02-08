import { pepperStoryText } from "./pepper_storyline.js";
import { updateStoryline, healthBar } from "front-end.js";
export function pepperRoute() {
  console.log("Bababooey")
  let storyline = document.getElementById("story-narration")
  const teethAction = document.getElementById("Gnashing of Teeth")
  const pocketKnife = document.getElementById('Run Away!')
  const solarFlare = document.getElementById("Solar Flare")
  const flutterWings = document.getElementById("Flutter Wings")
  const continueGame = document.getElementById("Continue")
  const solarFlareLeft = document.getElementById('solarFlareTotal');
  const pocketKnifeTotal = document.getElementById('pocketKnifeTotal');
  let currentStoryIndex = 0;
  let health = pepperStats.healthLeft
  storyline.innerText = pepperStoryText.startingLine
}


// ['Gnashing of Teeth', 'Flutter Wings', 'Pocket Knife', 'Solar Flare']
// <p id="solarFlareTotal"></p> <p id="pocketKnifeTotal"></p>
