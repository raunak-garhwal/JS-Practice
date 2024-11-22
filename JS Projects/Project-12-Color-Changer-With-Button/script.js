
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id){
            body.style.backgroundColor = e.target.id;
        }
    });
});



// Alternate Solution using Closers (Optimized Way)

// function clickHandler(color){
//     return function(){
//         document.body.style.backgroundColor = `${color}`
//     }
// }

// document.getElementById('grey').onclick = clickHandler("grey")
// document.getElementById('white').onclick = clickHandler("white")
// document.getElementById('blue').onclick = clickHandler("blue")
// document.getElementById('yellow').onclick = clickHandler("yellow")

