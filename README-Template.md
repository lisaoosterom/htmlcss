# Web Animatie | Lisa Oosterom

Het vak web animatie is onderdeel van de (laatste) periode van de minor visual interface design, aan de hva. 
Voor het vak web animatie kreeg ik de oprdacht een kunstwerkje te animeren op basis van svg's in voornamelijk css. 

## Mijn kunstwerkje

Mijn kunstwerkje heb ik gevonden op pinterest (https://nl.pinterest.com/pin/530721137342038093/), het is een poster van Scheveningen uit de jaren '60. 
! [] (images/52ffe69cdaa428b1542be68814941eefd9bf0c25_492x779.png)



Na wat research ben ik er achter gekomen dat de poster waarschijnlijk is gemaakt op Scheveningen weer populair te maken, nadat de buitenland vakanties in de jaren '60 erg populair waren. De hotels op Scheveningen kwamen leeg te staan, dit is natuurlijk niet de bedoeling. Samen met mijn gekozen poster was er nog een poster met hoogst waarschijnlijk hetzelfde doel gemaakt. 

! [] (images/4a9f16df6b53b3e5701a798688c53f2e78bb6ab3_492x736.jpg) 
Ik zelf ben opgegroeid in Den Haag en woon hier dan nog steeds en ik kan beamen hoe geweldig het strand in Den Haag is, de poster trok mij vandaar erg aan. Ook had ik bij de opdracht voor Typografie van Diederik Corvers een vergelijkbaar font uitgekozen waardoor de stijl van de poster mij ook erg aansprak.

Mijn eerste gedachten qua interactie was de golfjes laten wiggelen, de zon onder en op laten gaan, de autos laten bewegen en de vrouwtjes laten bewegen wanneer er gehoovert wordt bv..



### Digitaliseren en responsive maken

Als eerste ben ik aan de slag gegaan met (delen van) mijn poster over te trekken in illustrator , de lagen die ik sowiso al wilde animeren heb ik handige namen gegeven. Ook heb ik een eigen draai aan de poster gegeven door de Pier er bij te illustreren, dit geeft het extra Scheveningen gevoel voor mij. De illustratie had ik in eerste instantie vertical gemaakt, omdat de poster dat ook is, nadat ik de svg heb ingeladen in mijn code editor kwam ik erachter dat een svg schalen niet erg gemakkelijk ging. Toen heb ik besloten de achtergrond horizontaal en verticaal te maken. Zo kan ik de drie vrouwtjes over de achtergrond plakken en zal het kunstwerk niet in gekke verhoudingen gepresenteerd worden. 

Ik vond de svg's die uit illustrator kwamen niet fijn werken, op internet vond ik al snel dat dit via figma veel fijner kon, dus heb ik de svg uit illustrator telkens in figma geplaatst en opnieuw als svg geexporteerd. Door middel van media querry's heb ik de twee verschillende formaten hiden en showen bij bepaalde schermbreedtes. 
Ook heb ik de tekst kleur van Scheveningen en the hague aangepast op mobiel formaat , omdat dit slecht leesbaar was door het lage contrast met de gezichten.

```
@media screen and (max-width: 767px) {
    #achtergrondVertical  {
        opacity: 1;
       
    }
    #achtergrondHorizontal{
        opacity: 0;
    }
   
}

```
### Coderen 

Nadat mijn svg's netjes in mijn html waren geladen, kon ik aan de slag met coderen van mijn animaties. 
Ik begon eerst met wat simpele animaties zoals de vrouwtjes laten bewegen na een hover state.


#animatie met pseudo elements :hover & :active

Animatie vrouwtjes 
 
```
#vrouwtjeBlauw:hover {
    transform: translateX(-20px);
    transform: translateY(10px);
}

#vrouwtjeBlauw:active #Vector_3  {
    fill: #e5dcdd;
}


```

Later leerde ik over de keyframe animaties dit paste ik toe bij de autotjes en golfjes. 
#animatie met keyframes: 
```
#golfjes {
    animation: golfjesFloat 5s infinite ease;
}
@keyframes golfjesFloat{
    from {
        transform: translate(0, 0px)
    }
    50% {
        transform: translate(5px, 15px);
    }
    100% {
        transform: translate(0, -0px)
    }
}

```
Later heb ik met behulp van Danny de Vries en Javascript mijn eerste javascript regels geschreven om de auto animatie te laten pauzeren en afspelen. 
Doordat ik twee achtergronden had met dezelfde id's, omdat ik de laag namen was vergeten lukte de js niet direct, omdat hij gelikt was aan het verkeerde id.

#Toggle animatie :
```
 var groen = document.querySelector('#groen');
 var auto = document.querySelector('#auto');

 window.addEventListener("click", autoUitAan);

function autoUitAan() {
    auto.classList.toggle("animate");
 }
```



Waar ik wel tegen aan liep was de teksten aan de zijkant, hoe ik ze helemaal aan de zijkanten kon laten uitlijnen lukte mij niet. Ik probeerde dit eerst door transform:rotate(180deg), een klasgenoot vertelde mij dat het makkelijker ging met 
```translate  writing-mode: vertical-rl; & transform: scaleX(-1) scaleY(-1); 

```
Het leek mij wel tof om een soort sunset filter over de poster te animeren tegelijker tijd met de ondergaande zon. Dit heb ik gedaan met css animatie en keyframes. Om nog een vorm van interactie toe te passen heb ik besloten om deze twee animaties te laten triggeren op het moment dat de z van zon wordt ingedrukt . 

#keycode trigger met twee animaties : 
```
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


```

## Bronnen Kunstwerkje

* [poster] (https://nl.pinterest.com/pin/530721137342038093/)
* [poster zelfde serie ] (https://nl.pinterest.com/pin/487373990911161510/ )
* Informatie Scheveningen / achtergrond info (https://docplayer.nl/112627448-Scheveningen-badplaats.html )


## Bronnen code

*[animatie's met keyframes] (https://css-tricks.com/almanac/properties/a/animation/)
*[sepia filter] (https://css-tricks.com/almanac/properties/b/backdrop-filter/)
*[hide / toggle js]( https://timdej0ng.github.io/web-animation-19-20/index.html )



