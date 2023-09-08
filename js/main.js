" use strict";
const input_search_desc = document.querySelector('.js_insearch_desc');
const descrSearchText = input_search_desc.value;
const input_search_race = document.querySelector('.js_search_race');
const raceSearchText = input_search_race.value;
let html = '';



const jsList = document.querySelector(".js-list");

/* tarjeta 1 */
const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenDesc1 =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenRace1 = "Siamés";

/* tarjeta 2 */
const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenDesc2 =
 "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenRace2 = "Sphynx";

/* tarjeta 3 */
const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenDesc3 =
 "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenRace3 = "Maine coon";

const kittenOne = `<li class="card">
          <article>
            <img
              class="card_img"
              src="${kittenImage1}"
              alt="gatito"
            />
            <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
            <h4 class="card_race">${kittenRace1}</h4>
            <p class="card_description">
                ${kittenDesc1}
            </p>
          </article>
        </li>`;

/* console.log(kittenImage1 + kittenName1 + kittenRace1 + kittenDesc1);  */

const kittenTwo = `<li class="card">
         <article>
            <img
              class="card_img"
              src="${kittenImage2}"
              alt="sphynx-cat"
            />
            <h3 class="card_title">${kittenName2.toUpperCase()}</h3>
            <h4 class="card_race">${kittenRace2}</h4>
            <p class="card_description">
            ${kittenDesc2}
            </p>
            </article>
          </li>`;

const kittenThree = `<li class="card">
          <article>
            <img
              class="card_img"
              src="${kittenImage3}"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${kittenName3.toUpperCase()}</h3>
            <h4 class="card_race">${kittenRace3}</h4>
            <p class="card_description">
            ${kittenDesc3}
            </p>
          </article>
        </li>`;


if( kittenDesc1.includes(descrSearchText) ) {
  jsList.innerHTML+= kittenOne;
  }
  
  if( kittenDesc2.includes(descrSearchText) ) {
jsList.innerHtml+=kittenTwo;
  }
  
  if( kittenDesc3.includes(descrSearchText) ) {
    jsList.innerHTML+=kittenThree;
  }

  if (kittenRace1 === "" || kittenRace2 === "" || kittenRace3 === "" ) {
    html = `Uy que despiste, no sabemos su raza`;
    jsList.value=html;
  } else {
    html = raza;
  }; 

  console.log(html)