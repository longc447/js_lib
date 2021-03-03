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

