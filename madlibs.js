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
  // Your code here.
  return {}; // This line is currently wrong :)
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory().then(parseStory).then((processedStory) => {
  console.log(processedStory);
});

/* let lastScrollTop = 0;

window.addEventListener('keydown', function() {
  console.log('Scrolled down');
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    // Scrolled down

    console.log('Scrolled down');

  } else {  
    // Scrolled up
    console.log('Scrolled up');
  }

  lastScrollTop = currentScrollTop;

}); */
/* let lastScroll = 0
window.onwheel= (e)=>{
  const currentOffset = e.offsetY
  if (currentOffset > lastScroll){
    console.log("go down")
  } else {
    console.log("go up")
  }
  lastScroll = currentOffset
}
 */
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
