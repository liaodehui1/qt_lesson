(function(){
    var juan=document.querySelector('.juan')
    juan.classList.add('z-juanAni')
    setInterval(function(){
        juan.classList.remove('z-juanAni')
        setTimeout(()=>{juan.classList.add('z-juanAni')},500)
    },4000)
})()