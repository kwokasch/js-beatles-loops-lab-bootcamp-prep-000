const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  
  for(let i=0; i<musicians.length; i++){
    newArr.push(musicians[i]+"plays"+instruments[i]);
  }
  return newArr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var result = [];
  
  for(let i=0; i<facts.length; i++){
    result.push(test[i]+'!!!');
  }
  return result;
}