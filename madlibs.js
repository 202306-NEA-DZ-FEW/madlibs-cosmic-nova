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

  const story = document.createElement('p') //the element that will hold the story
  story.id='storyPreview'
  story.textContent=""
  preview.appendChild(story) // we append it to the prewien div
  processedStory.forEach((wordObj)=> { // we will add word by word to create the story
    const storyContent = story.textContent // we save the current content of the story 
    if(!wordObj.pos){ //we check if it will be hiddne or visible 
      story.textContent= `${storyContent} ${wordObj.word} `//in case visible we add it to the content
    }else{ // in case hidden we will put it in span and append it to the story
      const span = document.createElement('span')
      span.textContent= `____[${wordObj.pos}]____`
      story.appendChild(span)
    }
  })
  processedStory.forEach((wordObj)=> {
    if(wordObj.pos){ //we check if it a hidden word
      const div = document.createElement('div') //the div that will hold the inut and label
      div.innerHTML= `$<label for="">[${wordObj.pos}]</label>
      <input type="text"  >`
      edit.appendChild(div)// we add it to the edit Div
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
          backgroundMusic.play();
          stopMusicButton.classList.toggle('off')
          startMusicButton.classList.toggle('off')
          }
          );
          startMusicButton.addEventListener('click',()=>{
            backgroundMusic.pause();
            stopMusicButton.classList.toggle('off')
            startMusicButton.classList.toggle('off')
          })

// we set the edit and preview and the title to be hidden, and will be diwplayed after hitting enter
const container = document.getElementById('container')
const enter = document.getElementById('enter')

enter.addEventListener("click", ()=>{
  container.classList.toggle('none')
  document.getElementById('hero-title').classList.toggle('none')
  enter.classList.toggle('none')
  document.querySelector('.scroll').classList.toggle('none')
})