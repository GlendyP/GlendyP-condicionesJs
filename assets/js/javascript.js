const seleccionarImagen = document.getElementById("seleccionar_imagen");

const alegriaInput = document.getElementById("alegria_input");
const ansiedadInput = document.getElementById("ansiedad_input");
const furiaInput = document.getElementById("furia-input");
const resultadoStickers = document.getElementById("resultado-stickers");
const botonCalcular = document.getElementById("calcular");

const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");
const password3 = document.getElementById("password-3");
const resultadoPassword = document.getElementById("resultado-password");
const botonIngresar = document.getElementById("ingresar");

seleccionarImagen.addEventListener("click", () => {
  if (seleccionarImagen.style.border) {
    seleccionarImagen.style.border = "";
  } else {
    seleccionarImagen.style.border = "5px solid red";
  }
});

botonCalcular.addEventListener("click", () => {
  const numero1 = parseInt(alegriaInput.value) || 0;
  const numero2 = parseInt(ansiedadInput.value) || 0;
  const numero3 = parseInt(furiaInput.value) || 0;

  const suma = numero1 + numero2 + numero3;

  if (suma <= 10) {
    resultadoStickers.innerHTML = `Llevas ${suma} stickers`;
  } else {
    resultadoStickers.innerHTML = "Llevas demasiados stickers";
  }
});

botonIngresar.addEventListener("click", () => {
if (
    password1.value == 9 &&
    password2.value == 1 &&
    password3.value == 1
  ) {
    resultadoPassword.innerHTML = "Password Correcto 1";
  } 
  else if (
    password1.value == 7 &&
    password2.value == 1 &&
    password3.value == 4
  ) {
    resultadoPassword.innerHTML = "Password Correcto 2";
  } else {
    resultadoPassword.innerHTML = "Password Incorrecto";
  }

});
