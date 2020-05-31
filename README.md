# 提示框使用说明 #
+ ## 1、 组件介绍 ##
	原生JS实现，需要依赖jquery库。实现了兼容pc端与手机端。所有参数都可以修改。
+ ## 2 、使用方法
+ ### 第一步，引用js和css，必须要引入jquery库 ###
+ ### 第二步，将html代码写在网页上，任意位置即可 ###
+ ***
`			<div class="da-fade">
				<div class="da-dialog da-middle" id="dialog">
					<div class="da-content">
						<div class="da-header">
							<button type="button" class="close"><span>×</span></button>
							<h4 class="da-title">标题</h4>
						</div>
						<div class="da-body">
							<p>主题内容...</p>
						</div>
						<div class="da-footer">
							<button type="button" class="btn-default">关闭</button>
							<button type="button" class="btn-primary">保存</button>
						</div>
					</div>
				</div>
			</div>

		
***
### 第三步，JSAPI ###
		var options = {
			id: "dialog",//此处是插件的外框的id
			tit: "操作成功", //标题
			conts: "我是内容",//内容
			location:"center",//居中center，top顶部居中对齐，left顶部靠左对齐，right，顶部靠右对齐..也可以设置具体的位置,[{top:2,right:3,bottom:5,left:5}]
			_w: 300, //提示框的高，最小150px；
			_h: 200, //提示框的宽，最小150px
			callback: wancheng ,//用户自定义回调函数名称
			move:true,//如果需要移动，move:true
		}
		function wancheng() {
			// 用户保存后需要干的事，在这里调用
			console.log("保存");
		}
		cli.onclick = function() {
			dia.onclick("dialog");//调用即可显示
		}
		var dialog01 = new Dialog(options);
	
## 3、 联系方式 ##
#### vx:18332657127 
#### qq:252925356 
#### 注意们要写好备注，你主动我们就有故事哦 
