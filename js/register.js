    $(function () {
        $('.count-all label1,.count-all label2,.count-all label3').css({'display':'none'});
        function fun(n,a,c){
            n.css('border','1px solid red');
            a.text(c).css({'display':'block','color':'red'});
        }
        function fun1(n,a){
            n.css('border','');
            a.css({'display':'none'});
        }
        $('.email,.password,.password1').blur(function(){
            if($(this).hasClass("email")){
                let n=$(this),
                    a=$('.count-all .form1 .label1');
                if(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test($('.email').val())== false){
                    const c='The email address you entered is not legal.';
                    fun(n,a,c);
                    
                 }else{
                        fun1(n,a);
                      } 
            }
            if($(this).hasClass("password")){
                let n=$(this),
                    a=$('.count-all .form1 .label2');
                    if (/(?!.*\s)(?!^[\u4E00-\u9FA5]+$)(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^\u4E00-\u9FA5a-zA-Z\d]+$)^.{6,16}$/.test($('.count-all .password').val())== false){
                        const c='No Spaces, 6-16 characters long, must contain at least two letters, Numbers, and symbols.';
                        fun(n,a,c);
                       
                }else{
                    fun1(n,a);
                }
            }
            if ($(this).hasClass('password1')){
                let n=$(this),
                    a=$('.count-all .form1 .label3');
                if ($(this).val()!=$('.count-all .password').val()){
                    const c='The password is not valid.';
                   fun(n,a,c);
                  
                }else{
                     fun1(n,a,c);
                }
            }
        }).focus(function() {
            if ($(this).hasClass("email")) {
                let n=$(this),
                    a=$('.count-all .form1 .label1');
                    fun1(n,a);
            }
            if ($(this).hasClass("password")) {
                let n=$(this),
                    a=$('.count-all .form1 .label2');
                    fun1(n,a);
            }
            if ($(this).hasClass("password1")) {
                let n=$(this),
                    a=$('.count-all .form1 .label3');
                    fun1(n,a);
            }
        });
    });