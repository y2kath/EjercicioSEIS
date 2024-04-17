function calcularEdad() {
    var fechaNacimiento = document.getElementById("birthdate").value;
    var fechaActual = new Date();
    var fechaNacimiento = new Date(fechaNacimiento);
    var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    var mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
  
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
  
    document.getElementById("resultado").innerHTML = "Tu edad es: " + edad + " años.";
  }
  