//Document
//Object
//Model
//document.getElementById('banner')

//const banner =document.getElementById('banner')

//console.dir(banner)


//document.getElementById(
//   'toc'
//)


//const toc = document.getElementById
//('toc')


//console.dir(toc)


/*const links =document.querySelector('p a');

for(let link of links) {
    console.log(link.href)
}


let doneTodos = document.querySelectorAll('.done');
let checkbox = document.querySelector("input[type='checkbox']");*/


/*const allLinks = document.querySelectorAll('a');


for(let link of allLinks) {
    link.innerText = 'I AM A LINK!!!!'
}


document.querySelector('h1').innerText = '<i> acs v g</i>'

document.querySelector('h1').innerHTML='<i> dcsfdgv</i>'

document.querySelector('h1').innerHTML*/


document.querySelector('#banner').scroll

document.querySelector('a').href

document.querySelector('a').title

firstLink.getAtrribute('href')
input.type
firstLink.setAtrribute('href')


const img = document.querySelector('img');
img.src = 'https://devsprouthosting.com/images/chicken.jpg';
img.alt = 'chicken';

// Changing style

h1.style.color = 'green'

h1.style.fontSize = '3em'

h1.style.border = '2px solid pink'

const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = 'rgb(0, 108,134)'
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


//this is the actual element object in the DOM
/*window.getComputedStyle(h1).color //using one web page is absolute color and fontSize is coorect.
window.getComputedStyle(h1).fontSize

const container = document.querySelector('#container');
const image = document.querySelector('img');
container.style.textAlign = 'center';
image.style.width = '150px';
image.style.borderRadius = '50%';


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

let spans = document.querySelectorAll('span');
for(let i in colors){
    spans[i].style.color = colors[i];
    console.log(i)
}

//Classlist

const h2 = document.querySelector('h2')


h2.getAttribute('class') //is not working
h2.setAttribute('class','purple')

h2.setAttribute('class','border')
let currentClasses = h2.getAttribute('class')
currentClasses
h2.setAttribute('class',`${currentClasses} purple`)

h2.classList.add('purple')
h2.classList.remove('purple')
h2.classList.contains('border')
h2.classList.toggle('purple')
h2.getAttribute('class')


const lis = document.querySelectorAll('li');
 
for(let li of lis){
    li.classList.toggle('highlight');
}*/



//Travesing Parent/child/Sibling

firstBold.parentElement
firstBold.parentElement.parentElement
firstBold.parentElement.parentElement.parentElement
const paragraph = firstBold.parentElement
paragraph.children
nextsibiling, previoussilbings = firstBold
nextElementSibling, previousElementssilbings


//Append & AppendChild

document.createElement('img')
const newImg = document.createElement('img')
console.log('newImg')

document.body.appendChild(newImg)
newImg.classList.add('square')


const p = document.querySelector('p')
p.append('i am new text yaaaayyyyy!!!1')


const newB = document.createElement('b')
newB.append('Hi!')
newB
p.prepend(newB)



const h2 = document.createElement('h2')
h2.append("Are adorable chickens")
h2
const h1 = document.querySelector('h1')
h1.insertAdjacentElement('afterend', h2)


const h3 = document.createElement('h3')
h3.innerText = 'I am h3';
h1.after(h3)


for (let i = 0; i < 100; i++) {
    const newButton = document.createElement("button");
    newButton.innerText = "Hey";
    const container = document.querySelector("#container");
    container.appendChild(newButton);
}

//removeChild & remove


const firstLi = document.querySelector('li')
firstLi
const ul = firstLi.parentElement
ul
ul.removeChild(firstLi)


document.querySelector('b')
b
b.parentElement.removeChild(b)


const img = document.querySelector(b)
img.remove()