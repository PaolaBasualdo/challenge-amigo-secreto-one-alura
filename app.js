let amigos = [];
let amigo;
let indice;
let listaAmigos;
let resultado;

function agregarAmigo() {
    amigo = document.getElementById('amigo').value;

    if (amigo === ''){
        alert('Por favor, inserte un nombre.')
        return
    }
    amigos.push(amigo);
    limpiarCampo();
    updateListaAmigos();
    
}

function updateListaAmigos() { 
    listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

   for (let i=0; i<amigos.length; i++){ 
        listaAmigos.innerHTML += `
            <li>
            ${amigos[i]}
            </li>
        `;
    };

}


function limpiarCampo(){
    document.getElementById('amigo').value = '';
}



function sortearAmigo(){
    if (amigos.length !=0){
        indice =Math.floor(Math.random()*amigos.length);
        console.log(indice);
    }else{
        alert('La lista de amligos esta vacia');
        return
    }
    resultado = document.getElementById('resultado');
    resultado.innerHTML= amigos[indice];
}



/*
En lugar de modificar innerHTML dentro del bucle (lo que puede ser ineficiente), sería mejor usar createElement() y appendChild(), pero si quieres mantener innerHTML, sería mejor usar map() y join(''):
js
Copiar
Editar
listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
Espaciado y formato del código

Hay algunos puntos donde podrías mejorar la legibilidad.
Código corregido y optimizado:
js
Copiar
Editar
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value.trim(); // Evita espacios en blanco

    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(amigo);
    limpiarCampo();
    updateListaAmigos();
    console.log(amigos);
}

function updateListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function limpiarCampo() {
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigos[indice]}</strong>`;
}
Principales mejoras
✅ Corrige el cálculo del índice aleatorio en sortearAmigo()
✅ Optimiza updateListaAmigos() con map() y join('')
✅ Usa .trim() para evitar agregar nombres vacíos con espacios
✅ Agrega una validación en sortearAmigo() para evitar errores*/

/*Tu código tiene una buena estructura, pero hay algunos errores y detalles que necesitan ser corregidos para que funcione correctamente. Vamos a revisarlo paso a paso y hacer las correcciones necesarias.

Problemas detectados:
Error en el cálculo del índice aleatorio:
En la función sortearAmigo, el cálculo del índice aleatorio está mal:
javascript
Copy
1
indice = Math.floor(Math.random()) * amigos.length + 1;
Aquí, Math.random() genera un número entre 0 y 1, pero al multiplicarlo por amigos.length y sumarle 1, el resultado puede estar fuera del rango válido de índices del array (0 a amigos.length - 1). Además, Math.floor(Math.random()) siempre será 0, lo que hace que el índice sea incorrecto.
Uso incorrecto de template literals en updateListaAmigos:
En el bucle for de updateListaAmigos, los template literals no están correctamente formateados. Deberían estar entre comillas invertidas (`), pero en tu código parece que faltan.
Validación de la lista vacía en sortearAmigo:
Aunque verificas si amigos.length != 0, si la lista está vacía, no muestras ningún mensaje al usuario. Sería mejor mostrar un mensaje indicando que no hay amigos para sortear.
Actualización del resultado en sortearAmigo:
Si el índice calculado es incorrecto, intentar acceder a amigos[indice] puede causar un error o mostrar undefined.
Código corregido:
Aquí tienes la versión corregida de tu código:


let amigos = [];
let amigo;
let indice;
let listaAmigos;
let resultado;

// Función para agregar un amigo
function agregarAmigo() {
    amigo = document.getElementById('amigo').value.trim();
    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(amigo);
    limpiarCampo();
    updateListaAmigos();
    console.log(amigos);
}

// Función para actualizar la lista de amigos en el HTML
function updateListaAmigos() {
    listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `
            <li>
                ${amigos[i]}
            </li>
        `;
    }
}

// Función para limpiar el campo de texto
function limpiarCampo() {
    document.getElementById('amigo').value = '';
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, agrega nombres.');
        return;
    }

    // Calcular un índice aleatorio válido
    indice = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo sorteado
    let amigoSorteado = amigos[indice];

    // Mostrar el resultado en el HTML
    resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
Explicación de los cambios:
Corrección del cálculo del índice aleatorio:
Ahora usamos:
javascript
Copy
1
indice = Math.floor(Math.random() * amigos.length);
Esto genera un número aleatorio entre 0 y amigos.length - 1, que es el rango válido de índices para el array.
Uso correcto de template literals:
En updateListaAmigos, los template literals ahora están correctamente formateados con comillas invertidas (`).
Mensaje para lista vacía:
Si la lista de amigos está vacía, se muestra un mensaje al usuario indicando que debe agregar nombres antes de sortear.
Mostrar el amigo sorteado:
El amigo sorteado se muestra en el elemento con el ID resultado usando innerHTML. También se añade un texto descriptivo (Amigo sorteado:).
HTML necesario:
Para que este código funcione, asegúrate de tener el siguiente HTML:

html
Copy
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
⌄
⌄
⌄
⌄
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorteo de Amigos</title>
</head>
<body>
    <h1>Sorteo de Amigos</h1>
    <div class="input-wrapper">
        <input type="text" id="amigo" placeholder="Escribe un nombre">
        <button onclick="agregarAmigo()">Añadir</button>
    </div>

    <!-- Lista de amigos -->
    <h2>Lista de Amigos:</h2>
    <ul id="listaAmigos"></ul>

    <!-- Botón para sortear -->
    <button onclick="sortearAmigo()">Sortear Amigo</button>

    <!-- Resultado del sorteo -->
    <h2>Resultado:</h2>
    <p id="resultado"></p>

    <script src="script.js"></script>
</body>
</html>
Resultado esperado:
Cuando ingresas un nombre y haces clic en "Añadir":
El nombre se agrega al array amigos.
La lista en el HTML se actualiza automáticamente para mostrar todos los nombres.
Cuando haces clic en "Sortear Amigo":
Si la lista no está vacía, se selecciona un nombre aleatorio y se muestra en el párrafo con el ID resultado.
Si la lista está vacía, se muestra un mensaje indicando que debes agregar nombres.
Ejemplo visual:
Si añades los nombres "Juan", "María" y "Pedro", y luego haces clic en "Sortear Amigo", podrías ver algo como esto:
Copy
1
Amigo sorteado: María
Consejos adicionales:
Estilos CSS:
Puedes personalizar el estilo de la lista y el resultado usando CSS. Por ejemplo:
css
Copy
1
2
3
4
5
6
7
⌄
⌄
ul {
    list-style-type: square; /* Cambia las viñetas a cuadrados 
}
#resultado {
    font-weight: bold; /* Hace el texto del resultado más destacado 
    color: green; /* Cambia el color del texto */
/*}
Evitar duplicados:
Si quieres evitar que se agreguen nombres duplicados, puedes añadir una validación antes de agregar el nombre al array:
javascript
Copy
1
2
3
4
⌄
if (amigos.includes(amigo)) {
    alert('Este nombre ya está en la lista.');
    return;
}
Espero que estas correcciones te ayuden a implementar el sorteo de amigos correctamente. 😊 ¡Dime si tienes más preguntas! 🚀


Ask

Explain





*/