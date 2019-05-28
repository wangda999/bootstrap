// JavaScript Document
function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}
//运动框架,使用前设置 obj.timer=null;
function startMove(obj, json, fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function()
	{
		var bStop=true; //假设
		for(var attr in json)
		{
			var cur=0;
			if (attr=='opacity')
			{
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
				//这是错误的   cur=parseFloat(getStyle(obj, name))
			}
			else
			{
				cur=parseInt(getStyle(obj, attr))
			}
			
			var speed=(json[attr]-cur)/10;
			/*复杂写法
			if (speed<0)
			{
				speed=Math.floor(speed)
			}
			else
			{
				speed=Math.ceil(speed)
			}
			*/
			speed=speed>0?Math.ceil(speed):Math.floor(speed)
			//如果写成<0 返回不成原来的
			if(cur!=json[attr])			bStop=false;
			
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opcity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
			
		}
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();			
		}
	},30)
	
}


