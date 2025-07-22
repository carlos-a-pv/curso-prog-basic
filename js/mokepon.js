let ataqueJugador = "";
let ataqueEnemigo = "";
let resultadoCombate = "";
const btnFuego = document.getElementById('btn-fuego');
const btnAgua = document.getElementById('btn-agua');
const btnTierra = document.getElementById('btn-tierra');

function iniciarJuego() {
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
    let mascotaSeleccionada = "";

    if(mascotas == null) {
        alert('Por favor, selecciona una mascota');
    } else {
        for (let i = 0; i < mascotas.length; i++) {
            if (mascotas[i].checked) {
                mascotaSeleccionada = mascotas[i];
                break;
            }
        }
        spanMascotaJugador.innerHTML = mascotaSeleccionada.id;
    }

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
    let parrafo = document.createElement('p');
    parrafo.innerHTML = `Tu mascota: ${ataqueJugador} - Mascota Enemiga: ${ataqueEnemigo} - ${resultadoCombate}`;
    sectionMensajes.appendChild(parrafo);
} 

function determinarResultado() {
    if (ataqueJugador === ataqueEnemigo) {
        resultadoCombate = "EMPATE 🤝";
    }else if ((ataqueJugador === "Fuego" && ataqueEnemigo === "Tierra") ||
               (ataqueJugador === "Agua" && ataqueEnemigo === "Fuego") ||
               (ataqueJugador === "Tierra" && ataqueEnemigo === "Agua")) {
        resultadoCombate = "GANASTE 🎉";
    } else {
        resultadoCombate = "PERDISTE 😢";
    }
    crearMensaje();
    document.getElementById('reiniciar').style.display = 'block';
}

window.addEventListener('load', iniciarJuego)
