const crearClasePersona = require('../06-07-08.js');
  
describe('Agregar hobbies', function() {
    it('should add a hobbie with addHobby', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
        persona.addHobby('hobbie');
        expect(persona.hobbies[1]).toBe('hobbie');
    });
    
    it('should get all hobbies with getHobbies', function() {
      const Persona = crearClasePersona();
      const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
      expect(persona.getHobbies()).toEqual(['futbol']);
    });
})