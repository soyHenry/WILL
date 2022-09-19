const crearClasePersona = require('../06-07-08.js');

  describe('crearClasePersona', function() {
    it('should return a user constructor that correctly builds user objects', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
        expect(persona.nombre).toBe('toni');
        expect(persona.edad).toBe(23);
        expect(persona.hobbies).toEqual(['futbol']);
        expect(persona.amigos).toEqual([{nombre:'martin', edad: 31}]);
    });

    it('should get age average with getPromedioEdad', function() {
      const Persona = crearClasePersona();
      const persona = new Persona('toni', 23, ['futbol'], [{
          nombre: 'toni',
          edad: 33,
        }, {
          nombre: 'Emi',
          edad: 25
        }]);
      expect(persona.getPromedioEdad()).toBe(29);
    });
  });