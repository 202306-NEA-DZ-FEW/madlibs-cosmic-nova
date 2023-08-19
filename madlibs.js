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
  const editView = document.querySelector('.madLibsEdit');
  const previewView = document.querySelector('.madLibsPreview');

  const updatePreview = () => {
    previewView.innerHTML = '';
    let textContent = ''; 
  
    processedStory.forEach((word) => {
      if (word.pos) {
        const input = editView.querySelector(`input[data-pos="${word.pos}"]`);
        textContent += ' ' + input.value || ` [${word.pos}]`;
      } else {
        
         textContent += ' ' + word.word + ' '; 
         
      }
    });
  
    const combinedText = document.createTextNode(textContent);
    previewView.appendChild(combinedText);
  };

  processedStory.forEach((word) => {
    if (word.pos) {
      const input = document.createElement('input');
      input.setAttribute('data-pos', word.pos);
      
      input.addEventListener('input', (event) => {
        
        updatePreview();
      });

      editView.appendChild(input);
    } else {
      editView.appendChild(document.createTextNode(word.word + ' ')); 
    }
  });

  updatePreview(); 






  // const story = document.createElement('p') //the element that will hold the story
  // story.id='storyPreview';
  // story.textContent="";
  // preview.appendChild(story) // we append it to the prewien div
  // processedStory.forEach((wordObj)=> { // we will add word by word to create the story
  //   const storyContent = story.textContent // we save the current content of the story 
  //   if(!wordObj.pos){ //we check if it will be hiddne or visible 
  //     story.textContent= `${storyContent} ${wordObj.word} `//in case visible we add it to the content
  //   }else{ // in case hidden we will put it in span and append it to the story
  //     const span = document.createElement('span')
  //     span.textContent= `____[${wordObj.pos}]____`
  //     story.appendChild(span)
  //   }
  // })
  // processedStory.forEach((wordObj)=> {
  //   if(wordObj.pos){ //we check if it a hidden word
  //     const div = document.createElement('div') //the div that will hold the inut and label
  //     div.innerHTML= `$<label for="">[${wordObj.pos}]</label>
  //     <input type="text"  >`
  //     edit.appendChild(div)// we add it to the edit Div
  //   } 
    
  // })
  

});


document.addEventListener('DOMContentLoaded', () => {

const ship = document.getElementById('spaceShip');
const fire = document.getElementById('fire');
const planet = document.getElementById('planet');
const enter = document.getElementById('enter');
const scroll = document.getElementById('scroll');
const wish = document.getElementById('wish')
const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')
const ufo = document.getElementById('ufo')
const astros = document.getElementsByClassName('astro');


fire.style.top = '220px';
ship.style.top = '0px';
fire.style.opacity = '100';
planet.style.width = '100%';
planet.style.top = '350px';
planet.style.paddingLeft = '20px';
wish.style.left = '600px';
wish.style.top = '-200px';
ufo.style.top = '300px';
ufo.style.left = '1000px';
ufo.style.height = '100px';
text1.style.display = 'none';
text2.style.display = 'none';
enter.style.display = 'block';
scroll.style.display = 'block';
Array.from(astros).forEach(astro => {
  astro.style.display = 'none';
})








window.addEventListener('scroll', (e) => {
  let value = window.scrollY;

  if (value <= 90){
    ship.style.top = value * 5.5 + 'px';
    fire.style.top = 220 + value * 5.5 + 'px';
    planet.style.left = 20 + value * 2.5 + 'px';
    wish.style.left = 600 - value * 6 + 'px';
    wish.style.top = -200 + value * 6 + 'px';
    ufo.style.top = 300 + value * 1 + 'px';
    ufo.style.left = 1000 + value * 1 + 'px';
    ufo.style.height = 100 + value * 2 + 'px';
    planet.style.width =  100 - value / 3 + '%';
    planet.style.top = 350 + value * 2 + 'px';

  

  }

   
  if (value >= 100){
    fire.style.opacity = 1 - (value - 100) / 100;
    text1.style.display = 'block';
    text2.style.display = 'block';
    enter.style.display = 'none';
    scroll.style.display = 'none';

    ship.style.top = '480.8px';
    fire.style.top = '712.8px';
    planet.style.left = '240px';
    wish.style.left = '67.2px';
    wish.style.top = '332.8px';
    ufo.style.top = '387.2px';
    ufo.style.left = '1087.2px';
    ufo.style.height = '274.4px';
    planet.style.width =  '70.4%';
    planet.style.top = '524.4px';
    Array.from(astros).forEach(astro => {
      astro.style.display = 'block';
    })

    
  }else{
    text1.style.display = 'none';
text2.style.display = 'none';
Array.from(astros).forEach(astro => {
  astro.style.display = 'none';
});
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
const generate = document.getElementById('generate')


// generate.addEventListener("click", ()=>{
//   editView.classList.toggle('none')
//   document.getElementById('hero-title').classList.toggle('none')
//   document.querySelector('.scroll').classList.toggle('none')
// })

});