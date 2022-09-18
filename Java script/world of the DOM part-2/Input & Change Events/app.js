const input = document.querySelector('input');
const h1 = document.querySelector('h1');
//input.addEventListener('change',function(e){
  //  console.log("Hello Guys!!")
//})






input.addEventListener('input',function(e){
   // console.log("INPUT EVENT!!")
  h1.innerText= input.value 
   //console.log(e)
})

 
input.addEventListener('input', function (e) {
    if (!this.value) {
        heading.innerText = `Enter Your Username`;
    } else {
        heading.innerText = `Welcome, ${this.value}`;
    }
});