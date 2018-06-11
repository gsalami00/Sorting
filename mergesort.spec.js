describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here 
    expect(split([1,3,5,7,9,2,4,6,8,10])).toEqual([[1,3,5,7,9], [2,4,6,8,10]]);
    expect(split([1,2,3])).toEqual([[1], [2,3]]);
    expect(split([1])).toEqual([[], [1]]);
    });
  });

  describe('Merge function', function() {
    it('is able to merge arrays into one array', function() {
      // your code here 
    expect(merge([1,3,5,7,9], [2,4,6,8,10])).toEqual([1,2,3,4,5,6,7,8,9,10]);
    expect(merge([1], [2,3])).toEqual([1,2,3]);
    expect(merge([], [1])).toEqual([1]);
    });
  });

  describe('Merge Sort', function() {
  it('handles an empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });
  it('handles an array of size 2', function() {
    expect(mergeSort([5, 4])).toEqual([4, 5]);
  });
  it('handles an array of size n', function() {
    expect(mergeSort([4, 2, 7, 3, 1, 5])).toEqual([1, 2, 3, 4, 5, 7]);
    expect(mergeSort([2, 4, 7, 3, 1, 5, 6, 10, 9, 8])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
    ]);

    
    

  });
});