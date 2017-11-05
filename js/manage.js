/*
	管理画面用JavaScript
*/

dividlist = ['div#regist','div#ref','div#update'];

/*
	表示切替
*/
function toggleView(index) {
	var visEle = []
	var hidEle = []
	var len = dividlist.length
	for(var i=0; i < len; i++) {
		if (i == index-1) {
			visEle.push(dividlist[i]);
		}
		else {
			hidEle.push(dividlist[i]);
		}
	}
	$(hidEle.join(',')).fadeOut(0).delay(500).queue(function(){
			$(visEle.join(',')).fadeIn('slow');
	}).dequeue();
}

/*
	プルダウン変更時処理
*/
function changePulldown() {
	var selected = $('select[name=command]').val();
	toggleView(selected);
}

/*
	編集リンク押下時
*/
function updateById(id) {
	var pulldown = $('select[name=command]');
	var idform = $('div#update select[name=uid]');
	var nameform = $('div#update input[name=name]');
	var twitchform = $('div#update input[name=twitchid]');
	var nicoform = $('div#update input[name=comid]');
	var datatr = $('tr.data#' + id);
	
	idform.val(id);
	nameform.val(datatr.children('td.u_name').text());
	twitchform.val(datatr.children('td.u_twitch').text());
	nicoform.val(datatr.children('td.u_comid').text());
	pulldown.val(3);
	toggleView(3);
	
}

/*
	コミュニティ編集時
*/
function onblurComid(eleid) {
	var selecter = '#' + eleid;
	var formElm = $(selecter);
	var formTxt = formElm.val();
	if(formTxt.indexOf('co') < 0){
		formElm.val('co' + formTxt);
	}
}

/*
	windowのリスナに埋め込み
*/
window.addEventListener("load", function(){
  changePulldown();
}, false);