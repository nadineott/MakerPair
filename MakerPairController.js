app.controller('MakerPairController', ['$scope', function($scope) {
  //$scope.function = bla
  //$scope.variable = bla
  $scope.students = new Array;
  $scope.makeStudentsArray = function(students) {
    console.log("IN MAKE STUDENTS ARRAY");
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length-1; i++) {
      var student = inputs[i].value;
        if (student !== "") { 
            students[i] = student;
        }
      }
      console.log(students);
      return students;
    };
}]);