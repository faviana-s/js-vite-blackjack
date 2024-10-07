import _ from 'underscore';
import { crearDeck } from "./usecases/crear-deck";
import { pedirCarta } from './usecases/pedir-carta';
import { valorCarta } from './usecases/valor-carta';
import { turnoComputadora } from './usecases/turno-computadora';

  
  

    let deck         = [];
    const tipos      = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];
    
    let puntosJugador  = 0;

    //Referencias del HTML
    const btnPedir      = document.querySelector('#btnPedir'),
          btnDetener    = document.querySelector('#btnDetener'),
          btnNuevoJuego = document.querySelector('#btnNuevo');
    
    const divCartasJugador     = document.querySelector('#jugador-cartas'),
          divCartasComputadora = document.querySelector('#computadora-cartas');
    
    const puntosHTML = document.querySelectorAll('small');
    console.log(puntosHTML);
    // Esta funcion iniciliza el juego
    const inicializarJuego = () => {
         deck = crearDeck(tipos,especiales);
    }
    
    
    
        //Eventos
    btnPedir.addEventListener('click', () => {
    
         const carta = pedirCarta (deck );
    
         puntosJugador = puntosJugador + valorCarta( carta );
         puntosHTML[0].innerText = puntosJugador;
    
         const imgCarta = document.createElement('img');
         imgCarta.src = `assets/cartas/${ carta }.png`;
         imgCarta.classList.add('carta');
         divCartasJugador.append(imgCarta);
    
         if ( puntosJugador >21 ){
              console.warn('lo siento, perdiste');
              btnPedir.disabled   = true;
              btnDetener.disabled = true
              turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    
         } else if ( puntosJugador === 21 ) {
              console.warn('21, genial');
              btnPedir.disabled   = true;
              btnDetener.disabled = true
              alert('Jugador gana');
         }
    })
    
    btnDetener.addEventListener('click', () => {
         btnPedir.disabled   = true
         btnDetener.disabled = true
         
         turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
    })
    
    btnNuevoJuego.addEventListener('click', () =>{
        
         console.clear();
         // deck = [];
         // // deck = 
         // crearDeck();
         inicializarJuego();
  
  
         puntosJugador     = 0;
         let puntosComputadora = 0;
    
         puntosHTML[0].innerText = 0;
         puntosHTML[1].innerText = 0;
         
         divCartasComputadora.innerHTML = '';
         divCartasJugador.innerHTML     = '';
    
         
         btnDetener.disabled = false;
         btnPedir.disabled   = false;
    
    
    })
  
  
  