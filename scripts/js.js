

  /* element selecter
  2 luisteren naar event 
  3 classlist toggle 

  */

  /* var aanmaken en koppelen aan ID , die alleen is gedeclareerd in de html
  dmv event listener laten weten dat er iets moet gebeuren met clcik, namelijk de funcite uit/aan.
   dmv een click de class animatie (class waar in css de animatie is gedefinieerd) laten toggelen,dus aan/uitt*/

 var groen = document.querySelector('#groen');
 var auto = document.querySelector('#auto');

 window.addEventListener("click", autoUitAan);

function autoUitAan() {
    auto.classList.toggle("animate");
 }

 /* Probeersels die niet werkten of niet leuk waren

 var pierSpan = document.querySelector('#spanPier');
 var pier = document.querySelector('#dePierID');
 
 window.addEventListener('onmouseover', dePier);
 
 function dePier (){
    {
     pier.classList.toggle("spanPier");
    }
*/
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

/* zelfde idee als net, maar dan met een keypress evenement en een if statement. 
dus if d z is ingedrukt, toggle de css animatie (class zonnetne en horizontaal). Als dat niet het geval is doe niks */
var zonID = document.querySelector("#zon");
var filter = document.querySelector ('#achtergrondHorizontal');
window.addEventListener('keydown', toggle);


function toggle (event){
   if(event.keyCode == 90){
      zonID.classList.toggle('zonnetje');
      filter.classList.toggle('horizontaal')
   }
   else {
      
  };
}

/* zelfde geld voor deze js als de functie hierboven , maar dan met de spatie toets. */
var vrouwtjes = document.querySelector ('#vrouwtjes');
window.addEventListener('keydown', flip);


function flip (event){
   if(event.keyCode == 32){
      vrouwtjes.classList.toggle('flipVrouwtjes');
   }
   else {
      
  };

}

