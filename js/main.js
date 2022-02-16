$(document).ready(function(){
    // fullpage
    $('#fullpage').fullpage({
        anchors:['intro', 'profile','web','edit','contact'],
        sectionsColor:['#9691ff','#91f6ff','#ffe3e3','#fff391','#dbe4ee'],
        // 현대 섹션이 나타난 후 (활성화 된 후, 열린 후)
        // anchorLink:fullpage에서 사용하는 앵커 연결하라는 매개변수
        // index: fullpage에서 사용하는 .section의 인덱스번호,1부토 시작함
        afterLoad: function(anchorLink,index){
            // 만약 황성화된 section이 두번째 section
            if(index==1){

            }else if(index==2){
                //자식객체 애미메이션
                $('.profile h1').addClass('active');
                $('.profile .box>div').addClass('active');

            }else if(index==3){
                 //자식객체 애미메이션
                 $('.web h1').addClass('active');
                 $('.web .swiper').addClass('active');
            }else if(index==4){
                 //자식객체 애미메이션
                 $('.edit h1').addClass('active');
                 $('.edit .gallery').addClass('active');
            }else{
                // 자식객체 애니메이션
                $('.contact h1').addClass('active');
                $('.contact .contact_wrap').addClass('active');
            }
        }
	});
    // skillbar
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').delay(900).animate({
            width:jQuery(this).attr('data-percent')
        },3000);
    });
    // swiper slide
    var swiper = new Swiper('.swiper', {
        loop:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
      });
    //   editorial gallery
    $('.thum_img ul li a').click(function(){
        // 클릭한 a태그의 href속성값을 imgHref변수에 저장
        var imgHref=$(this).attr('href');
        // popup_img영역의 콘텐츠 지우기
        $('.popup_img').empty();
        // popup_img영역에 자식 객체로 img태그를 추가시킴
        $('.popup_img').append('<img src="'+imgHref+'">');
        // popup영역 슬라이드다운
        $('.popup').slideDown();
        return false;
    });
    $('.popup_close').click(function(){
        // popup영역 슬라이드업
        $('.popup').slideUp();
    });
   
    // $('.big_img ul li').hide();
    // $('.big_img ul li').eq(0).show();
    // $('.thum_img ul li').click(function(){
    //     var idx=$(this).index();
    //     $('.big_img ul li').hide();
    //     $('.big_img ul li').eq(idx).fadeIn();
});