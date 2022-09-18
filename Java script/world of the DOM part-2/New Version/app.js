   
const form = document.querySelector("#shelterForm");
const input=document.querySelector("#catName");
const list =document.querySelector("#cats");
form.addEventListener("sumbit",function (e) {
  const catName=input.value;
  const newLI=document.createElement("LI");
  newLI.innerText=catName;
  list.append(newLI);
  input.value ="";
  e.preventDefault();

});
