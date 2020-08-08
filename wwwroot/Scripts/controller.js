var app = angular.module('myApp', []);
app.controller('myController', function ($scope, $http) {
    $scope.getStates = function () {
    //    $http.get('/v1/GetStateDetails').then(function (response) {
    //      $scope.states = response.data;
    //  }, function (response) {
    //      $scope.states = []
    //  });
        $.get('/v1/GetStateDetails', function (data, status) {
            debugger;
            $scope.states = data;
            $scope.$digest();
        });
    }
    $scope.getStates();
    $(function () {
        $('#files').change(function () {
            debugger;
            var input = this;
            $scope.file = input.files[0];
            $scope.$digest();

        });

    });
    $scope.submitForm = function (item) {
        item.education = []
        if (item.istenth) item.education.push("10th");
        if (item.istwelth) item.education.push("12th");
        if (item.isdegree) item.education.push("Degree");
        if (item.ismaster) item.education.push("Masters");
        delete item.istenth;
        delete item.istwelth;
        delete item.isdegree;
        delete item.ismaster;
        delete item.stateObj.id;

        debugger;
        $http.put('/v1/PutUserDetails', item).then(function (response) {
            alert("Data Uploaded");
        }, function (response) {
                alert("Error in data Upload");
                alert(response.error);
        });
    }
});