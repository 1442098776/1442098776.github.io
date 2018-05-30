$(function(){
    function fun(n,a,c){
        n.css('border','1px solid red');
        a.text(c).css({'display':'block','color':'red'});
    }
    function fun1(n,a){
        n.css('border','');
        a.css({'display':'none'});
    }
    $('.count-all form div label1,.count-all form div label2').css("display","none");
    $('.email,.password,.password1').blur(function(){
        if($(this).hasClass("email")){
            let n=$(this),
                    a=n.siblings('.label1');
            if(/^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test($('.email').val())== false){
                const c='The email address you entered is not legal.';
                fun(n,a,c);
              
             }else{
                fun1(n,a);
              }
        }
        if($(this).hasClass("password")){
            let n=$(this),
                    a=n.siblings('.label2');
                if (/(?!.*\s)(?!^[\u4E00-\u9FA5]+$)(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^\u4E00-\u9FA5a-zA-Z\d]+$)^.{6,16}$/.test($('.count-all .password').val())==false){
                    const c='No Spaces, 6-16 characters long, must contain at least two letters, Numbers, and symbols.';
                    fun(n,a,c);
                   
              
            }else{
                fun1(n,a);
            }
        }
        if ($(this).hasClass('password1')) {
            let n=$(this),
                a=n.siblings('.label1');
                if ($(this).val()!=$('.count3 .password').val()) {
                    const c='The password is not valid.';
                    fun(n,a,c);
                }else {
                    fun1(n,a);
                }
        }
    }).focus(function() {
        if ($(this).hasClass('email')) {
            let n=$(this),
                a=n.siblings('.label1');
                fun1(n,a);
        }
        if ($(this).hasClass('password')) {
            let n=$(this),
                a=n.siblings('.label2');
                fun1(n,a);
        }
        if ($(this).hasClass('password1')) {
            let n=$(this),
                a=n.siblings('.label1');
                fun1(n,a);
        }
    });

    // 点击忘记密码跳转
    $('.forgotPwd,.cancel,.submit1,.changePwd').click(function(){
        if ($(this).hasClass('forgotPwd')) {
            $(this).parents('.count1').hide().siblings('.count2').show();
        }
        if ($(this).hasClass('cancel')) {
             $(this).parents('.count2').hide().siblings('.count1').show();
        }
        if ($(this).hasClass('submit1')) {
            $(this).parents('.count2').hide().siblings('.count3').show();
        }
        if ($(this).hasClass('changePwd')) {
            $(this).parents('.count3').hide().siblings('.count1').fadeIn();
        }
    });
});