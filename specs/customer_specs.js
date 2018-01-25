const assert = require('assert');
const Customer = require('../customer.js');
const Record = require('../Record.js');
const RecordStore = require('../Record_store.js');

describe('Customer', function(){
  let recordStore;
  let record1;
  let record2;
  let record3;
  let customerOne;

  beforeEach(function(){
    customerOne = new Customer("Phil", 50);
    recordStore = new RecordStore("Rick's Records", "Edinburgh");
    record1 = new Record("jimi hendrix", "little wing", "rock", 12.99);
    record2 = new Record("led zeppelin", "kashmir", "rock", 11.99);
    record3 = new Record("black sabbath", "paranoid", "metal", 10.99);
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
  })

  it('customer can afford record', function(){
    assert.strictEqual(customerOne.canAffordRecord(record1), true)
  })

  it('customer can buy record', function(){
    customerOne.buyRecord(record1);
    assert.strictEqual(customerOne.recordCollection.length, 1)
    assert.strictEqual(customerOne.wallet, 37.01)
  })
  it('can sell record', function(){
    customerOne.buyRecord(record1);
    customerOne.buyRecord(record2);
    customerOne.sellRecord(record2);
    assert.strictEqual(customerOne.recordCollection.length, 1)
    assert.strictEqual(customerOne.wallet, 37.01)
    assert.deepEqual(customerOne.recordCollection, [record1])
  })

  it('can get total value', function(){
    customerOne.buyRecord(record1);
    customerOne.buyRecord(record2);
    customerOne.buyRecord(record3);
    assert.strictEqual(customerOne.collectionValue(), 35.97)
  })
  it('can search collection by genre', function(){
    customerOne.buyRecord(record1);
    customerOne.buyRecord(record2);
    customerOne.buyRecord(record3);
    assert.deepEqual(recordStore.recordByGenre("rock"), [record1, record2])
  })
  it('can get value by genre', function(){
    customerOne.buyRecord(record1);
    customerOne.buyRecord(record2);
    customerOne.buyRecord(record3);
    assert.strictEqual(customerOne.valueByGenre("rock"), 24.98)
  })
  it('can get most expensive album', function(){
    customerOne.buyRecord(record1);
    customerOne.buyRecord(record2);
    customerOne.buyRecord(record3);
    assert.strictEqual(customerOne.mostExpensive(), record1)
  })
})
