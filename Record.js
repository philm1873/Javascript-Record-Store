const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.printProperties = function(){
  return `${this.title} by ${this.artist} is a ${this.genre} album, costing ${this.price}`
}
module.exports = Record;
