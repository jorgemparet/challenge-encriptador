const btnEncriptar = document.querySelector(".operaciones__botones__encriptar");
const txtEncriptar = document.querySelector(".operaciones__texto");
const aviso = document.querySelector(".operaciones__aviso__texto");
const respuesta = document.querySelector(".resultado__evaluar");
const contenido = document.querySelector(".resultado__contenedor");
const btnCopiar = document.querySelector(".resultado__copiar");
const btnDesencriptar = document.querySelector(
  ".operaciones__botones__desencriptar"
);

// Encriptar//

btnEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = txtEncriptar.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  if (texto == "") {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = "El campo de texto no debe estar vacio";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else if (texto !== txt) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = "No debe tener acentos y caracteres especiales";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else if (texto !== texto.toLowerCase()) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = "El texto debe ser todo en minúscula";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else {
    texto = texto.replace(/e/gm, "enter");
    texto = texto.replace(/i/gm, "imes");
    texto = texto.replace(/a/gm, "ai");
    texto = texto.replace(/o/gm, "ober");
    texto = texto.replace(/u/gm, "ufat");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
  }
});

//Desencriptar//

btnDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let texto = txtEncriptar.value;
  let txt = texto
    .normalize("NFD")
    .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

  if (texto == "") {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = "El campo de texto no debe estar vacio";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else if (texto !== txt) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = "No debe tener acentos y caracteres especiales";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else if (texto !== texto.toLowerCase()) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = "El texto debe ser todo en minúscula";

    setTimeout(() => {
      aviso.removeAttribute("style");
    }, 1500);
  } else {
    texto = texto.replace(/enter/gm, "e");
    texto = texto.replace(/imes/gm, "i");
    texto = texto.replace(/ai/gm, "a");
    texto = texto.replace(/ober/gm, "o");
    texto = texto.replace(/ufat/gm, "u");

    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
  }
});

//Copiar//

btnCopiar.addEventListener("click", (e) => {
  e.preventDefault();
  let copiar = respuesta;
  copiar.select();
  document.execCommand("copy");
});
