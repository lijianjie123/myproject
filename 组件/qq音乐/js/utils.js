
function getRect(obj){
		return obj.getBoundingClientRect();
	}
//碰撞检测封装函数     碰上为true   没碰撞上 为false
function collision(obj1,obj2){ //obj1 要拖动的元素   obj2 是准备被碰撞上的元素（即碰撞的范围）
	var obj1Rect = 	getRect(obj1);
	var obj2Rect = 	getRect(obj2);

	//如果obj1碰上了哦obj2返回true，否则放回false
	var obj1Left = obj1Rect.left;
	var obj1Right = obj1Rect.right;
	var obj1Top = obj1Rect.top;
	var obj1Bottom = obj1Rect.bottom;

	var obj2Left = obj2Rect.left;
	var obj2Right = obj2Rect.right;
	var obj2Top = obj2Rect.top;
	var obj2Bottom = obj2Rect.bottom;

	if( obj1Right < obj2Left || obj1Left > obj2Right || obj1Bottom < obj2Top || obj1Top > obj2Bottom ){
		return false; //没碰撞上 为false
	}else{
		return true;//碰上为true
	}
}