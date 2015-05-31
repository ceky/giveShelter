angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope) {

})

.controller('HomeController', function($scope) {

})

.controller('AsociatiiController', function($scope, $ionicPopup) {

    $scope.asociatii = [
        { title: 'Asociatia Speranta', id: 1 },
        { title: 'Fundatia Arca lui Noe', id: 2 },
        { title: 'Asociatia Tom si Jerry', id: 3 },
        { title: 'Fundatia Romana pentru Cainii Strazii', id: 4 },
        { title: 'Asociatia Nuca', id: 5 }
    ];

    $scope.onClickDeleteAsociatie = function (asociatie) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Stergere',
            template: 'Esti sigur ca doresti sa stergi ' + asociatie.title + '?'
        });
        confirmPopup.then(function(res) {
            if(res) {
                $scope.asociatii.splice($scope.asociatii.indexOf(asociatie), 1);
            } else {
                console.log('You are not sure');
            }
        });
    };

    $scope.showPopup = function() {
        $scope.asociatienew = {};

        var myPopup = $ionicPopup.show({
            template: '<input type="text" placeholder="Introdu numele" ng-model="asociatienew.title">',
            title: 'Adauga o asociatie',
            scope: $scope,
            buttons: [
                {
                    text: 'Renunta',
                    onTap: function (e) {
                        myPopup.close();
                    }
                },
                {
                    text: '<b>Salveaza</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.asociatienew.title) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            $scope.asociatii.push({title: $scope.asociatienew.title});
                            myPopup.close();
                        }
                    }
                }
            ]
        });
    };
});