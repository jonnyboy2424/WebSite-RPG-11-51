const woodenBoy = document.getElementById("wooden-soldier")
const pepper = document.getElementById("chili-pepper")
const furBall = document.getElementById("fur-ball")
const bird = document.getElementById('bird')
const characterSelectScreen = document.getElementById("character-select-screen")
const availableAttacks = document.getElementById("moveContainer")
const birdsAdventure = document.getElementById("birdsAdventure")
export let healthBar = document.getElementById("health-bar")
const gameHeader = document.getElementById("currentGame")
const gameOverContainer = document.getElementById("gameOverScreen")
const miscContainer = document.getElementById("misc-container")

let skills = [];
import { pepperRoute } from './pepper-route.js';
import { birdRoute } from './bird-route.js'
import { woodenBoyStats, pepperStats, furballStats, birdStats } from "./character-stats.js"


//woodenBoy setup pacifist run or genocide run, pacifist run is hard to achieve and will require multiple runs //
woodenBoy.addEventListener("mouseover", function () {
  document.getElementById("startingDesc").innerHTML = "A small wooden soldier who fights with it's trusty toy sword. Wants a better one though. Recently just learned that it is alive. Doesn't know how to behave so that is up to you to decide."


})


woodenBoy.addEventListener("dblclick", function () {
  console.log('You have chosen to play as the wooden boy.')
  beginRoute(woodenBoyStats)
})




//pepper setup, pepper can pick up pocket knives and first aid kits on his journey by RNG, very hard to complete// 

pepper.addEventListener("mouseover", function () {
  document.getElementById("startingDesc").innerHTML = "A flying black thing. In no way, does this 'thing' have any offensive prowess unless it happens to find a pocket-knife on its journey. Has had enough of hell so he is trying to get out. This journey is luck-based so every attempt will be different and beyond your control. Isn't that comforting?"

})

pepper.addEventListener("dblclick", function () {
  beginRoute(pepperStats);
  pepperRoute();



})

//furball setup, a riddle adventure//

furBall.addEventListener("mouseover", function () {
  document.getElementById("startingDesc").innerHTML = "A curious ball of fur with bright red shoes. I don't know much about his (her?) character motivations. Very silent and unexpressive. This fur ball does not have much going on. Enjoy the romp."


})

furBall.addEventListener("dblclick", function () {
  beginRoute(furballStats);
})


//bird setup, a zombie apocalypse is occuring at the gas station and bird's success is dependant on who he has been nice to in the prelude // 

bird.addEventListener("mouseover", function () {
  document.getElementById("startingDesc").innerHTML = "A tall stocky bird who can reach great heights. Very strong but has a chronic addiction to chain-smoking cigarettes. In the gas station that he lives in, there is an incoming raid of zombies that only he knows about. Make friends wisely. Just because you can bum them a cigarette, does not mean they necessarily have your back."


})

bird.addEventListener("dblclick", function () {
  beginRoute(birdStats);
  birdRoute()
})






export function moveDisplay(param) {
  for (let i = 0; i < param.length; i++) {
    moveContainer.innerHTML += `<button id="${param[i]}"> ${param[i]}</button>`
  }


}





function beginRoute(param) {


  aboutSection.style.display = 'none'
  miscContainer.style.display = 'none'
  characterSelectScreen.style.display = "none";
  birdsAdventure.style.display = 'block';
  console.log("working")
  healthBar.innerHTML = `<p> Health Left: ${param.healthLeft} </p>`
  gameHeader.innerHTML = param.headerIcon;
  moveDisplay(param.skills);
  gameOverContainer.style.visibility = "hidden"
  birdsAdventure.style.backgroundColor = param.backgroundColor;

}

// functions for Game Mechanics 



export function updateStoryline(param) {
  let storyline = document.getElementById("story-narration")
  storyline.innerText = param

}






// functions for the pop-up menus


const abtButton = document.getElementById("about-btn")
const aboutSection = document.getElementById("info-section")
const closeButton = document.getElementById("close-btn")


abtButton.addEventListener("click", aboutSectionDisplay)
closeButton.addEventListener("click", aboutSectionDisplay)
let isOpen = false

function aboutSectionDisplay() {
  if (isOpen) {
    aboutSection.style.display = 'none'
  }
  else {
    aboutSection.style.display = "block"
  }
  isOpen = !isOpen;
}
