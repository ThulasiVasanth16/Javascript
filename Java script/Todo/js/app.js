/*let totalDocuments =0;
function myDocuments() {
     totalDocuments = 10;
}
console.log(totalDocuments);

myDocuments();
console.log(totalDocuments);*/


/*let bird ='Chickoo';
function birdwatch(){
    let bird = 'Great Blue Heron';
    console.log(bird);
}

birdwatch()*/

   //Block Scope//
/*let radius = 91;
if(radius > 0) {
    const PI = 3.14159;
    let msg = 'HIII!'
}
console.log(radius);

/////////////


for(let i =0; i <5; i++) {
    let msg = "What Happen";
    console.log(msg)
}
console.log(msg)
console.log(i)*/





function bankRobbery() {
    const heroes = ['Spiderman','Wolverine','Black Panther','Batman']
    function cryForHelp() {
        let color = 'purple';
      function inner() {
        for(let hero of heroes) {
            console.log(`PLEASE HELP US, ${hero.toUpperCase}`)
        }
      }
      inner();
    }
    cryForHelp();
}