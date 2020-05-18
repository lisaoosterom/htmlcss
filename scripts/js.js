

  /* element selecter
  2 luisteren naar event 
  3 classlist toggle 

  */

 var groen = document.querySelector('#groen');
 var auto = document.querySelector('#auto_3')
 console.log(auto)
 
 groen.addEventListener('click' , toggle);

 function toggle (){
     auto.classList.toggle('auto');
     console.log('test3');
 }


