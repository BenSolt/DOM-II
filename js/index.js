// Your code goes here

// Mouse Over
// const title= document.querySelector('.logo-heading');
// title.addEventListener('mouseover', (e) => {
//     title.style.color = 'red';
//   console.log(`You over me!`);
// })



// 1. Mouse Over

const logo = document.querySelector('.logo-heading');

  logo.addEventListener('mouseover', (e) => {
    TweenMax.to(e.target, 1, {scale: 1.3 });
    
});

  

// 2. Mouse Leave

    logo.addEventListener('mouseleave', (e) => {
    TweenMax.to(e.target, .5, {scale: 1 });
});



     
  


 //3. Mouse Click turns purple

 const navbar3 = document.querySelector('.home .intro h2');
 navbar3.addEventListener('click', (e) => {
  navbar3.style.color = 'purple'})
    




//4.header change color

const navig = document.querySelector('.nav-container ');
navig.addEventListener('dblclick', (e) => {
   e.target.style.backgroundColor = 'green'
   
  })
   



//5. KeyDown  
  const body = document.querySelector('body');
     body.addEventListener('keydown' , (e) => {
        body.style.backgroundColor = 'red'//'# + Math.floor(Math.random()*16777215).toString(16)'
     });






//6. Wheel

const wheel = document.querySelector('p');
     wheel.addEventListener('wheel' , (e) => {
        e.target.style.fontSize = "35px";
     });





//7. mouseout

 const mouseout = document.querySelector('.img-content img');
 mouseout.addEventListener('mouseout' , (e) => {
  alert("mouse out!");
      });


//8. Key up


     const drag = document.querySelector('.home .intro img');
   drag.addEventListener('mouseup', (e) => {
    alert("mouse up over photo bus!");  
  }); 

//9. mousemove

const mousemove = document.querySelector('.home .inverse-content');
   mousemove.addEventListener('mousemove', (e) => {
    alert("mouse move!");  
  }); 



//10. KeyUp

const keyup = document.querySelector('body');
  keyup.addEventListener('keyup', (e) => {
    body.style.backgroundColor = 'white'
  }); 




