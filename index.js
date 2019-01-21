var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
 kittens.push(name);
 return kittens;
}
function destructivelyPrependKitten(name){
 return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
  return kittens.pop(name);
}
function destructivelyRemoveFirstKitten(name){
  return kittens.slice(name) ;
}