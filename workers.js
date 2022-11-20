function f(n){
    // 1 1 2 3 5 8 13 21 34
    //  f(n) =  f(n-1) + f(n-2)
    return n<=2? 1 : f(n-1) + f(n-2)
}
var onmessage = function(event){
    // 接收数据
    var number = event.data
    console.log("分线程接收到主线程发送的数据:"+number);
    //计算
    var result = f(number)
    postMessage(result)
    console.log("分线程向主线程返回数据："+result);

    
    // alert(result)  alert 是window的方法 不能在 分线程调用
    // 分线程中 的全局对象不再是window，所以在分线程中不可能更新界面
    // 在分线程中 不能使用window 的方法
}