 document.addEventListener("DOMContentLoaded", function() {
     document.getElementById("formulario").addEventListener('submit', validarFormulario); 
   });

function validarFormulario(evento) {
  evento.preventDefault();
  var nombre = document.getElementById('nombre').value;
  if (nombre.length < 4) {
    alert('escribe un nombre valido')
    document.getElementById('nombre').focus();
    return 0;
  }
  if (document.getElementById('horac').selectedIndex == 0) {
    alert("Seleccione un rango horario")
    document.getElementById('horac').focus();
    return 0;
  }
  this.submit();
}
function validarCorreo(email) {
  var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var esValido = expReg.test(email);
  if (esValido == false) {
    alert("Ingrese un E-mail valido")
    document.getElementById("email").value = ""
    document.getElementById("email").focus();
    return 0;
  }

}