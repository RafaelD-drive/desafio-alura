// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombreDeAmigo = []; // Cambia a un array vacío

function agregarAmigo() {
   // alert('Agregado');
    let amigo = String(document.getElementById("amigo").value);
    
    nombreDeAmigo.push(amigo); // Agrega el nombre completo al array
    
    limpiarCaja();
    
    console.log(nombreDeAmigo); // Muestra el array completo
}


function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    
}






 
     

