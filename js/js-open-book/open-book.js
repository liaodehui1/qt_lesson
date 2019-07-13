(function(window,document){
    var prefixes=['webkit','moz','ms','o',''],
        book=document.querySelectorAll('.book')[0],
        page=document.querySelectorAll('.front-cover')[0],
        dino=document.querySelectorAll('.dino')[0],
        dinoShadow=document.querySelectorAll('.dino-shadow')[0],
        hold=false,
        centerPoint=window.innerWidth/2,
        pageSize=300,
        clamp=function(val,min,max){
            return Math.max(min,Math.min(val,max))
        }

        //鼠标按下时执行的事件
        page.onmousedown=function(){
            hold=true
            // console.log(123);
        }
        //放开鼠标时执行的事件
        window.onmouseup=function(){
            if(hold){
                hold=false
            }
        }
        //在窗口被调整大小的时候执行的事件
        window.onresize=function(){
            centerPoint=window.innerWidth/2

        }
        //鼠标移动时执行的事件
        window.onmousemove=function(event){
            if(!hold){
                return
            }
            var angle=clamp((centerPoint-event.pageX+pageSize)/pageSize*-90,-180,0),
                i,
                j;

            for(i=0,j=prefixes.length;i<j;i++){
                book.style[prefixes[i]+'Transform']=`rotateX(${60+angle/8}deg)`
                page.style[prefixes[i]+'Transform']=`rotateY(${angle}deg)`
                dinoShadow.style[prefixes[i]+'Transform']=`tanslateZ(1px) skewX(${angle/8}deg)`
                dino.style[prefixes[i]+'Transform']=`rotateX(${angle/3}deg)`
            }
        }
})(window,document)