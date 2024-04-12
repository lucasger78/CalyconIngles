
// // PRUEBA EN INGLÉS

// const flagsElement = document.getElementById("flags");
// const textsToChange = document.querySelectorAll("[data-section]");

// const changeLanguage = async (language) => {
//   const requestJson = await fetch(`js/${language}.json`);
//   const texts = await requestJson.json();

//   for (const textToChange of textsToChange) {
//     const section = textToChange.dataset.section;
//     const value = textToChange.dataset.value;
//     textToChange.innerHTML = texts[section][value];
//   }

//   // Almacena el idioma seleccionado en el almacenamiento local del navegador
//   localStorage.setItem("selectedLanguage", language);
// };

// const loadLanguage = () => {
//   // Obtiene el idioma seleccionado almacenado en el almacenamiento local del navegador
//   const selectedLanguage = localStorage.getItem("selectedLanguage");

//   if (selectedLanguage) {
//     changeLanguage(selectedLanguage);
//   } else {
//     // Establece el idioma inglés como predeterminado si no se ha seleccionado ninguno
//     changeLanguage("en");
//   }
// };

// flagsElement.addEventListener("click", (e) => {
//   changeLanguage(e.target.parentElement.dataset.language);
// });

// // Carga el idioma al cargar la página
// loadLanguage();

//////////////////// PRUEBA 2 EN INGLES ////////////////////////////

// const flagsElement = document.getElementById("flags");
// const textsToChange = document.querySelectorAll("[data-section]");

// const changeLanguage = async (language) => {
//   console.log("Cambiando idioma a:", language);
//   const requestJson = await fetch(`js/${language}.json`);
//   const texts = await requestJson.json();

//   for (const textToChange of textsToChange) {
//     const section = textToChange.dataset.section;
//     const value = textToChange.dataset.value;
//     textToChange.innerHTML = texts[section][value];
//   }

//   // Almacena el idioma seleccionado en el almacenamiento local del navegador
//   localStorage.setItem("selectedLanguage", language);
// };

// const loadLanguage = () => {
//   // Obtiene el idioma seleccionado almacenado en el almacenamiento local del navegador
//   let selectedLanguage = localStorage.getItem("selectedLanguage");

//   console.log("Idioma seleccionado:", selectedLanguage);

//   if (!selectedLanguage) {
//     console.log("No hay idioma seleccionado, estableciendo inglés como predeterminado");
//     // Si no hay un idioma seleccionado, establece inglés como predeterminado
//     selectedLanguage = "en";
//     localStorage.setItem("selectedLanguage", selectedLanguage);
//   }

//   changeLanguage(selectedLanguage);
// };

// flagsElement.addEventListener("click", (e) => {
//   changeLanguage(e.target.parentElement.dataset.language);
// });

// // Carga el idioma al cargar la página
// loadLanguage();
// ;

/////////////////PRUEBA 3 EN INGLES//////////////////

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  console.log("Cambiando idioma a:", language);
  const requestJson = await fetch(`js/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }

  // Almacena el idioma seleccionado en el almacenamiento local del navegador
  localStorage.setItem("selectedLanguage", language);
};

const loadLanguage = () => {
  // Establece siempre el idioma en inglés al cargar la página
  const selectedLanguage = "en";
  console.log("Cargando idioma en inglés");
  changeLanguage(selectedLanguage);
};

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});

// Carga el idioma al cargar la página
loadLanguage();


