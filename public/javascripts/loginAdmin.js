/*
 * Created by Welcome on 2/5/2016.
 */

angular.module("App")


    .controller("loginCtrl", function ($scope , $firebaseArray,$firebaseObject,$q) {
        var ref = new Firebase("https://draganddropsdk.firebaseio.com/female")
        
        
                
         $scope.addFemale = function (user) {
           ref.push(user)
        }
            ref.on("value", function (snapshot) {
             $scope.women = snapshot.val()
               console.log($scope.women)
               setTimeout(function(){
                    $scope.$apply()
               },100)
           });
 
 
 
        var maleRef = new Firebase("https://draganddropsdk.firebaseio.com/male")
        $scope.addMale = function (user) {
            maleRef.push(user)
        }
            maleRef.on("value", function (snapshot) {
              $scope.men = snapshot.val()
               console.log($scope.men)
               setTimeout(function(){
                    $scope.$apply()
               },1000)  
            })
        

      $scope.dropSuccessHandler = function($event,index,array){
        var k = Object.keys(array).splice(index,1)
        console.log(k)
          k = k[0];
             maleRef.child(k).remove();
              ref.child(k).remove();
            
   
      };
      
            
      $scope.onDrop = function($event,$data,array){
          maleRef.push($data);
          
      };
       $scope.onDrops = function($event,$data,array){
        //   var key = femaleKey [index]
        //   ref.child(key).set(null);
        //   ref.push($data);
          ref.push($data);
          
      };
    // })
    });

