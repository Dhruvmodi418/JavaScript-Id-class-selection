console.log("Hello Dhruv JavaScript file ")

let boxes=document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor="yellow"

document.getElementById("redbox").style.backgroundColor="red"




document.querySelector(".box").style.backgroundColor="purple"

// document.querySelectorAll(".box").style.backgroundColor="purple"
// This doesnt work because it returns a html collection.

// It can be done using arrow function


document.querySelectorAll(".box").forEach(Element => {
    Element.style.backgroundColor="white";
    Element.style.color="black";
    
    
});