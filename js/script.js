$(document).ready(function(){
    var ww = $(window).width();
    var wh = $(window).height();
    
//     $(window).resize(function(){
//         ww = $(window).width();
//         wh = $(window).height();
//         layout();
//    });

   var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

  var swiper = new Swiper(".customSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    slideToClickedSlide:true,
    coverflowEffect: {
      rotate: 50,
      stretch: -100,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

   const sec = $('.main-banner').offset().top;
   const sec1 = $('.sec-1').offset().top;
   const sec2 = $('.sec-2').offset().top;
   const sec3 = $('.sec-3').offset().top;
   const sec4 = $('.sec-4').offset().top;
   const sec5 = $('.sec-5').offset().top;
   let sct = $(window).scrollTop();

   $(window).scroll(function(){
    let sct = $(window).scrollTop();
    const sec_sct = $('.main-banner').offset().top;
    const sec1_sct = $('.sec-1').offset().top;
    const sec2_sct = $('.sec-2').offset().top;
    const sec3_sct = $('.sec-3').offset().top;
    const sec4_sct = $('.sec-4').offset().top;
    const sec5_sct = $('.sec-5').offset().top;

    if(sct <= sec_sct){
        $('.bar1').removeClass('skill_ani');
        $('.bar2').removeClass('skill_ani');
        $('.bar3').removeClass('skill_ani');
        $('.bar4').removeClass('skill_ani');
        $('.bar5').removeClass('skill_ani');
        $('.bar6').removeClass('skill_ani');
    }else if(sct >= sec_sct && sct < sec1_sct){
        $('.header-logo svg').removeClass('active');
        $('.header-area').removeClass('active');
        $('#hamburger span').removeClass('active');
        $('#hamburger span').removeClass('on');
        $('.bar1').addClass('skill_ani');
        $('.bar2').addClass('skill_ani');
        $('.bar3').addClass('skill_ani');
        $('.bar4').addClass('skill_ani');
        $('.bar5').addClass('skill_ani');
        $('.bar6').addClass('skill_ani');
    }else if(sct >= sec1_sct && sct < sec2_sct){
        $('.header-logo svg').addClass('active');
        $('.header-area').addClass('active');
        $('#hamburger span').addClass('active');
        $('#hamburger span').addClass('on');
        $('.header-area').removeClass('tomboy');
        $('.bar1').addClass('skill_ani');
        $('.bar2').addClass('skill_ani');
        $('.bar3').addClass('skill_ani');
        $('.bar4').addClass('skill_ani');
        $('.bar5').addClass('skill_ani');
        $('.bar6').addClass('skill_ani');
    }else if(sct >= sec2_sct && sct < sec3_sct){
        $('#hamburger span').removeClass('active');
        $('#hamburger span').removeClass('on');
        $('.header-logo svg').removeClass('active');
        $('.header-area').addClass('tomboy');
        $('.header-area').removeClass('active');
        $('.header-area').removeClass('levart');
        $('.bar1').removeClass('skill_ani');
        $('.bar2').removeClass('skill_ani');
        $('.bar3').removeClass('skill_ani');
        $('.bar4').removeClass('skill_ani');
        $('.bar5').removeClass('skill_ani');
        $('.bar6').removeClass('skill_ani');
    }else if(sct >= sec3_sct && sct < sec4_sct){
        $('#hamburger span').removeClass('active');
        $('#hamburger span').removeClass('on');
        $('.header-area').addClass('levart');
        $('.header-area').removeClass('rolex');
    }else if(sct >= sec4_sct && sct < sec5_sct){
        $('#hamburger span').removeClass('active');
        $('#hamburger span').removeClass('on');
        $('.header-area').addClass('rolex');
        $('.header-area').removeClass('uiux');
    }else if(sct >= sec5_sct){
        $('#hamburger span').removeClass('active');
        $('#hamburger span').removeClass('on');
        $('.header-area').addClass('uiux');
    }

media();
function media(){
    let windiwWidth = $(window).width();
    if(windiwWidth >= 812){
        if(sct >= sec1_sct && sct < sec2_sct){
            $('.sec-1 .left-content .left-main').addClass('active');
        }else{
            $('.sec-1 .left-content .left-main').removeClass('active');
        }
    }
}

});

$('.menu').each(function(index){
    $(this).attr('data-index',index);
});

$('.home').click(function(){
    $('html,body').animate({
        scrollTop: sec
    });
});
$('.profile').click(function(){
    $('html,body').animate({
        scrollTop: sec1
    });
});
$('.publishing').click(function(){
    $('html,body').animate({
        scrollTop: sec2
    });
});
$('.uiux_m').click(function(){
    $('html,body').animate({
        scrollTop: sec5
    });
});

$('#hamburger').click(function(){
    $(this).toggleClass('active');
    $('#main-menu').toggleClass('active');
    $('#hamburger span').toggleClass('active');
  });

// window.addEventListener('scroll',function(){
//     console.log(skill_bar[0].getBoundingClientRect().top)

//     if(skill_bar[0].getBoundingClientRect().top < 600){
//         skill_bar[0].classList.addClass('.skill_ani1')
//         skill_bar[1].classList.addClass('.skill_ani2')
//         skill_bar[2].classList.addClass('.skill_ani3')
//         skill_bar[3].classList.addClass('.skill_ani4')
//         skill_bar[4].classList.addClass('.skill_ani5')
//         skill_bar[5].classList.addClass('.skill_ani6')
//     }else{
//         console.log('제거')
//         for(let i=0; i<skill_bar.length; i++){
//             skill_bar[i].classList.remove('skill_ani'+(i+1))
//         }
//     }
// })


});
