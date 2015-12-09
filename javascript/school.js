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
});