// 线程休眠
function sleep(time,loop){
    /// <summary>休眠</summary>
    /// <param name="time" type="int">休眠时间</param>
    /// <param name="loop" type="int">是否循环，1循环0不循环</param>
    if(!time)time=1000;
    if(!loop)loop=1;
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },time)
    })
}

//返回到顶部
async function goTop(){
    let innerHeight=window.scrollY;
    let changeHeight=200;
    for (let index = 0; innerHeight>200;index++) {
        await sleep(50).then(()=>{
            innerHeight-=changeHeight;
            changeHeight+=changeHeight;
            window.scrollTo(0,innerHeight);
        })
    }
    window.scrollTo(0,0);
}