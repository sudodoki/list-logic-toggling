var subject = require('../')

describe('list logic', function () {
  it('should be defined', function () {
    expect(subject).toBeDefined();
  })
  it('should be a function', function () {
    expect(typeof subject).toBe('function');
  })
  describe('given a list of length bigger than limit', function () {
    var limit = 3, items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    describe('when range to take lies inside array', function () {
      var offset = 2, result;
      beforeEach(function () {
        result = subject(items, offset, limit);
      })
      it('should return a subset of array ([3,4,5] for [1..9], 2, 3)', function (){
        expect(result).toEqual([3, 4, 5])
      })
    })
    describe('when range should cover end of the array and beyond', function () {
      var offset = 8, result;
      beforeEach(function () {
        result = subject(items, offset, limit);
      })
      it('should return a subset of array ([9,1,2] for [1..9], 8, 3)', function (){
        expect(result).toEqual([9, 1, 2])
      })
    })
    describe('when range should cover start of the array and previous', function () {
      var offset = -1, result;
      beforeEach(function () {
        result = subject(items, offset, limit);
      })
      it('should return a subset of array ([9,1,2] for [1..9], -1, 3)', function (){
        expect(result).toEqual([9, 1, 2])
      })
    })
  })
  describe('given a list of length smaller than limit', function () {
    var limit = 5, items = [1, 2, 3, 4]
    describe('when offset is in range of items', function () {
      var offset = 0, result;
      beforeEach(function () {
        result = subject(items, offset, limit);
      })
      it('should return a subset of array ([1, 2, 3, 4] for [1..4], 0, 5)', function (){
        expect(result).toEqual([1, 2, 3, 4])
      })
    })
    describe('when offset is negative', function () {
      var offset = - 2, result;
      beforeEach(function () {
        result = subject(items, offset, limit);
      })
      it('should return a subset of array ([3, 4, 1, 2] for [1..4], -2, 5)', function (){
        expect(result).toEqual([3, 4, 1, 2])
      })
    })
    describe('when offset + limit is beyond range', function () {
      var offset = 2, result;
      beforeEach(function () {
        result = subject(items, offset, limit);
      })
      it('should return a subset of array ([3, 4, 1, 2] for [1..4], 3, 5)', function (){
        expect(result).toEqual([3, 4, 1, 2])
      })
    })
  })
})