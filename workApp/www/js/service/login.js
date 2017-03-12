'use strict';

angular.module('starter')

// 로그인
.service('LoginService', function($q, $localstorage, $http, Architimes_app_url){
  return {
    loginUser: function(name, pw){
      var deferred = $q.defer();
      var promise = deferred.promise;


      $http.post(Architimes_app_url+"/member_proc.php", {
            cType: 'login',
            mem_id: name,
            mem_pw: pw
      }).then(function (response) {
        var result = response.data.records;  

        var authData = new Object();
        authData.m_strCode    = result.strCode;
        authData.m_strId      = result.strId;
        authData.m_intLevel   = result.intLevel;
        authData.m_strType    = result.strType;
        authData.b_level      = result.intLevel;

        $localstorage.set("authData", JSON.stringify(authData));
        deferred.resolve(name);
      }, function error(response){
        console.log('error' + response)
        deferred.resolve('fail');
      });

      // if(name == 'user' && pw =='1111'){
        
      //   var authData = new Object();
      //   authData.strType = "아키타임즈";
      //   authData.strId = name;
      //   authData.strName = "홍길동";
      //   authData.strEmail = "check@naver.com";
      //   $localstorage.set("authData", JSON.stringify(authData));

      //   console.log(authData)

      //   deferred.resolve(name);
      // } else {
      //   deferred.resolve('fail');
      // }

      promise.success = function(fn){
        promise.then(fn);
        return promise;
      }
      promise.error = function(fn){
        promise.then(null, fn);
        return promise;
      }
      return promise;
    }
  }

})
.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])
