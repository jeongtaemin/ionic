'use strict';
angular.module('starter')

// 로그인페이지
.controller('AccountCtrl', function($scope, LoginService, $state, $rootScope, $window, $localstorage, $http, focus, loadingService, Architimes_app_url){  
    $scope.data = {};

    $scope.login = function() {

        if( !$scope.data.username  || !$scope.data.password ){
            alert("아이디, 비밀번호를 확인해주세요.");
            return false;
        } else {
            loadingService.show();
            $http.post(Architimes_app_url+"/member_proc.php", {
                cType: 'login',
                mem_id: $scope.data.username,
                mem_pw: $scope.data.password
            }).then(function (response) {
                loadingService.hide()
                var result = response.data.records;  
                var authData = new Object();
                authData.m_strCode    = result.strCode;
                authData.m_strId      = result.strId;
                authData.m_intLevel   = result.intLevel;
                authData.m_strType    = result.strType;
                authData.b_level      = result.intLevel;

                $localstorage.set("authData", JSON.stringify(authData));

                alert("로그인 되었습니다.");
                $state.go('main',{},{reload:true});

            }, function error(response){
                loadingService.hide()
                console.log('error' + response)
            });
        }

    }

    $scope.logout = function(){
        var authData = $localstorage.getObject("authData");
        $scope.loginData = authData;
        $localstorage.setObject("authData", null);
        $window.location.reload();
        $state.go('main',{},{reload:true});
    }

    $scope.find_id = function() {
        alert("아이디 찾기")
    }

    $scope.find_pwd = function() {
        alert("비밀번호 찾기")
    }


})
.controller('getAccountCtrl', function($scope, LoginService, $state, $rootScope, $localstorage,  $http, Architimes_app_url){  
    var authData = $localstorage.getObject("authData");
    $scope.loginData = authData;
})