//乞丐版
function hongbao(total, num) {
    const arr = [];
    let restAccount = total;//余下的钱
    let restNum = num;//余下的人数
    for (let i = 0; i < num - 1; i++) {
        let account = parseFloat((Math.random() * (restAccount / restNum * 2)).toFixed(2));
        restAccount -= account;
        restNum--;
        arr.push(account);
    }
    // console.log(typeof parseFloat(restAccount.toFixed(2)))
    arr.push(parseFloat(restAccount.toFixed(2)))//toFixd返回字符串
    return arr;
}
console.log(hongbao(100,10).reduce((pre,cur)=>(pre+cur)))
