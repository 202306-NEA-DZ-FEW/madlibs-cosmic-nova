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

const ship = document.getElementById('spaceShip');
const fire = document.getElementById('fire');
const planet = document.getElementById('planet');
const enter = document.getElementById('enter');
const scroll = document.getElementById('scroll');
const title = document.getElementById('hero-title')
const wish = document.getElementById('wish')
const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')
const ufo = document.getElementById('ufo')
// fire.style.top = '250px';
 ship.style.top = '-60px';
fire.style.opacity = 1;
title.style.opacity= 0
fire.style.top='200px'
// title.style.opacity=0
// planet.style.width = '100%';
// planet.style.top = '350px';
// planet.style.paddingLeft = '20px';
wish.style.left = '600px';
wish.style.top = '-200px';
ufo.style.top = '300px';
ufo.style.left = '1000px';
ufo.style.height = '100px';
// text1.style.display = 'none';
// text2.style.display = 'none';
enter.style.opacity = 0;
const windowHeight = window.innerHeight;



function changeText(e){
  console.log(e)
  const cont = document.getElementById(e.target.className).textContent
  if(e.type === 'change'){
    document.getElementById(e.target.className).textContent= cont
  } else{
  document.getElementById(e.target.className).textContent= `${e.target.value} `
}
}

function moveAround(e){
  {
    console.log(e.deltaY)
    let shipTop = parseInt(ship.style.top.replace("px",""),10)
    let fireTop = parseInt(fire.style.top.replace("px",""),10)
    let titleOpa = parseFloat(title.style.opacity)
    let enterOpa = parseFloat(enter.style.opacity)
    let ufoWidth= parseInt(ufo.style.width.replace("px",""),10)
  //  const shipCenter= shipTop+(ship.style.height)
    if (ship.style.top === '410px'){
      fire.style.direction='none'
    }
    if (e.deltaY > 0 && shipTop <= 410) {  
      if(shipTop >= windowHeight/3){ 
      fire.style.opacity= 0
      } 
      ship.style.top= `${shipTop + 25}px`
      fire.style.top = `${fireTop + 25}px`
      fire.style.opacity= fire.style.opacity - 0.01
      if(title.style.opacity<1){
      title.style.opacity= titleOpa + 0.05}
      if(enter.style.opacity<1){
        enter.style.opacity= enterOpa + 0.05}
      // ufo.style.top = 300 +5 + 'px';
      // ufo.style.left = 1000 +5 + 'px';
      // ufo.style.height = 100 +5 + 'px';
  
    } else {
       if (shipTop > (-50)){ 
        // console.log("sip top",ship.style.top, ship.style.top > '1px')
        ship.style.top= `${shipTop - 5}px`
        fire.style.top = `${fireTop - 5}px`
        if(title.style.opacity>0){
        title.style.opacity= titleOpa - 0.05}
        if(enter.style.opacity>0){
          enter.style.opacity= enterOpa - 0.05}
        if(ship.style.top < '400px'){
           fire.style.opacity= 1
          }
       }
    }
  
  }
}

