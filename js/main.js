" use strict";

/* Variables */

const buttonSearch = document.querySelector('.js-button-search');

/* descripción */
const input_search_desc = document.querySelector('.js_in_search_desc');

/* raza */
const input_search_race = document.querySelector('.js_search_race');


const newForm = document.querySelector('.new-form');
const btnPlus = document.querySelector('.js-btn-plus');

const btnAdd = document.querySelector(".js-btn-add");

const listElement = document.querySelector(".js-list");


/* tarjeta 1 */
const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'siamés',
};

/* const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenDesc1 =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenRace1 = "siamés"; */

/* tarjeta 2 */
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc:
 "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
  race:'sphynx'
};

/* const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenDesc2 =
 "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenRace2 = "sphynx"; */

/* tarjeta 3 */

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc:  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  race: 'maine coon',
};

/* const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenDesc3 =
 "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenRace3 = "maine coon"; */

/* let html = ''; */

/* if (kittenRace1 === "" ) {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenRace1;
}; 
 */

const kittenOne = `<li class="card">
          <article>
            <img
              class="card_img"
              src="${kittenData_1.image}"
              alt="gatito"
            />
            <h3 class="card_title">${kittenData_1.name.toUpperCase()}</h3>
            <h4 class="card_race">${kittenData_1.race}</h4> 
            <p class="card_description">
                ${kittenData_1.desc}
            </p>
          </article>
        </li>`;

/* console.log(kittenImage1 + kittenName1 + kittenRace1 + kittenDesc1);  */

/* if (kittenRace2 === "" ) {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenRace2;
}; */ 

const kittenTwo = `<li class="card">
         <article>
            <img
              class="card_img"
              src="${kittenData_2.image}"
              alt="sphynx-cat"
            />
            <h3 class="card_title">${kittenData_2.name.toUpperCase()}</h3>
            <h4 class="card_race">${kittenData_2.race}</h4>
            <p class="card_description">
            ${kittenData_2.desc}
            </p>
            </article>
          </li>`;

/* if (kittenRace3 === "" ) {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenRace3;
};  */

const kittenThree = `<li class="card">
          <article>
            <img
              class="card_img"
              src="${kittenData_3.image}"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${kittenData_3.name.toUpperCase()}</h3>
            <h4 class="card_race">${kittenData_3.race}</h4>
            <p class="card_description">
            ${kittenData_3.desc}
            </p>
          </article>
        </li>`;

/*  OPCIÓN 2
<h4 class="card_race">${kittenRace3 === ""? `Uy que despiste, no sabemos su raza` : kittenRace3}</h4> */


/* Funciones */

/* función manejadora del evento */
const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const raceSearchText = input_search_race.value;

  listElement.innerHTML = ""; /* resetea lo anterior */

  if (descrSearchText !== "" ){
        // falta si no hay descripción ""
    if (kittenData_1.desc.includes(descrSearchText)) {
      listElement.innerHTML += kittenOne;
    } else if (kittenData_2.desc.includes(descrSearchText)) {
      listElement.innerHTML += kittenTwo;
    } else if (kittenData_3.desc.includes(descrSearchText)) {
      listElement.innerHTML += kittenThree;
    };
  } /* else {
    listElement.innerHTML = `Uy que despiste, no sabemos su descripción`;
  } */

  renderRace(raceSearchText);
};

const renderRace = (raceSearchText) => {

  if (raceSearchText !== "" ){
    if (kittenData_1.race.includes(raceSearchText.toLowerCase())) {
      listElement.innerHTML += kittenOne;
    } else if (kittenData_2.race.includes(raceSearchText.toLowerCase())) {
      listElement.innerHTML += kittenTwo;
    } else if (kittenData_3.race.includes(raceSearchText.toLowerCase())) {
      listElement.innerHTML += kittenThree;
    } 
  } /* else {
    listElement.innerHTML = `Uy que despiste, no sabemos su raza`;
  }  */
}


function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}

function handleClickNewCatForm(event){
  event.preventDefault();
     if ( newForm.classList.contains('collapsed')){
    showNewCatForm()
   }
   else { hideNewCatForm()
   }
  }

  function addNewKitten(event) {
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
      
    } else {
    }
  };


  /*  AYUDA!!!  */
  function renderKitten(kittenData) {
   kittenData.image,


/*     image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'siamés', */
  }




/* listeners/events */
btnPlus.addEventListener('click', handleClickNewCatForm); 
btnAdd.addEventListener('click', addNewKitten );

buttonSearch.addEventListener('click', filterKitten);

/* const handleClickDescRace(filterKitten,renderRace); MAL*/


