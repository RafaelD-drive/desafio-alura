let amigosIngresados = [];

function agregarAmigo() {
    let amigo = String(document.getElementById("amigo").value).trim(); 

    if (amigo === "") { 

        alert("Por favor, inserte un nombre."); 
        return; 

    } 
    
    amigosIngresados.push(amigo); 
    console.log(amigosIngresados); 
    limpiarCaja();
    mostrarAmigos(); 
}

function limpiarCaja() {

    document.querySelector('#amigo').value = ''; 
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); 


    lista.innerHTML = ""; 

    for (let iterAmigos = 0; iterAmigos < amigosIngresados.length; iterAmigos++) { 


        let li = document.createElement("li"); 

        li.textContent = amigosIngresados[iterAmigos]; 
        lista.appendChild(li); 
    }
}
function sortearAmigo() {

    if (amigosIngresados.length === 0) { 
        alert("No hay amigos disponibles para sortear. Por favor, añada amigos primero.");
        return;


    } else{ 
        // Genera un número aleatorio entre 0 y la longitud del array menos 1


        let indiceAleatorio = Math.floor(Math.random() * amigosIngresados.length);
        
        // Selecciona un amigo al azar
        let amigoSorteado = amigosIngresados[indiceAleatorio];
        
        // Muestra el resultado

        let resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = "";

        let li = document.createElement("li");
        li.textContent = `Tu amigo secreto es: ${amigoSorteado}`; 



        resultadoLista.appendChild(li);
        
    }
}

 
     

