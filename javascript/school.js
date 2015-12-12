$(function(){
  $("#btn-keyvisal").on("click", function() {
		// もし$(this)がopeningクラスを持っていたら
		if($(this).hasClass("opening")) {
			$(this).children("a").text("もっと詳しく");
			// テキストは「もっと詳しく」を挿入
			$(this).removeClass("opening");
			// openingクラスをはずす
		
		//　そうでなければ、「閉じる」を挿入し、openingクラスを追加 
		} else {
			$(this).children("a").text("閉じる");
			$(this).attr("class", "opening");
		}
    $(this).next().slideToggle();
    // $(this).toggleClass("active");
  });
  // タブ切り替え
  $('#btn-show-all').click(function(){
    $(this).siblings().removeClass('active');
    $(this).attr("class", "active");
    $('.column, .tips').fadeIn();
  })
  $('#btn-column').click(function(){
    $(this).siblings().removeClass('active');
    $(this).attr("class", "active");
    $('.tips').fadeOut();
    $('.column').fadeIn();
  })
  $('#btn-tips').click(function(){
    $(this).siblings().removeClass('active');
    $(this).attr("class", "active");
    $('.column').fadeOut();
    $('.tips').fadeIn();
  })
  // コラムアイテム
  $('.column-item').hover(function(){
    $(this).find('.image-overlay').css('opacity', '1');
    $(this).find('img').css('transform','scale(1.2)');
  },function(){
    $(this).find('.image-overlay').css('opacity', '0');
    $(this).find('img').css('transform','scale(1)');
  });
  // $('#btn-submit').click(function(){
  //   if($('input[name="address"]').val() == ''){
  //     $('input[name="address"]').prev('span').show();
  //   } else if ($('input[name="subject"]').val() == ''){
  //     $('input[name="subject"]').prev('span').show();
  //   } else if ($('textarea[name="message"]').val() == ''){
  //     $('textarea[name="message"]').prev('span').show();
  //   } else {
  //     $('form').hide();
  //     $('#contact-head').html('お問い合わせありがとうございます。');
  //   }
  // });
  $('#btn-submit').click(function(){
    if($('.contact-item').val() == '') {
      $('.contact-item').val('').prev('span').show();
    } else {
      $('form').hide();
      $('#contact-head').html('お問い合わせありがとうございます。');
    }
  });
});