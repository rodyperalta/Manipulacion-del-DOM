//Seleccion por id
let elementoporid = document.getElementById('parrafo1');
elementoporid.innerHTML='HTML';

//Seleccion por nombre de clase
let elementoporclase = document.getElementsByClassName('parrafos');
console.log(elementoporclase.length);
elementoporclase[1].innerHTML  ='CSS';

//Seleccion por etiqueta
let elementosporetiquetas=document.getElementsByTagName('p');
console.log(elementosporetiquetas.length);  
elementosporetiquetas[2].innerHTML='JAVASCRIPT';

//Modificacion de estilos
elementoporid.style.background='black';
elementoporid.style.color='white';
elementoporid.style.borderRadius='8px';
elementoporid.style.width='250px';
elementoporid.style.textAlign='center';