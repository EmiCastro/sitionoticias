// Tenemos varias funciones armadas que podemos usar:

// obtenerNoticias(): toma todas las noticias de la página
//
// ocultarNoticia(noticia): oculta la noticia pasada como parámetro
// mostrarNoticia(noticia): muestra la noticia pasada como parámetro
//
// contienePalabra(noticia, palabra): devuelve true si la noticia tiene la palabra
// pasada como parámetro
//
// recortarTexto(noticia, cantidadPalabras): recorta el texto de la noticia para
// que su largo sea cantidadPalabras


var noticias = obtenerNoticias();

// Esta función está de muestra para ver como funciona el while
// Sólo se está recorriendo las noticias y cambiándole el color
/*function marcarNoticiasConWhile(){
  var contador = 0;
  // Recorre la variable noticias, iluminando en la que se encuentra en cada momento
  while(contador < noticias.length){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(188, 164, 213)');
    contador++; //contador = contador + 1
  }
}
*/
// Ahora lo mismo pero con un for para ver cuales son las diferencias con el while

/*function marcarNoticiasConFor(){
  for(var contador = 0; contador<noticias.length; contador++){
    noticiaActual = noticias[contador];
    cambiarColor(noticiaActual, 'rgb(235, 190, 162)');
  }
}
*/

// Esta la tienen que hacer, puede ser con while o for
function resaltarNoticiasQueContengan(palabra, color){
  for (var i = 0; i < noticias.length; i++) {
    noticiaActual = noticias[i];
    if (contienePalabra(noticiaActual, palabra)) {
      cambiarColor(noticiaActual, color);
    }
  }
}


// La funcion antes declarada es reutilizable con otra palabra clave y color.
// Acá la llamamos con la palabra "ARGENTINA" y un color celeste.
resaltarNoticiasQueContengan("ARGENTINA", '#59bef7');

// Acá la llamamos con la palabra "robots" y un color anaranjado.
resaltarNoticiasQueContengan("robots", '#f4bc4f');



// Si la noticia incluye la palabra, la ocultamos.
function ocultarNoticiasQueContengan(palabra){
  for (var i = 0; i < noticias.length; i++) {
    noticiaActual = noticias[i];
    if (contienePalabra(noticiaActual, palabra)) {
      ocultarNoticia(noticiaActual)
    }
  }
}


// Una vez declarada la funcion la podemos llamar con la palabra
// que queramos, en este caso "Google".
ocultarNoticiasQueContengan("Google");



// Funcion para recortar las descripciones de los artículos de
// acuerdo al numero de palabras que ingresemos como parámetro.
function recortarNoticias(cantPalabras){
  for (var i = 0; i < noticias.length; i++) {
    noticiaActual = noticias[i];
      recortarTexto(noticiaActual, cantPalabras);
    }
  }


// En este caso el parámetro son 20 palabras.
recortarNoticias(20);

// Acá abajo podés poner las funciones que quieras usar
//marcarNoticiasConWhile()
//marcarNoticiasConFor()
// ...
