# typeof

不是用来检查对象的类型，而是检测一个对象是否已经定义或者是否已经赋值

# instanceof

用来测试一个对象是否在原型链原型构造函数的属性

用法： arr instanceof Array



# 2.浏览器以及服务器的储存技术

浏览器端

cookie

WebStorage(localStorage sessionStorage)

indexedDB

userData

服务器端

session

# 3.数组去重

```
Array.prototype.distinct = function(){
	let arr = [];
	for(let i = 0 ; i < this.length; i++){
		for(let j = i +1 ; j< this.length; j++){
			if(this[i] === this[j]){
				arr.push(this.splice(j,1)[0])
			}
		}
	
	}
	return arr
}
```
ES6
Array.from(new Set(array))

