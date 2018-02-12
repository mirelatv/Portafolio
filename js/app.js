//agregando texto con efecto maquina

var mensaje = " Noelia Tello - Front End developer Jr.", pausa = 200; 
function inicio(){ 
 var i = 0;
 var m = mensaje.split(''); 
 var t = setInterval( 
 function(){ 
 if(i >= m.length-1)clearInterval(t); 
 document.getElementById('efecto').innerHTML+=m[i];
 i++; 
 }, pausa); 
} 
window.onload = inicio; 