
/*
	共通JavaScript.
*/

/*
	ページ表示時遅延
*/
function show() {
	// $("body").css("visibility","visible");
	$('body').fadeIn();
}

window.addEventListener("load", function(){
  show();
}, false);

/*
	メッセージ消去
*/
function outMessage() {
	var messageid = '#message'
	var element = $(messageid);
	element.fadeOut(500);
}