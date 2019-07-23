const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  
  for(let i=0; i<musicians.length; i++){
    newArr.push(musicians[i]+"plays"+instruments[i]);
  }
  return newArr;
}
