angular.module('starter.service', [])

.service('LoginSvc', function ($q, $http) {
    this.kakaoLogin = function () {
      return window.open("https://kauth.kakao.com/oauth/authorize?client_id=" + clientId + "&redirect_uri=" + redirectUri + "&response_type=code", '_blank', 'location=no');
    };

    this.getKakaoAccToken = function (reqToken) {
      var defered = $q.defer();
      return $http({
        method: "post",
        url: "https://kauth.kakao.com/oauth/token",
        data: "grant_type=authorization_code" + "&client_id=" + clientId + "&redirect_uri=" + redirectUri + "&code=" + reqToken
      })
        .then(function (response) {
          defered.resolve(response.data);
          return defered.promise;
        }, function (error) {
          defered.reject(error);
          return defered.promise;
        });
    };

    this.getKakaoUserInfo = function (accToken) {
      var defered = $q.defer();
      return $http({
        method: "get",
        url: "https://kapi.kakao.com/v1/user/me",
        headers: {
          "Authorization": "Bearer " + accToken
        }
      })
        .then(function (response) {
          defered.resolve(response.data);
          return defered.promise;
        }, function (error) {
          defered.reject(error);
          return defered.promise;
        });
    };

    this.kakaoLogout = function (accToken) {
      var defered = $q.defer();
      return $http({
        method: "post",
        url: "https://kapi.kakao.com/v1/user/logout",
        headers: {
          "Authorization": "Bearer " + accToken
        }
      })
        .then(function (response) {
          defered.resolve(response.data);
          return defered.promise;
        }, function (error) {
          defered.reject(error);
          return defered.promise;
        });
    };
  });