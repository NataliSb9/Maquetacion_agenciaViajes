let usuario = []
function saveData(){
    let name = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let email =document.getElementById("email").value
    let telephone = document.getElementById("telephone").value
    let usuario1 = {
      "nombre": name,
      "apellido": surname,
      "email": email,
      "telefono": telephone,
    };
    usuario.push(usuario1)
    console.log(usuario)
}


let resultado = []
function nameR(){
  for (let i = 0; i<usuario.length; i++) {
    if (usuario[i].nombre.includes("r")) {
      resultado.push(usuario[i].nombre);
    }
  }
  return console.log(resultado)
}

