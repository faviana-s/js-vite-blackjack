import { pedirCarta } from './pedir-carta'
import { valorCarta } from './valor-carta'

 //turno de la computadora
 export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {
         
    if (!puntosMinimos) throw new Error ('Puntos minimos son necesarios');
    if (!puntosHTML) throw new Error ('Argumento PuntosHTML es necesarios')

let puntosComputadora = 0;

    do {
         const carta = pedirCarta( deck );
         puntosComputadora = puntosComputadora + valorCarta( carta );
         console.log(puntosHTML);
         puntosHTML.innerText = puntosComputadora;
         const imgCarta = document.createElement('img');
         imgCarta.src = `assets/cartas/${ carta }.png`;
         imgCarta.classList.add('carta');
         divCartasComputadora.append(imgCarta);

         if( puntosMinimos >21){
              break
         }
    
    } while (( puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21 ))
         
    setTimeout(() => {
         
         if(puntosComputadora === puntosMinimos){
              alert('Empate') 
         }else if (puntosMinimos > 21 ){
              alert('Computadora gana')
         } else if ( puntosComputadora > 21){
              alert('Jugador gana')} 
              else {alert('Computadora gana')};
         
         }, 100 );     
         }