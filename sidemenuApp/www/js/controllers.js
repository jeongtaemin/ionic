angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ShareCtrl', function($scope) {

  var message = '메시지';
  var subject = 'subject';
  var image = 'https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png';
  var link = 'http://www.google.com';

  $scope.facebookShare=function(){
    window.plugins.socialsharing.shareViaFacebook(
     message, 
      null /* image */, 
      link,
       null, 
       function(errormsg){alert("Error: Cannot Share")});
  }
  $scope.twitterShare=function(){
    window.plugins.socialsharing.shareViaTwitter(
        message, 
        null /* image */, 
        link, null, 
        function(errormsg){alert("Error: Cannot Share")}
      );
  }
  $scope.OtherShare=function(){
    window.plugins.socialsharing.share(message, null, null /* image */, link);
  }

})

.controller('socialLoginCtrl', function($scope, ngFB, $http, $state, $ionicPopup, LoginSvc) {
  //functions
  $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  $scope.kakaoLogin = function () {
      String.prototype.startsWith = function (str) {
        return this.indexOf(str) == 0;
      };

      var ref = LoginSvc.kakaoLogin();
      console.log('1')
      ref.addEventListener('loadstart', function (event) {
        if ((event.url).startsWith(redirectUri)) {
          reqToken = (event.url).split("code=")[1];
          LoginSvc.getKakaoAccToken(reqToken)
            .then(function (response) {
              console.log('2')
              accToken = response.access_token;
              LoginSvc.getKakaoUserInfo(accToken)
                .then(function (response) {
                  $state.go('main');
                });
            }, function (data, status) {
              var alertPopup = $ionicPopup.alert({
                title: 'Login Fail!',
                template: "data: " + data + "event: " + event + "redirect.url: " + event.url + ", Can't get access_token, status: " + status
              });
              alertPopup.then(function () {
                console.log('3')
                $state.go('login');
              });
            });
          ref.close();
        }
      });
    };
    console.log('4')

  $scope.fbLogin = function() {
    ngFB.login({scope: 'email,public_profile'}).then(
        function (response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $scope.closeLogin();
            } else {
                alert('Facebook login failed');
            }
        });
  };


})

.controller('ProfileCtrl', function ($scope, ngFB) {
    ngFB.api({
        path: '/me',
        params: {fields: 'id,name'}
    }).then(
        function (user) {
            $scope.user = user;
        },
        function (error) {
            alert('Facebook error: ' + error.error_description);
        });
})

.controller('kakaoTokenCtrl', function($scope, ngFB, $http, $state, $ionicPopup, LoginSvc) {
  alert(accToken)


})