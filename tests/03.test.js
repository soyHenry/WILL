const buscarAmigo = require('../03.js');

describe('buscarAmigo', function() {
    var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];

    it('should return "{ nombre: "toni", edad: 33 }"', function() {
      expect(buscarAmigo(amigos, 'toni').nombre).toBe('toni');
    });
    it('should return "{ nombre: "Emi", edad: 25 }"', function() {
      expect(buscarAmigo(amigos, 'Emi').nombre).toBe('Emi');
    });
  });