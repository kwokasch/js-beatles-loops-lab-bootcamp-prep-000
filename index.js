const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments) {
  var newArr = [];
  
  for (var i = 0; i < musicians.length; i++){
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts (arr) {
  var result = [];
  var i = 0; 
  
  while(i < arr.length) {
    result.push(arr[i]+'!!!') 
    i++;
  }
  return result;
}

function iLoveTheBeatles (number) {
  let newArray = [];
  
  do{
    newArray.push(`I love the Beatles!`); 
    number++;
  } while (number < 15);
  
  return newArray;
}
