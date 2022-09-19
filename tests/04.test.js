const numeroSimetrico = require('../04.js');

describe('numeroSimetrico', function() {
  it('should return true for 4224', function() {
      expect(numeroSimetrico(4224)).toBe(true);
  });
  it('should return false for 2341', function() {
    expect(numeroSimetrico(2341)).toBe(false);
  });
});