/**
 * Complete the implementation of parseStory.
 * 
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 * 
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 * 
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 * 
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 * 
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */


function parseStory(rawStory) {
  console.log(rawStory);
  const words = rawStory.split(/\s/);
  const obj = [];

  words.forEach((word) => {
    if (word.includes('[')){
      const pos = word.split(/[\[\]]/);
      obj.push({word: pos[0], pos: pos[1]});
    }else{
     obj.push({word: word});
    }

    
  });
   return obj;

}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory().then(parseStory).then((processedStory) => {
  console.log(processedStory);

  
  const edit = document.querySelector('.madLibsEdit');
  const preview = document.querySelector('.madLibsPreview');

  processedStory.forEach((wordObj)=> {
    if(wordObj.word){
    const span = document.createElement('span');
    span.textContent = wordObj.word;
    preview.appendChild(span);
    }
  })

  

});




const ship = document.getElementById('spaceShip')
ship.style.top = '0px';
window.addEventListener('wheel', (e) => {
  let positionTop = parseInt(ship.style.top.replace("px",""),10)
  console.log(parseInt(positionTop))
  console.log(positionTop)
  if (e.deltaY > 0) {
    ship.style.top= `${positionTop + 5}px`
    console.log('go down', e.deltaY);
  } else {
    ship.style.top= `${positionTop - 5}px`
    console.log('go up', e.deltaY);
  }
});


/// function for music button  toggleMusicButton

const backgroundMusic = document.getElementById("backgroundMusic");
const startMusicButton = document.getElementById("startMusic");
const stopMusicButton = document.getElementById("stopMusic");
        stopMusicButton.addEventListener("click", () => {
          console.log("pause")
          backgroundMusic.play();
          stopMusicButton.classList.toggle('off')
          startMusicButton.classList.toggle('off')
          }
          );
          startMusicButton.addEventListener('click',()=>{
            console.log("play")
            backgroundMusic.pause();
            stopMusicButton.classList.toggle('off')
            startMusicButton.classList.toggle('off')
          })


const scrollDown = document.getElementByClassName("scroll");
console.log(scrollDown)
/*scrollDown.addEventListener('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
});

$(function() {
  $('a[href*=#]').on
});*/