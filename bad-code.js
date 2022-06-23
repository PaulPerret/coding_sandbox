//this function represents a book from an online library
//it has 3 methods to search the book, remove a specific word and change it
//it has 4 attributes, name, author, date and content
//creates libaries stuffz
function elementliBRaryContent(a,b,c,d) {

var bnam = a;var baut = b;
var bdat = c;
var bcont = d;
var self = { findword: function(x) { return bcont.indexOf(x)>=0;},
 findremword: function(y) { return bcont.indexOf(y)>=0?bcont.replace(y + ' ',''):bcont;},
  findrepword: function(z,w) { return bcont.indexOf(z)>=0?bcont.replace(z,w):bcont;},
getbnam: function() {return bnam;},
getbaut: function() {return baut;},
getbdat: function() {return bdat;},
getbcont: function() {return bcont;}
};

return self;
};
