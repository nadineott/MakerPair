
//convert all studnet names entered into array called students
var students = new Array;
function makeStudentsArray() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length-1; i++) {
      var student = inputs[i].value;
        if (student !== "") { 
            students[i] = student;
        }
      }
      console.log(students);
      return students;
    }

    //test

