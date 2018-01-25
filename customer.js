const Customer = function(name, wallet){
  this.name = name;
  this.wallet = wallet;
  this.recordCollection = [];
}

Customer.prototype.canAffordRecord = function(record) {
  return (this.wallet >= record.price);
}

Customer.prototype.buyRecord = function(record){
  if (this.canAffordRecord){
    this.wallet -= record.price;
    this.recordCollection.push(record);
  }
}
Customer.prototype.sellRecord = function(record){
  this.wallet += record.price;
  var index = this.recordCollection.indexOf(record);
  this.recordCollection.splice(index, 1);
}
Customer.prototype.collectionValue = function(){
  var priceArray = this.recordCollection.map(record => record.price);
  return priceArray.reduce(function(accumulator, currentvalue){
    return accumulator + currentvalue;
  })
}

Customer.prototype.recordByGenre = function(genre){
    return this.recordCollection.filter(function(record){
      return record.genre === genre;
  })
}

Customer.prototype.valueByGenre = function(genre){
  var genreArray = this.recordByGenre(genre);
  var valueArray = genreArray.map(record => record.price);
  return valueArray.reduce(function(accumulator, currentvalue){
    return accumulator + currentvalue;
  })
}

Customer.prototype.mostExpensive = function(){
  var mostExpensive = this.recordCollection[0];
  this.recordCollection.forEach(function(record){
    if (record.price > mostExpensive.price){
      mostExpensive = record;
    }
  })
  return mostExpensive;
}

Customer.prototype.orderValueDescend = function(){
  return this.recordCollection.sort(function(a, b){
    return b.price - a.price;
  })
}

Customer.prototype.orderValueAscend = function(){
  return this.recordCollection.sort(function(a, b){
    return a.price - b.price;
  })
}
Customer.prototype.compareCollection = function(otherguyValue){
  return(this.collectionValue() > otherguyValue);
}


module.exports = Customer;
