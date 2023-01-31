/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
<<<<<<< HEAD

  var array;
var numero;
  let filtrados = array.filter(numero =>  Number.isInteger(numero));
  return filtrados
   console.log(filtrados)


}
=======
    var multi=[]
    var array
    for (let i = 0; i <= array.length; i=i+1) 
      {if((array[i]%2)>=1)
      multi.push(array[i]) 
      }
      return multi
    }
>>>>>>> 8cc1bc106490192ec0bc3a5f58a80aaa4c6aae74

// No modifiques nada debajo de esta linea //


module.exports = soloNumeros