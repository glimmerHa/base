// proxy 语法
// let p = new Proxy(target,handler);

let obj = {
    a:1,
    b:2
}
const  p = new Proxy(obj, {
    get(target, key, value){
        if(key === 'c'){
            return '我是自定义的一个结果'
        }else{
            return target[key]
        }
    },
    set(target, key,value){
        if(value===4){
            target[key] = '我是自定义的结果'
        }else{
            target[key] = value;
        }
    }
})

obj.name = '李白'
console.log(obj.name); // 李白
obj.age = 4;
console.log(obj.age); // 4
console.log(obj); // 4

p.name = '李白';
console.log(p.name); // 李白
p.age = 4;
console.log(p.age); // 我是自定义的一个结果
console.log(obj); // 4
