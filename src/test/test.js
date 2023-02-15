const assert = require('assert');

function add(nums) {
  return nums.reduce((prev, curr) => prev + curr, 0);
}

describe('add', function() {
  const tests = [
    {nums: [1,1] , expected: 2},
    {nums: [2, 5], expected: 7},
    {nums: [3, 7], expected: 10}
  ]
  tests.forEach(({nums, expected}) => {
    it('adds correctly', function() {
      const result = add(nums);
      assert.strictEqual(result, expected)
    })
  })
  
})