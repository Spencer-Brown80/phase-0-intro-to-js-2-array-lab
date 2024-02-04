// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const copyOfCats = cats.slice();
const copyOfCats1 = cats.slice();
const copyOfCats2 = cats.slice();
const copyOfCats3 = cats.slice();

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyAppendCat(name) {
  cats.push("Ralph");
  };

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat() {
    cats.pop();

};
function destructivelyRemoveFirstCat() {
    cats.shift();

};

function appendCat(name) {
    
    copyOfCats.push("Broom");
    return(copyOfCats);
};

function prependCat(name) {
    
    copyOfCats1.unshift("Arnold");
    return(copyOfCats1);
};

function removeLastCat() {
    
    copyOfCats2.pop();
    return(copyOfCats2);
};

function removeFirstCat() {
    
    copyOfCats3.shift();
    return(copyOfCats3);
};

