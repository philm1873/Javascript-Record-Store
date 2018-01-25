const assert = require('assert');
const Record = require('../Record.js');

describe('Record', function(){
  let record1;
  let record2;
  let record3;

  beforeEach(function(){
    record1 = new Record("jimi hendrix", "little wing", "rock", 12.99);
    record2 = new Record("led zeppelin", "kashmir", "rock", 11.99);
    record3 = new Record("black sabbath", "paranoid", "metal", 10.99);
  })

  it('can print record properties', function(){
    assert.strictEqual(record1.printProperties(), "little wing by jimi hendrix is a rock album, costing 12.99")
  })

})