getRawStory().then(parseStory).then((processedStory) => {

//   console.log(processedStory);
//   const edit = document.querySelector('.madLibsEdit');
//   const preview = document.querySelector('.madLibsPreview');
//   const editForm = document.createElement('form')
//   edit.appendChild(editForm)
//   const reseter = document.createElement(('button'))
//   reseter.className='reset revealBtn'
//   reseter.id='reseter'
//   reseter.textContent='RESET'
 
  
//   const story = document.createElement('p') //the element that will hold the story
//   story.id='storyPreview'
//   story.textContent=""
//   story.className='transparent'
//   preview.appendChild(story) // we append it to the prewien div
//   const divBtn = document.createElement('div')
//   preview.appendChild(divBtn)
//   divBtn.className= 'divBtn'
//   const reveal = document.createElement('button')
//   divBtn.appendChild(reveal)
//   reveal.className= 'revealBtn'
//   reveal.id= 'reveal'
//   reveal.textContent= 'REVEAL TEXT'
//   divBtn.appendChild(reseter)
//   processedStory.forEach((wordObj, id)=> { // we will add word by word to create the story
//     //const storyContent = story.textContent // we save the current content of the story 
//     if(!wordObj.pos){ //we check if it will be hiddne or visible 
//       story.append(`${wordObj.word} `)    //in case visible we add it to the content
//     }else{ // in case hidden we will put it in span and append it to the story
//       const span = document.createElement('span')
//       span.className= 'hiddenWord'
//       span.id= `hidden${id}`
//       span.textContent= `____[${wordObj.pos}]____ `
//       story.appendChild(span)
//     }
//   })
//   processedStory.forEach((wordObj,id)=> {console.log(wordObj,id)
//     if(wordObj.pos){ //we check if it a hidden word
//       const div = document.createElement('div') //the div that will hold the inut and label
//       const label= document.createElement('label')
//       label.setAttribute('for', `hidden${id}`)
//       label.textContent=`[${wordObj.pos}]`
//       div.appendChild(label)
//       const input= document.createElement('input')
//       input.className=`hidden${id}`
//       div.appendChild(input)
//       div.className='inputWord'
//       editForm.appendChild(div)// we add it to the edit Div
//       input.addEventListener('input', changeText)
//       input.addEventListener('change', changeText)
//     } 
    
//   })

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


fire.style.top = '28%';
ship.style.top = '0.5%';
fire.style.opacity = '100';
planet.style.width = '100%';
planet.style.top = '50%';
wish.style.left = '70%';
wish.style.top = '-20%';
ufo.style.top = '30%';
ufo.style.left = '70%';
ufo.style.height = '15%';
text1.style.display = 'none';
text2.style.display = 'none';
enter.style.display = 'block';
scroll.style.display = 'block';
Array.from(astros).forEach(astro => {
  astro.style.display = 'none';
})






  
//window.addEventListener('wheel', moveAround );



window.addEventListener('scroll', (e) => {
  let value = window.scrollY;


  if (value <= 90){
    ship.style.top = 0.5 + value * 0.7 + '%';
    fire.style.top = 28 + value * 0.7 + '%';
    planet.style.left = value * 0.18 + '%';
    wish.style.left = 70 - value * 0.6 + '%';
    wish.style.top = -20 + value * 0.6 + '%';
    ufo.style.top = 30 + value * 0.2 + '%';
    ufo.style.left = 70 + value * 0.05 + '%';
    ufo.style.height = 15 + value * 0.3 + '%';
    planet.style.width =  100 - value / 3 + '%';
    planet.style.top = 50 + value * 0.2 + '%';



  }


   
  if (value >= 100){
    fire.style.opacity = 1 - (value - 100) / 100;
    text1.style.display = 'block';
    text2.style.display = 'block';
    enter.style.display = 'none';
    scroll.style.display = 'none';
    ship.style.top = '62.1%';
    fire.style.top = '89.6%';
    planet.style.left = '16%';
    wish.style.left = '17.2%';
    wish.style.top = '32.8%';
    ufo.style.top = '47.6%';
    ufo.style.left = '70.4%';
    ufo.style.height = '41.4%';
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
*/

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

const astros = document.getElementsByClassName('astro')
enter.addEventListener("click", ()=>{
  container.classList.toggle('none')
  document.getElementById('hero-title').classList.toggle('none')
  enter.classList.toggle('none')
  document.querySelector('.scroll').classList.toggle('none')
  ship.classList.toggle('shipStyle')
  planet.classList.toggle('planetStyle')
  fire.classList.toggle('none')
  window.removeEventListener('wheel', moveAround)
   ship.style.top=`-50px`
   Array.from(astros).forEach(el=>{el.classList.toggle('none')})

})

document.getElementById('reveal').addEventListener('click',()=>{
  document.querySelector('#storyPreview').classList.toggle('transparent')
})
document.getElementById('reseter').addEventListener('click', (e)=>{
  e.preventDefault()
  editForm.reset()
})


});