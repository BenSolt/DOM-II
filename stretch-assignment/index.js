// document.querySelectorAll(".block").forEach(ee => {
//     ee.addEventListener("click", () => {
//        //ee.style.transform = "scale(1.3)";
//        ee.style.marginLeft = '25px';
//        ee.style.transition = "all 0.3s"
//        console.log('movvee')
//     })
// })

//MOUSE DOWN

document.querySelectorAll(".block").forEach(d => {
    d.addEventListener("mousedown", () => {
        // setInterval(function(){ alert("Hello"); }, 300);
       d.style.transform ='translateX(1000px)';
       d.style.transition = "all 5s"
       console.log('mousedown')
    })
})

// MOUSE UP
document.querySelectorAll(".block").forEach(d => {
    d.addEventListener("mouseup", () => {
       d.style.transform ='translateX(0px)';
       d.style.transition = "all 1s"
       console.log('mousedown')
    })
})






const blue = document.querySelector('.block--blue')
const red = document.querySelector('.block--red')
const green = document.querySelector('.block--green')
const pink = document.querySelector('.block--pink')
const gray = document.querySelector('.block--gray')

// BLUE

blue.addEventListener('click' , () => {
red.style.background ='blue';
blue.style.background ='red';
console.log('CLICK')
})


green.addEventListener('click' , () => {
red.style.background ='green';
green.style.background ='red';
if(red.style.background ='blue'){
red.style.background ='green';
blue.style.background ='blue';
}
console.log('CLICK')
})