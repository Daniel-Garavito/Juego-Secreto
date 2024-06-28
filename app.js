/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indique un numero del 1 al 10";

function intentosDeUsuario (){
    alert("Boton funcionando");
}*/


//Vamos automatizar el codigo anterior 
let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados=[]; 
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Boton de intento
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('numeroDeUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`¡Acertaste al numero en ${intentos} ${intentos == 1 ? 'Vez' : 'Veces'}`);
        //vamos a poner en funcionamiento el boton de nuevo juego 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto 
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Creamos una funcion para que limpie cada vez que el usuario juegue 
function limpiarCaja(){
    document.querySelector('#numeroDeUsuario').value = ''; 
    
 }

//Crear un numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor((Math.random()*numeroMaximo)+1);

    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}



//Funcion de mensajes iniciales
function condicionesIniciales(){
    
    //Estamos llamando a las funciones e inserrtanto parametros
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Indique un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
    console.log(numeroSecreto);
    
}

//Funcion para reiniciar juego 
function reiniciarJuego(){
    //Limpiar la caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    //Generar el numero aleatorio
    //Iniciar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el booton de nuevoo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);

}

condicionesIniciales();

