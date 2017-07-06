(function (doc, win) {
	// 页面加载完执行》》文档、窗口
var docEl = doc.documentElement,
	// 		根元素
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  // 重置事件=‘当事件发生改变    在  窗口里
  recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
    //720是设计图的宽度,100是一个基准宽度(html的font-size值)
  };
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);