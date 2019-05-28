// javaScript Document
var oDiv = document.getElementById('div1');
var oDiv2 = document.getElementById('div2');
var oPrev = document.getElementById('bPrev');
var oNext = document.getElementById('bNext');
var oP = document.getElementById('point');
var oBox=oDiv.getElementsByTagName('div')[0];//yidong
var aL=oBox.getElementsByTagName('li');
var aPoint=oP.getElementsByTagName('li');
var oCont=oBox.getElementsByTagName('div')[0];
var aResult=[];
var now=-0;

oDiv2.innerHTML+=oDiv2.innerHTML;
oDiv2.style.width=(678*14)+'px';
oDiv2.style.left='0';
/*for (var i=0;i<aPoint.length;i++){
    aPoint[i].index=i;
    aResult.push(aPoint[i].getElementsByTagName('button')[0])
    aPoint[i].onclick=function (){
        if(now==this.index)return;
        now=this.index;
        for(var j=0;j<aPoint.length;j++){
            aResult[j].style.backgroundColor='#adc4c5';
        }
        aResult[this.index].style.backgroundColor='#000';
        startMove(oBox, {left: oBox.offsetLeft-aL[0].offsetWidth*now});
        //if (oDiv.offsetLeft=aL[0].offsetWidth*now)
    }
    
}*/
oNext.onclick=function (){
    now--;
    startMove(oBox, {left: 678*now});
    if(oBox.offsetLeft==-(oDiv2.offsetWidth)/2)
    {
        oBox.style.left='0';
        now=0;
    }
    return false;

}
oPrev.onclick=function (){
    now++;
    startMove(oBox, {left: 675*now});
    return false;
}
function getMoreClass(oParent, sClass)
        {
           
            //加一个的话可以只用Id var oParent=document.getElementById('oParent');
            var arr=oParent.getElementsByTagName('*');
            var box=new Array();
            for (var o=0; o<arr.length;o++){
                var arr2 =arr[o].className.split(' ');
                for(var j=0;j<arr2.length;j++){
                        if(arr2[j].className==sClass){
                            box.push(arr[o]);//如果加arr2就变成了字符串数组  
                            break;
                        }
                }
            }
            return box;
        }