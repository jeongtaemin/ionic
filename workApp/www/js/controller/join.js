'use strict';
angular.module('starter')

.controller('JoinCtrl', function($scope, $state, $rootScope,  $stateParams, $window, $localstorage, loadingService, focus, $http, Architimes_app_url){  
    

    $("#checkall").click(function(){
        var chk = $(this).is(":checked");
        if(chk){
           $(".agree_label input").prop("checked",true);
        }else{
            $(".agree_label input").prop("checked",false);
        }
    })

    var pattern = {
        name :  /^[가-힣]{2,4}$/,
        phone : /^\d{2,4}\d{3,4}\d{4}$/,
        passwd : /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/,
        email : /^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
    };



    $scope.join = function() {
            var joinType = $stateParams.joinType; 

            if(!joinType ){
                alert("올바른 접속이 아닙니다. 다시 시도해주세요.");
                $state.go('join');
            }

            if($('#strName').val() == "" || !pattern.name.test($('#strName').val()) ){
                alert("이름을 정확하게 입력하여 주십시오.   ");
                focus('strName');
                return false;
            }
            if($('#strId').val() == ""  || !pattern.email.test($('#strId').val()) ){
                alert("이메일을 정확하게 입력하여 주십시오.   ");
                focus('strId');
                return false;
            }
            if($('#strPassword').val() == "" ||  !pattern.passwd.test($('#strPassword').val()) ){
                alert("비밀번호를 정확하게 입력하여 주십시오.   ");
                focus('strPassword');
                return false;
            }
            if($('#strPassword').val() != $('#strPassword2').val()){
                alert("비밀번호와 비밀번호확인이 일치하지 않습니다.   ");
                 focus('strPassword');
                return false;
            }
            if($('#strPhone').val() == ""  || !pattern.phone.test($('#strPhone').val()) ){
                alert("연락처를 정확하게 입력하여 주십시오.   ");
                focus('strPhone');
                return false;
            }

            var chk1 = $('#chk1').is(":checked");
            var chk2 = $('#chk2').is(":checked");
            var chk3 = $('#chk3').is(":checked");
            if(!chk1 || !chk2 || !chk3){
                alert("약관 동의를 체크해주세요. ");
                focus('chk1');
                return false;
            }

            loadingService.show();
            $http.post(Architimes_app_url+"/member_proc.php", {
                cType: 'write',
                intLevel: '2',
                strType: joinType,
                strMemo:'DIRECT',
                strName: $('#strName').val(),
                strId: $('#strId').val(),
                strPhone: $('#strPhone').val(),
                strPassword:$('#strPassword').val(),
            }).then(function (response) {
                loadingService.hide()
                var result = response.data.records;  
                var res = result.split('|');
                if(res[0] == "ok"){
                    alert(res[1]);
                    $state.go('main');
                }if(res[0] == "fail"){
                    alert(res[1]);
                }

            }, function error(response){
                loadingService.hide()
                console.log('error' + response)
            });

          
   
    }

})
