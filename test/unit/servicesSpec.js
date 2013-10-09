'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('myApp.services'));


  describe('database', function() {
    it('should return current database version', inject(function(version) {
      expect(version).toEqual('0.8.2');
    }));
  });

  describe('utils', function() {
    it('sorting rows', inject(function(utils) {
      var rows = [];
      utils.insertRow(rows, 'c', 'g', '3');
      expect(rows.length).toEqual(1);
      utils.insertRow(rows, 'c', 'g', '3');
      expect(rows.length).toEqual(1);
      utils.insertRow(rows, 'a', 'g', '3');
      expect(rows.length).toEqual(2);
      expect(rows[0].platform).toEqual('a');
      utils.insertRow(rows, 'd', 'g', '3');
      expect(rows.length).toEqual(3);
      expect(rows[2].platform).toEqual('d');
      utils.insertRow(rows, 'd', 'f', '3');
      expect(rows.length).toEqual(4);
      expect(rows[rows.length - 1].browser).toEqual('g');
      expect(rows[rows.length - 2].browser).toEqual('f');
      utils.insertRow(rows, 'd', 'f', '2');
      expect(rows.length).toEqual(5);
      expect(rows[rows.length - 1].version).toEqual('3');
    }));
  });

});


