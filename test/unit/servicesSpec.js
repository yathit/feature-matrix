'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('myApp.services'));


  describe('database service', function() {
    it('should return current database version', inject(function(database) {
      expect(database.version).toEqual('0.8.2');
    }));
  });

});


