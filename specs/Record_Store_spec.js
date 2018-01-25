const assert = require('assert');
const RecordStore = require('../Record_store.js');
const Record = require('../Record.js');

describe('RecordStore', function(){
  let recordStore;
  let record1;
  let record2;
  let record3;

  beforeEach(function(){
    recordStore = new RecordStore("Rick's Records", "Edinburgh");
    record1 = new Record("jimi hendrix", "little wing", "rock", 12.99);
    record2 = new Record("led zeppelin", "kashmir", "rock", 11.99);
    record3 = new Record("black sabbath", "paranoid", "metal", 10.99);
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
  })

  it('can add record to record store',function(){
    assert.strictEqual(recordStore.inventory.length, 3)
  })

  it('can list inventory', function(){
    assert.deepEqual(recordStore.inventoryList(), [record1, record2, record3])
  })

  it('can sell record', function(){
    recordStore.sellRecord(record1);
    assert.strictEqual(recordStore.balance, 12.99);
  })

  it('can return balance and inventory', function(){
    assert.strictEqual(recordStore.balanceAndInventory(), 35.97);
  })

  it('can search inventory by genre', function(){
    assert.deepEqual(recordStore.recordByGenre("rock"), [record1, record2])
  })





})
