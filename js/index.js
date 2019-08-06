// Your code goes here

// Mouse Over
// const title= document.querySelector('.logo-heading');
// title.addEventListener('mouseover', (e) => {
//     title.style.color = 'red';
//   console.log(`You over me!`);
// })





const logo = document.querySelector('.logo-heading');

  logo.addEventListener('mouseover', (e) => {
    TweenMax.to(e.target, 1, {scale: 1.3 });
});
  
    logo.addEventListener('mouseleave', (e) => {
    TweenMax.to(e.target, .5, {scale: 1 });
});




 //Mouse Dub Click turns blue.

 const navbar2 = document.querySelectorAll('.nav .nav-link');
 navbar2.forEach(anchor2 => {
   anchor2.addEventListener('dblclick', (e) => {
    anchor2.style.color = 'blue'})
    
}); 
   
//Mouse Over and Mouse Leave Nav Bar

const navbar = document.querySelectorAll('.nav .nav-link');
 navbar.forEach(anchor => {
   anchor.addEventListener('mouseover', (e) => {
    anchor.style.color = 'red'})
    
   
     anchor.addEventListener('mouseleave', (e) => {
    anchor.style.color = 'black'})
     }); 
    
    
// KeyDown  
  const body = document.querySelector('body');
     body.addEventListener('keydown' , (e) => {
        body.style.backgroundColor = 'red'   //'#' + Math.floor(Math.random()*16777215).toString(16)';
     });


// Wheel

const wheel = document.querySelector('p');
     wheel.addEventListener('wheel' , (e) => {
        e.target.style.fontSize = "35px";
     });


//Drag/drop




//load

//focus

//resize
                  
        //   const images = document.querySelector('body');
        //   images.forEach(pics => {
        //   pics.addEventListener('resize', (e) => {
        //   pics.style.color = 'orange'})
        // }); 

//scroll


     const scrollin = document.querySelectorAll('.text-content p');
     scrollin.forEach(pp => {
   pp.addEventListener('scroll', (e) => {
    pp.style.color = 'green'})
       
   }); 



//select  





// Prevent Default


const signupbtns = document.querySelectorAll('.btn');
signupbtns.forEach(btns => {
  btns.addEventListener('click', (e) => {
    console.log(`button click event!`);
    event.preventDefault();})
 
}); 



       