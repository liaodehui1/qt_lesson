//querySelectorAll返回数组
const choose=document.querySelectorAll(".weui-tabbar__item")
const tabs=document.querySelectorAll('.weui-tab__panel')
for(let i=0;i<choose.length;i++){
    //showTable.bind(choose[i])
    choose[i].addEventListener('click',function(){
        showTable.call(this)
        // for(let j=0;j<tabs.length;j++){
        //     if(choose[j]===this){
        //         choose[j].classList.add('weui-bar__item_on')
        //         tabs[j].classList.add('show')
        //     }else{
        //         choose[j].classList.remove('weui-bar__item_on')
        //         tabs[j].classList.remove('show')
        //     }
        // }
    })
}

function showTable(){
    // console.log(this)
    for(let j=0;j<tabs.length;j++){
        if(choose[j]===this){
            choose[j].classList.add('weui-bar__item_on')
            tabs[j].classList.add('show')
        }else{
            choose[j].classList.remove('weui-bar__item_on')
            tabs[j].classList.remove('show')
        }
    }
}