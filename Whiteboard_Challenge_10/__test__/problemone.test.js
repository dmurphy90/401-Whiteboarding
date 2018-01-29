'use strict';

const problemOne = require('../lib/problemone.js');
require('jest');

describe('Problem One Module', function() {
  describe('#checkBrace', function() {
    it('Should check that a valid input is provided', function() {
      expect(problemOne.checkBrace()).toBeNull();
      expect(problemOne.checkBrace(7)).toBeNull();
      expect(problemOne.checkBrace([])).toBeNull();
    });
    it('Should return true with equal amount of open and closing mustache braces', function() {
      expect(problemOne.checkBrace('{a}{b}{c}')).toBe(true);
      expect(problemOne.checkBrace('{dog}{{cat}}{}')).toBe(true);
    });
    
    it('Should return false with an unequal amount of open and closing mustache braces', function() {
      expect(problemOne.checkBrace('{{a}{b}{c}')).toBe(false);
      expect(problemOne.checkBrace('{tim}{{tim}')).toBe(false);
    });
  });
});


