
        $(function(){
            // 로그인창
            $(".login").click(function(){
                $(".login_box").fadeIn();
            });
            $(".find_password").click(function(){
                $(".password_box").show();
                $(".login_box").hide();
            });
            $(".btn_close").click(function(){
                $(".login_box").hide();
                $(".password_box").hide();
            });

            // 기종선택 

            $('.brand').change(function () {
                
                if ($(".brand>option:selected").val() == 'apple') {
                    $(".galaxy").css('display','none');
                    $(".iphone").css('display','block');
                }
                else {
                    $(".iphone").css('display','none');
                    $(".galaxy").css('display','block');
                    
                }
            });


            // 리뷰메뉴
            $(".review_menu li button").click(function(){
                $(this).css('background','#dbdbdb')
                        .css('color','black')
                        $(".review_menu li button").not(this).css('background','#f0f0f0')
                        .css('color','#333')
            });

            
            // 리뷰창
            $(".btn_review").click(function(){
                $(".reviewer").fadeIn();
                $(".qa").css('display','none');
                $(".delivery").css('display','none');
            });
            $(".btn_qa").click(function(){
                $(".qa").fadeIn();
                $(".reviewer").css('display','none');
                $(".delivery").css('display','none');
            });
            $(".btn_delivery").click(function(){
                $(".delivery").fadeIn();
                $(".qa").css('display','none');
                $(".reviewer").css('display','none');
            });
        }); 
       