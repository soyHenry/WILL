const crearClasePersona = require('../06-07-08.js');

describe('Agregar amigos', function() {
    it('should add a friend with addFriend', function() {
        const Persona = crearClasePersona();
        const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31}]);
        persona.addFriend('Leo', 45);
        expect(persona.amigos[1]).toEqual({ nombre: 'Leo', edad: 45});
    });
    it('should get all friends with getFriends', function() {
      const Persona = crearClasePersona();
      const persona = new Persona('toni', 23, ['futbol'], [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]);
      expect(persona.getFriends()).toEqual(['martin','toni']);
    });
})