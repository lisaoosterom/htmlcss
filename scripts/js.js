

  /* element selecter
  2 luisteren naar event 
  3 classlist toggle 

  */

 var groen = document.querySelector('#groen');
 var auto = document.querySelector('#auto');

 
 window.addEventListener("click", autoUitAan);
console.log(autoUitAan);
function autoUitAan() {
     auto.classList.toggle("animate");
     console.log('hoi');
 }

 /*
 document.addEventListener("keydown", function(event) {
  console.log(event.which);
})


document.addEventListener('keyup', function (event) {
  if (event.defaultPrevented) {
      return;
  }

  var key = event.key || event.keyCode;

  if (key === 'Escape' || key === 'Esc' || key === 27) {
      kleur.classList.toggle('badpak');

  }
});

BADPAK KLEUR

var kleurBadpak = document.querySelector("#Vector_12");
window.addEventListener('keydown', toggle);

function toggle (event){
   if(event.keyCode == 83){
      kleurBadpak.classList.toggle('badpak');
   }
   else {
      
  };
}
*/
var zonID = document.querySelector("#zon");
var filter = document.querySelector ('#achtergrondHorizontal');
window.addEventListener('keydown', toggle);
window.addEventListener('touchstart', toggle, false);


function toggle (event){
   if(event.keyCode == 90){
      zonID.classList.toggle('zonnetje');
      filter.classList.toggle('horizontaal')
   }
   else {
      
  };
}


