/**
 * Created by Administrator on 2018/1/23.
 */

//获取元素样式封装
function getStyle(obj,attr){ //obj元素 attr 样式值
    /*if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj)[attr];
    }*/
    //改写为三目的方式
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
//注意： 不能用来获取复合样式
//     background：url() red; (不要获取)
//     backgroundColor： 改为用单一的样式获取（颜色不要拿来判断）
//      样式不要有空格 getStyle(div1,'background')
//     不要获取未设置过的样式，不兼容的