
// new Date().getTime()
// Date.now()
(function(){
    let startTime = Date.now()
    let total = 0
    for(let i = 0; i < 1000000; i ++){
        total=  new Date().getTime()
    }
    console.log(Date.now()-startTime)
    // 130
    let startTime1 = Date.now()
    let total1= 0
    for(let i = 0; i < 1000000; i ++){
        total1=  Date.now()
    }
    console.log(Date.now()-startTime1)
    // 80
})()

// result：性能对比： Date.now() > new Date().getTime()