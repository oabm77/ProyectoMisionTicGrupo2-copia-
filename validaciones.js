const form = document.getElementById("form_nuevo_usuario");
let nombre = form.elements.namedItem("dato_nombre_usuario");
let edad = form.elements.namedItem("dato_edad_usuario");
let contrasena = form.elements.namedItem("dato_contrasena");
nombre.addEventListener("input", validar);
edad.addEventListener("input", validar);
contrasena.addEventListener("input", validar);

function validar(e) {
  let functions = {"dato_contrasena":validar_contrasena(e.target.value),
                   "dato_nombre_usuario":validar_nombre_usuario(e.target.value),
                   "dato_edad_usuario":validar_edad_usuario(e.target.value)};
  if(functions[e.target.name]) {
      e.target.classList.add('valido');
      e.target.classList.remove('invalido');
  } else {
      e.target.classList.add('invalido');
      e.target.classList.remove('valido');
  }
}

function validar_contrasena(string){
    const regex = /^[A-Za-z0-9]{6,}$/;
    return regex.test(string);
}
function validar_nombre_usuario(string) {
    const regex = /^[^0-9 ]([A-Za-z ])+[A-Za-z]+$/;
    return regex.test(string);
}
function validar_edad_usuario(edad){
  sw = true;
  if (isNaN(edad) == true){
      sw = false;
  }
  else if (edad <0){
    sw = false;
  }
  else if (edad < 13 || edad > 110 ){
    sw = false;

  }
  return sw;
}
module.exports.validar_nombre_usuario =validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario;