' use strict';

/* Variables */

const buttonSearch = document.querySelector('.js-button-search');

/* descripción */
const input_search_desc = document.querySelector('.js_in_search_desc');

/* raza */
const input_search_race = document.querySelector('.js_search_race');

const newForm = document.querySelector('.new-form');
const btnPlus = document.querySelector('.js-btn-plus');

const btnAdd = document.querySelector('.js-btn-add');

const listElement = document.querySelector('.js-list');

/* tarjeta 1 */
const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'siamés',
};

/* tarjeta 2 */
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'sphynx',
};

/* tarjeta 3 */

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'maine coon',
};
const kittenDataList = [kittenData_1, kittenData_2, kittenData_3]; // array con los objetos

/* listElement.innerHTML+= renderKitten(kittenDataList[0]);
listElement.innerHTML+= renderKitten(kittenDataList[1]);
listElement.innerHTML+= renderKitten(kittenDataList[2]); */

function renderKittenList(kittenDataList) {
  for (let i = 0; i < kittenDataList.length ; i++) {

  listElement.innerHTML+= renderKitten(kittenDataList[i]);
  }
}

renderKittenList(kittenDataList);

function renderKitten(kittenData) { // <- el objeto 
  const kitten = `<li class="card">
          <article>
             <img
               class="card_img"
               src="${kittenData.image}"
               alt="sphynx-cat"
             />
             <h3 class="card_title">${kittenData.name.toUpperCase()}</h3>
             <h4 class="card_race">${kittenData.race}</h4>
             <p class="card_description">
             ${kittenData.desc}
             </p>
             </article>
           </li>`;
  return kitten;
}

  /* Funciones */

  /* función manejadora del evento */
  const filterKitten = (event) => {
    event.preventDefault();
    const descrSearchText = input_search_desc.value;
    const raceSearchText = input_search_race.value;

    listElement.innerHTML = ''; /* resetea lo anterior */

    for (const kittenItem of kittenDataList) {
      
      if (descrSearchText !== '' && raceSearchText !== '' ) {
        if (kittenItem.desc.includes(descrSearchText) || kittenItem.race.includes(raceSearchText)) {
          listElement.innerHTML += renderKitten(kittenItem);
        }

      } else {
        listElement.innerHTML = `Uy que despiste, no sabemos su raza`; 
      }
      
    }

/*     if (descrSearchText !== '') {
      if (kittenData_1.desc.includes(descrSearchText)) {
        listElement.innerHTML += renderKitten(kittenData_1);
      } else if (kittenData_2.desc.includes(descrSearchText)) {
        listElement.innerHTML += renderKitten(kittenData_2);
      } else if (kittenData_3.desc.includes(descrSearchText)) {
        listElement.innerHTML += renderKitten(kittenData_3);
      }
    }  */

  };

  function showNewCatForm() {
    newForm.classList.remove('collapsed');
  }
  function hideNewCatForm() {
    newForm.classList.add('collapsed');
  }

  function handleClickNewCatForm(event) {
    event.preventDefault();
    if (newForm.classList.contains('collapsed')) {
      showNewCatForm();
    } else {
      hideNewCatForm();
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
      labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
      labelMessageError.classList.add('red');
    } else {
    }
  }



/* listeners/events */
btnPlus.addEventListener('click', handleClickNewCatForm);
btnAdd.addEventListener('click', addNewKitten);

buttonSearch.addEventListener('click', filterKitten);


