" use strict";
const input_search_desc = document.querySelector('.js_insearch_desc');
const descrSearchText = input_search_desc.value;
const input_search_race = document.querySelector('.js_search_race');
const raceSearchText = input_search_race.value;


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

let html = '';

if (kittenRace1 === "" ) {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenRace1;
}; 

const kittenOne = `<li class="card">
          <article>
            <img
              class="card_img"
              src="${kittenImage1}"
              alt="gatito"
            />
            <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
            <h4 class="card_race">${html}</h4>
            <p class="card_description">
                ${kittenDesc1}
            </p>
          </article>
        </li>`;

/* console.log(kittenImage1 + kittenName1 + kittenRace1 + kittenDesc1);  */

if (kittenRace2 === "" ) {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenRace2;
}; 

const kittenTwo = `<li class="card">
         <article>
            <img
              class="card_img"
              src="${kittenImage2}"
              alt="sphynx-cat"
            />
            <h3 class="card_title">${kittenName2.toUpperCase()}</h3>
            <h4 class="card_race">${html}</h4>
            <p class="card_description">
            ${kittenDesc2}
            </p>
            </article>
          </li>`;

if (kittenRace3 === "" ) {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenRace3;
}; 

const kittenThree = `<li class="card">
          <article>
            <img
              class="card_img"
              src="${kittenImage3}"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${kittenName3.toUpperCase()}</h3>
            <h4 class="card_race">${html}</h4>
            <p class="card_description">
            ${kittenDesc3}
            </p>
          </article>
        </li>`;

/*  OPCIÓN 2
<h4 class="card_race">${kittenRace3 === ""? `Uy que despiste, no sabemos su raza` : kittenRace3}</h4> */

const btnPlus = document.querySelector('.js-btn-plus')
btnPlus.addEventListener('click', (event) => {
  event.preventDefault();
  const newForm = document.querySelector('.new-form');

      newForm.classList.toggle('collapsed');
/*    if ( newForm.classList.contains('collapsed')) {
      newForm.classList.remove('collapsed'); 
    }*/
});

  const btnAdd = document.querySelector(".js-btn-add");

  btnAdd.addEventListener('click', (event) => {
    event.preventDefault();
    

    const inputDesc = document.querySelector('.js-input-desc');
    const inputPhoto = document.querySelector('.js-input-photo');
    const inputName = document.querySelector('.js-input-name');
    const labelMessageError = document.querySelector('.js-label-error');

    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
  


    if (valueDesc === '' || valuePhoto === '' || valueName === '') {
      labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
      labelMessageError.classList.add('red');
      console.log(labelMessageError);
    } else {
    }
  });


if( kittenDesc1.includes(descrSearchText) ) {
  jsList.innerHTML+= kittenOne;
  }
  
  console.log(kittenDesc2)
  if( kittenDesc2.includes(descrSearchText) ) {
  jsList.innerHTML+=kittenTwo;
  }
  
  if( kittenDesc3.includes(descrSearchText) ) {
    jsList.innerHTML+=kittenThree;
  }



/*   || kittenRace2 === "" || kittenRace3 === ""  */