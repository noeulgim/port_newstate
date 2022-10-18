$(function(){
  $('.icon:nth-child(1)').click(function(){
    $('body').css('background','rgba(0,0,0,.77)');
    $('.share').css('display','fixed');
    // <div class="share">
    //   <div class="share-title">
    //     <p>페이지 공유하기</p>
    //     <img src="./img/share_close.png" alt="">
    //   </div>
    //   <div class="share-text">
    //     <p>뉴스테이트 모바일 소식을 많은 친구들에게 알려 주세요!</p>
    //     <div class="share-icon"></div>
    //     <div class="share-icon"></div>
    //     <div class="share-icon"></div>
    //     <div class="share-icon"></div>
    //   </div>
    // </div>
  });

  $('#video').mouseover(function(){
    $('.play-btn.video').css('background-position','bottom');
  }).mouseout(function(){
    $('.play-btn.video').css('background-position','top');
  });
  $('.play-btn.left, .play-btn.right').hover(function(){
    $('.play-btn.video').removeClass('video').addClass('video-hover');
  },function(){
    $('.play-btn.video-hover').removeClass('video-hover').addClass('video');
  });

  $('.video-select button').each(function(){
    $(this).click(function(){
      $('.video-select button').removeClass('video-btn-clicked');
      $(this).addClass('video-btn-clicked');
    });
  });

  $('.cookie-right button').click(function(){
    $('#cookie').css('display','none');
  });

  $(window).scroll(function(){
    var wHeight = $(this).height(); //-> this : window
    //wHeight 변수를 쓴 이유 : 밑의 .slide에 대한 함수에서 this는 .slide이기 때문에 window의 height를 사용하기 위함
    var thisScrollTop = $(this).scrollTop();
    $('#media').each(function(){
      var thisOffset = $(this).offset(); //화면의 상단에서부터의 거리를 가져올 수 있다. (offset.top / offset.left)
      var navBar = $('#fixed');
      if( thisOffset.top - 200 <= thisScrollTop ) {
        navBar.addClass('fixed');
      }else {
        navBar.removeClass('fixed');
      }
    });
  });

  var hoverDataBg = $(this).data('bg');
  var findNonAct = $('.commu-box-hover').find('.nonactive');
  var findAct = $('.commu-box-hover').find('.active');
  $('.commu-box-wrap').each(function(){
    var findhov = $(this).find('.commu-box-hover');
    $(this).mouseenter(function(){
      findhov.removeClass('nonactive');
      findhov.addClass('active');
    }).mouseleave(function(){
      findhov.removeClass('active');
      findhov.addClass('nonactive');
    });
  });
});
