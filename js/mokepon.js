let ataqueJugador = "";
let ataqueEnemigo = "";
let resultadoCombate = "";
const btnFuego = document.querySelector('.btn-fuego');
const btnAgua = document.querySelector('.btn-agua');
const btnTierra = document.querySelector('.btn-tierra');
const btnReiniciar = document.getElementById('btn-reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const sectionSeleccionarMascota = document.getElementById('elegir-mascota')
const sectionReiniciar = document.getElementById('reiniciar');
const sectionMarcadores = document.getElementById('marcadores')

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none';   
    sectionMarcadores.style.display = 'none';
    // sectionReiniciar.style.display = 'none';

    let btnMascota = document.getElementById('btn-mascota');
    btnMascota.addEventListener('click', seleccionarMascotaJugador);
    
    btnFuego.addEventListener('click', () => {
        // validarSeleccion();
        ataqueJugador = "Fuego";
        ataqueEnemigoAleatorio();
    });

    btnAgua.addEventListener('click', () => {
        ataqueJugador = "Agua";
        ataqueEnemigoAleatorio();
    });


    btnTierra.addEventListener('click', () => {
        ataqueJugador = "Tierra";
        ataqueEnemigoAleatorio();
    });

    btnReiniciar.addEventListener('click', ()=>{
        location.reload();
    })
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function ataqueEnemigoAleatorio(){
    let ataqueAleatorio = aleatorio(1, 3);
    switch (ataqueAleatorio) {
        case 1:
            ataqueEnemigo = "Fuego";
            break;
        case 2:
            ataqueEnemigo = "Agua";
            break;
        case 3:
            ataqueEnemigo = "Tierra";
            break;
    }

    determinarResultado();
}

function seleccionarMascotaJugador() {

    // let mascotaJugador = document.querySelector('input[name="mascota"]:checked');
    // console.log(mascotaJugador.id);
    // if (mascotaJugador.id) {
    //     alert(`Has seleccionado a ${mascotaJugador.id}`);
    // } else {
    //     alert('Por favor, selecciona una mascota');
    // }

    let mascotas = document.querySelectorAll('input')
    let spanMascotaJugador = document.getElementById('mascota-jugador');
    let mascotaSeleccionada;

    for (let i = 0; i < mascotas.length; i++) {
        if (mascotas[i].checked) {
            mascotaSeleccionada = mascotas[i];
            break;
        }
    }
    if(mascotaSeleccionada == null){
        alert("Selecciona una mascota")
    }

    spanMascotaJugador.innerHTML = mascotaSeleccionada.id;
    sectionSeleccionarAtaque.style.display = 'flex';
    sectionSeleccionarMascota.style.display = 'none';
    sectionMarcadores.style.display = 'grid'

    

    seleccionarMascotaEnemigo();

    // if (mascotaSeleccionada) {
    //     alert(`Has seleccionado a ${mascotaSeleccionada.id}`);
    // } else {
    //     alert('Por favor, selecciona una mascota');
    // }
}

function seleccionarMascotaEnemigo() {
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    let mascotaAleatoria = aleatorio(1, 3);
    let mascotaEnemigo = "";

    switch (mascotaAleatoria) {
        case 1:
            mascotaEnemigo = "Hipodoge";
            break;
        case 2:
            mascotaEnemigo = "Capipepo";
            break;
        case 3:
            mascotaEnemigo = "Ratigueya";
            break;
    }

    spanMascotaEnemigo.innerHTML = mascotaEnemigo;
}

function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes');
    sectionMensajes.innerHTML = `${resultadoCombate}`;
} 

function determinarResultado() {
    let vidasMascotaJugador = document.getElementById('vidas-mascota-jugador');
    let vidasMascotaEnemigo = document.getElementById('vidas-mascota-enemigo');

    if (ataqueJugador === ataqueEnemigo) {
        resultadoCombate = "EMPATE 🤝";
    }else if ((ataqueJugador === "Fuego" && ataqueEnemigo === "Tierra") ||
               (ataqueJugador === "Agua" && ataqueEnemigo === "Fuego") ||
               (ataqueJugador === "Tierra" && ataqueEnemigo === "Agua")) {
        resultadoCombate = "GANASTE 🎉";
        vidasMascotaEnemigo.innerHTML = parseInt(vidasMascotaEnemigo.innerHTML) - 1;
    } else {
        resultadoCombate = "PERDISTE 😢";
        vidasMascotaJugador.innerHTML = parseInt(vidasMascotaJugador.innerHTML) - 1;
    }
    
    crearMensaje();
    // document.getElementById('reiniciar').style.display = 'block';

    if (vidasMascotaJugador.innerHTML <= 0 ){
        alert("¡Has perdido! Tu mascota no tiene más vidas.");
        btnFuego.setAttribute('disabled', '')
        btnAgua.setAttribute('disabled', '');
        btnTierra.setAttribute('disabled', '');
        btnReiniciar.removeAttribute('disabled')    
        return;
    }
    if (vidasMascotaEnemigo.innerHTML <= 0) {
        alert("¡Has ganado! La mascota enemiga no tiene más vidas.");
        btnFuego.setAttribute('disabled', '')
        btnAgua.setAttribute('disabled', '');
        btnTierra.setAttribute('disabled', '');
        btnReiniciar.removeAttribute('disabled')
        return;
    }
}

window.addEventListener('load', iniciarJuego)
