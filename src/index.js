function Dialog(options) {
	this.id = options.id;
	this.diaL = document.getElementById(this.id);
	this._w = options._w < 150 ? 150 : options._w;
	this._h = options._h < 150 ? 150 : options._h;
	this.tit = options.tit;
	this.conts = options.conts;
	this.location = options.location;
	this.top = options.top;
	this.left = options.left;
	this.posX = this.diaL.left;
	this.posY = this.diaL.top;
	this.titID = document.getElementsByClassName("da-title")[0];
	this.da_head = document.getElementsByClassName("da-header")[0];
	this.contsID = document.getElementsByClassName("da-body")[0].getElementsByTagName("p")[0];
	this.closeID = document.getElementsByClassName("close")[0];
	this.btn_default = document.getElementsByClassName("btn-default")[0];
	this.btn_primary = document.getElementsByClassName("btn-primary")[0];
	this.move = options.move;
	this.callback = options.callback; //用户自定义的函数名
	this.init();
	this.addEvent();
}
Dialog.prototype.init = function() {
	this.diaL.style.width = this._w + "px";
	this.diaL.style.height = this._h + "px";
	this.titID.innerHTML = this.tit;
	this.contsID.innerHTML = this.conts;
	if (this.location == "top") {
		// this.diaL.className = "da-dialog da-top";
		this.diaL.style.transform = "translate(-50%, 0)";
	} else
	if (this.location == "left") {
		// this.diaL.className = "da-dialog da-left";
		this.diaL.style.setProperty('left', '0');
		this.diaL.style.setProperty('transform', 'initial');
	} else
	if (this.location == "right") {
		this.diaL.style.setProperty('left', 'initial');
		this.diaL.style.setProperty('transform', 'initial');
		this.diaL.style.setProperty('right', '0');
		//使用setProperty()方法设置属性的值为“initial”将重置该属性为其初始值，达到删除该属性的任何效果。

	} else
	if (this.location[0].top != null || this.location[0].right != null || this.location[0].bottom != null || this.location[
			0].left != null) {
		this.diaL.className = "da-dialog";
		//先清空原有的定位属性
		this.diaL.style.setProperty('left', 'initial');
		this.diaL.style.setProperty('top', 'initial');
		this.diaL.style.setProperty('right', 'initial');
		this.diaL.style.setProperty('bottom', 'initial');
		// 定义新的位置
		this.diaL.style.top = this.location[0].top;
		this.diaL.style.right = this.location[0].right;
		this.diaL.style.bottom = this.location[0].bottom;
		this.diaL.style.left = this.location[0].left;
	} else {
		this.diaL.style.setProperty('top', '50%');
	}
}
Dialog.prototype.addEvent = function() {
	var that = this;
	if (this.closeID) {
		this.closeID.addEventListener("click", function() {
			that.diaL.style.display = "none";
		}, false);
	}

	if (this.btn_default) {
		this.btn_default.addEventListener("click", function() {
			that.diaL.style.display = "none";
		})
	}

	if (this.btn_primary) {
		this.btn_primary.addEventListener("click", function() {
			that.diaL.style.display = "none";
			if (that.callback) {
				that.callback.call(null); //调用同名的全局函数
			}
		})
	} else {
		return;
	}

	if (this.move) {
		this.da_head.style.cursor = "move";
		// this.diaL.className="da-dialog";
		//判断是移动端还是pc端,true为移动端，false为pc端
		this.device = (/android|iphone|ipad|webos|blackberry/i.test(window.navigator.userAgent.toLowerCase()));
		this.clickEvent = this.device ? "touchstart" : "mousedown";
		this.moveEvent = this.device ? "touchmove" : "mousemove";
		this.endEvent = this.device ? "touchend" : "mouseup";
		// 添加鼠标点击或手机点击事件
		var that = this;
		this.da_head.addEventListener(this.clickEvent, function(evt) {
			var event = evt || window.event;
			// 获取鼠标点击或手指点击时的视口坐标
			that.diaL.style.left = that.posX + "px";
			that.diaL.style.top = that.posY + "px";
			that.isMouseDown = true; //鼠标按下
		}, false);
		this.da_head.addEventListener(this.moveEvent, function(evt) {
			if (!that.isMouseDown) {
				return false;
			} else {
				var event = evt || window.event;
				that.diaL.style.setProperty('transform', 'initial'); //将该属性清空
				var x2 = that.device ? event.touches[0].clientX : event.clientX;
				var y2 = that.device ? event.touches[0].clientY : event.clientY;
				that.diaL.style.left = x2 /* - document.body.offsetWidth / 2 */ - that.diaL.offsetWidth / 2 + "px";
				that.diaL.style.top = y2 - ($(".da-header")[0].offsetHeight / 2) + "px";
			}
		}, false);
		this.da_head.addEventListener(this.endEvent, function(evt) {
			that.isMouseDown = false; //鼠标未按下
			that.posX = that.diaL.offsetLeft;
			that.posY = that.diaL.offsetTop;
		}, false);
	}
}
var dia = { //让提示框显示，默认是隐藏
	onclick: function(id) {
		document.getElementById(id).style.setProperty('display', 'block');
	}
}
