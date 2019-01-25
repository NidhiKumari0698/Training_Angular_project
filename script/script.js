
var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
   
   
    
    $scope.empArray=[];
   
    
    $scope.mySubmit=function()
    {
        if(JSON.parse(localStorage.getItem('sample_data')!=null))
        {
            $scope.empArray=JSON.parse(localStorage.getItem('sample_data'));
        }
        var emp={};
        emp.id=$scope.id;
        emp.name=$scope.name;
        emp.city=$scope.city;
        emp.email=$scope.email;
        // emp.theFilename=$scope.theFilename;
        emp.img=$scope.img;
        
        // emp.imageSrc=$scope.imageSrc;
        $scope.empArray.push(emp);
        $scope.id='';
        $scope.name='';
        $scope.city='';
        $scope.email='';
        $scope.img="#";
        var fileElement = angular.element('#myfile');
        angular.element(fileElement).val(null);
        localStorage.setItem("sample_data", JSON.stringify($scope.empArray));
        console.log("id is:"+$scope.id);
    };
    $scope.load=function()
    {
        if(JSON.parse(localStorage.getItem('sample_data')!=null))
        {
            $scope.empArray=JSON.parse(localStorage.getItem('sample_data'));
        }
    };
    $scope.deleteRow=function(emps1)
    {
        alert('Delete it!');
        $scope.empArray.splice($scope.empArray.indexOf(emps1), 1);
        localStorage.setItem("sample_data", JSON.stringify($scope.empArray));

    };
    $scope.editRow=function(emps2)
    {
        alert('edit it');
        $scope.id=emps2.id;
        $scope.name=emps2.name;
        $scope.city=emps2.city;
        $scope.email=emps2.email;
        // $scope.theFilename=emps2.theFilename;
        $scope.img=emps2.img;
        
        $scope.empArray.splice($scope.empArray.indexOf(emps2), 1);
        localStorage.setItem("sample_data", JSON.stringify($scope.empArray));
    };
    $scope.imageUpload = function (event) {
        var files = event.target.files;

        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            var reader = new FileReader();
            reader.onload = $scope.imageIsLoaded;
            reader.readAsDataURL(file);
        }
    };
    
    $scope.imageIsLoaded = function (e) {
        $scope.$apply(function () {
            $scope.img = e.target.result;            
        });
    };
    
    
});
