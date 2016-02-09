
var generateSprints = function(studentList) {

//var studentList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"];
//console.log(studentList);

var doubleList = function(originalList, emptyList) {
  counter = 0;
  while (counter <=1) {
    for (var i = 0; i < originalList.length; i++) {
      emptyList.push(originalList[i]);
      }
      counter++;
  }
  return emptyList;
}


var sprint1 = [];
var sprint2 = [];
var sprint3 = [];
var sprint4 = [];
var sprint5 = [];
var sprint6 = [];
var sprint7 = [];
var sprint8 = [];
var sprint9 = [];
var sprint10 = [];
var sprint11 = [];
var sprint12 = [];
var sprint13 = [];
var sprint14 = [];
var sprint15 = [];

if (studentList.length%2 !== 0) { 
  studentList.push("solo");
} 

//split students in half
var firstHalfStudents = [];
var secondHalfStudents= []; 

for (var i = 0; i < studentList.length/2; i++) {
  firstHalfStudents.push(studentList[i]);
};

for (var i = studentList.length/2; i < studentList.length; i++) {
  secondHalfStudents.push(studentList[i]);
};

//double lists

var secondHalfDoubled = [];
doubleList(secondHalfStudents, secondHalfDoubled);

var firstHalfDoubled = [];
doubleList(firstHalfStudents, firstHalfDoubled)


// console.log("studentList " + studentList);
// console.log("firstHalfStudents " + firstHalfStudents);
// console.log("secondHalfStudents "+ secondHalfStudents);
// console.log("firstHalfDoubled " + firstHalfDoubled);
// console.log("secondHalfDoubled "+ secondHalfDoubled);

for (var i = 0; i < firstHalfStudents.length; i++) {
  sprint1.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i]);
  sprint2.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+1]);
  sprint3.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+2]);
  sprint4.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+3]);
  sprint5.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+4]);
  sprint6.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+5]);
  sprint7.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+6]);
  sprint8.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+7]);
  sprint9.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+8]);
  sprint10.push(firstHalfStudents[i]+ " and "+ secondHalfDoubled[i+9]);
};

// if half of list is odd number, take last item of list and put at front
if (firstHalfStudents.length %2 !== 0) {
  var lastStudent = secondHalfStudents.pop();
  var oldFirstHalfStudents = firstHalfStudents;
  firstHalfStudents = [];
  firstHalfStudents.push(lastStudent);
  for (var i = 0; i < oldFirstHalfStudents.length; i++) {
    firstHalfStudents.push(oldFirstHalfStudents[i]);
  }
}
// redefine doubles if half is redefined
var secondHalfDoubled = [];
doubleList(secondHalfStudents, secondHalfDoubled);

var firstHalfDoubled = [];
doubleList(firstHalfStudents, firstHalfDoubled)

for (var i = 0; i < firstHalfStudents.length; i++) {
  if (i%2 ===0) {
  sprint11.push(firstHalfStudents[i]+ " and "+ firstHalfDoubled[i+1]);
  sprint12.push(firstHalfStudents[i]+ " and "+ firstHalfDoubled[i+3]);
  sprint13.push(firstHalfStudents[i]+ " and "+ firstHalfDoubled[i+5]);
  sprint14.push(firstHalfStudents[i]+ " and "+ firstHalfDoubled[i+7]);
  sprint15.push(firstHalfStudents[i]+ " and "+ firstHalfDoubled[i+9]);
  }
}

for (var i =0; i < secondHalfStudents.length; i++) {
  if (i%2===0) {
  sprint11.push(secondHalfStudents[i]+ " and "+ secondHalfDoubled[i+1]);
  sprint12.push(secondHalfStudents[i]+ " and "+ secondHalfDoubled[i+3]);
  sprint13.push(secondHalfStudents[i]+ " and "+ secondHalfDoubled[i+5]);
  sprint14.push(secondHalfStudents[i]+ " and "+ secondHalfDoubled[i+7]);
  sprint15.push(secondHalfStudents[i]+ " and "+ secondHalfDoubled[i+9]);
}
}

console.log("sprint 1: "+ sprint1);
console.log("sprint 2: "+ sprint2);
console.log("sprint 3: "+ sprint3);
console.log("sprint 4: "+ sprint4);
console.log("sprint 5: "+ sprint5);
console.log("sprint 6: "+ sprint6);
console.log("sprint 7: "+ sprint7);
console.log("sprint 8: "+ sprint8);
console.log("sprint 9: "+ sprint9);
console.log("sprint 10: "+ sprint10);
console.log("sprint 11: "+ sprint11);
console.log("sprint 12: "+ sprint12);
console.log("sprint 13: "+ sprint13);
console.log("sprint 14: "+ sprint14);
console.log("sprint 15: "+ sprint15);

return (sprint1, sprint2, sprint3, sprint4, sprint5, sprint6, sprint7, sprint8, sprint9, sprint10, sprint11, sprint12, sprint13, sprint14, sprint15);
}








