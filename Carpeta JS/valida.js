 document.addEventListener("DOMContentLoaded", function() {
     document.getElementById("formulario").addEventListener('submit', validarFormulario); 
   });

function validarFormulario(evento) {
  evento.preventDefault();
  let nombre = document.getElementById('nombre').value
  let apellido =document.getElementById ('apellido').value
  let telefono =document.getElementById ('telefono').value
  let tlinea =document.getElementById ('tlinea').value
  let horac =document.getElementById ('horac')
  let email =document.getElementById ('email').value
  console.log(nombre,apellido,telefono,tlinea,horac,email)
  if (nombre.length < 4||nombre [0] ==" ") {
    alert('Escribe un nombre válido')
    document.getElementById('nombre').focus();
    return 0;
  }
  if (horac.selectedIndex == 0) {
    alert("Seleccione un rango horario")
    document.getElementById('horac').focus();
    return 0;
  }
  if (!nombre || !apellido || !telefono|| !email){
    alert("Se deben completar todos los datos de contacto")
  }

  this.submit();
}
function validarCorreo(email) {
  let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let esValido = expReg.test(email);
  if (esValido == false) {
    alert("Ingrese un E-mail valido")
    document.getElementById("email").value = ""
    document.getElementById("email").focus();
    return 0;
  }

}