const soloNumeros = require('../01.js');

describe('soloNumeros', function() {
  it('should return [1, 2] for [1, "Henry", 2]', function() {
      expect(soloNumeros([1, 'Henry', 2])).toStrictEqual([1, 2]);
  });
  it('should return [1, 3, 2] for [1, "Soy", 3, "Henry", 2]', function() {
    expect(soloNumeros([1,'Soy', 3, 'Henry', 2])).toStrictEqual([1, 3, 2]);
  });
});