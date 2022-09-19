const pluck = require('../05.js');

describe('pluck', function() {
    var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    it('should return ["TV LCD", "Computadora"]', function() {
      expect(pluck(productos, 'name')).toEqual(['TV LCD', 'Computadora']);
    });
    it('should return [100, 500]', function() {
      expect(pluck(productos, 'price')).toEqual([100, 500]);
    });
  });