const canvas=document.querySelector('#draw');
// console.log(canvas);
// canvas 步骤
const ctx=canvas.getContext('2d');
//绘画环境
// BOM Browser Object Model
// DOM Document Object Model
// window(js 的宙斯)
// document(地面的王)
canvas.width=window.innerWidth-10;
canvas.height=window.innerHeight-10;

ctx.strokeStyle='#BADA55';//描边颜色
ctx.lineWidth=10;
ctx.lineJoin='round';
ctx.lineCap='round';
// ctx.moveTo(100,100);
// ctx.lineTo(200,200);
// ctx.moveTo(100,200);
// ctx.lineTo(200,100);
// ctx.stroke();

// 全局
let lastX=0,lastY=0,isDrawing=false,hue=0,direction=true;

canvas.addEventListener('mousedown',function(event){
    isDrawing=true;
    lastX=event.offsetX;
    lastY=event.offsetY;
    // console.log(event.offsetX,event.offsetY);
});

canvas.addEventListener('mousemove',draw);
function draw(event){
    // console.log(event.offsetX,event.offsetY);
    if(!isDrawing) return;
    ctx.strokeStyle='hsl('+hue+',100%,50%)';
    ctx.beginPath();//开始路径
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();//进行绘制
    lastX=event.offsetX;
    lastY=event.offsetY;

    hue++;
    if(hue>=360){
        hue=0;
    }
    if(ctx.lineWidth>=100||ctx.lineWidth<=1){
        direction=!direction;
    }
    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
    // console.log(ctx.lineWidth);
}
// canvas.addEventListener('mouseup',function(event){
//     isDrawing=false;
// });
canvas.addEventListener('mouseup',()=>isDrawing=false)