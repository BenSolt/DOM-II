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
       //ee.style.transform = "scale(1.3)";
       d.style.marginLeft = '25px';
       d.style.transition = "all 1s"
       console.log('mousedown')
    })
})