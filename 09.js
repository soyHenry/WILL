/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  var productos = [{
    price: 100,
    name: 'tv'
  }, {
    price: 50,
    name: 'phone'
  }, {
    price: 30,
    name: 'lamp'
  }];
  
  // Definir el método antes de ejecutar
  Array.prototype.filtrar = function(cb) {
    // Crear el arreglo que se va a devolver
    let newArray = [];
    // Recorrer elementos actuales
    this.forEach(item => {
        // Analizar el resultado de la función de retorno o "callback"
        if(cb(item)) {
            // Si devuelve verdadero, agregar elemento
            newArray.push(item);
        }
    });
    // Devolver arreglo filtrado
    return newArray;
  };
  
  // Ejecutar método de filtro proporcionando función de retorno o "callback"
  let filtrado = productos.filtrar(function(p) {
    // Incluir solo productos que cumplen esta condición
    return p.price >= 50;
  });
  
  // Mostrar resultado
  console.log(filtrado);
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

};

// No modifiques nada debajo de esta linea //

module.exports = filtrar