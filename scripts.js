// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
const firstButtonElem = document.querySelector('button');

//    - Select the second button by using an "id"
const secButtonELem = document.getElementById('change-bg-btn');

// 2) Add "click" event listener to both buttons (with two different functions).
firstButtonElem.addEventListener('click', removeFirstParagraph);
secButtonELem.addEventListener('click', changeBackgroundColorByAddingCssClass);


//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
function getButtonObject(){
    console.dir(firstButtonElem);
}

//    - Output the second button WITHOUT using the variable in which it's stored
function getSecButtonObject(event){
    console.dir(event.target)
}
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
const paragraphsArray = document.querySelectorAll('p');
const firstParagraph = paragraphsArray[0];
const thirdParagraph = paragraphsArray[2];

//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
function removeFirstParagraph(){
    firstParagraph.remove();
}
//    - The second button changes the background color of the first paragraph to blue
function changeBackgroundColor(){
    firstParagraph.style.backgroundColor = 'blue';
}
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
function changeBackgroundColorByAddingCssClass(){
    firstParagraph.className = 'bg-color-change';
}
//    Note: You'll have to add those classes to the styles.css file first!