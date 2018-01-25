const Record = require('./Record.js')

const RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.addRecord = function(record){
  this.inventory.push(record);
}

RecordStore.prototype.inventoryList = function(){
  return this.inventory;
}

RecordStore.prototype.sellRecord = function(album){
  this.balance += album.price;
}

RecordStore.prototype.balanceAndInventory = function(){
  var total = 0;
  for(let album of this.inventory){
    total += album.price
  }
  return total + this.balance;
}

RecordStore.prototype.recordByGenre = function(genre){
  return this.inventory.filter(function(record){
    return record.genre === genre;
  })
}



module.exports = RecordStore;
