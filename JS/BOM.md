# 什么是BOM

BOM：浏览器对象模型

**BOM的结构图：**

![image-20201029152141911](C:\Users\liuxz\AppData\Roaming\Typora\typora-user-images\image-20201029152141911.png)

从上图可以看出

- window对象是bom的顶层对象，其他所有对象都是window的子对象
- DOM是BOM的一部分

**window对象：**

- **window对象是js中的顶级对象**
- 全局变量、自定义函数也是window对象的属性和方法
- window对象下的属性和方法调用时，可以省略window

**BOM的常见内置方法和内置对象：**

**弹出系统对话框：**

系统对话框有三种：

```
alert() //不同浏览器的外观是不一样的
confirm() //兼容性不好
prompt() //用户可以在弹出的对话框中输入并且返回
```

**打开窗口、关闭窗口：**

1.打开窗口：

```
window.open(url,target,param)
```

**参数解释：**

- url：要打开的地址
- target：新窗口的位置。可以是：`_blank` 、`_self`、 `_parent` 父框架。
- param：新窗口的一些设置。可以有很多设置

2.关闭窗口：

window.close()

**location对象：	**

- **href:跳转**

**location对象的方法**

- location.assign():改变浏览器的地址，并记录到历史中

设置location.href 就会调用assign()。一般使用location.href 进行页面之间的跳转。

- location.replace() :替换浏览器地址栏的地址，不会记录到历史中 

```
replace和assign的区别：
	window.location.assign(url) ： 加载 URL 指定的新的 HTML 文档。 就相当于一个链接，跳转到指定的url，当前页面会转为新页面内容，可以点击后退返回上一个页面。
	window.location.replace(url) ： 通过加载 URL 指定的文档来替换当前文档 ，这个方法是替换当前窗口页面，前后两个页面共用一个窗口，所以是没有后退返回上一页的。
	通俗来说就是：assign是跳转到指定的下一个页面，回退的话就是没跳转之前的页面
				replace是指定页面替换当前页面，退回的话是跳转到未替换之前的前一个页面。
```

- location.reload() : 重新加载

  ```
      location.reload(); // 重新加载当前页面。
      location.reload(true); // 在方法的参数中传递一个true，则会强制清空缓存刷新页面。
  ```

  

**navigator对象（）**

window.navigator 的一些属性可以获取客户端的一些信息。

- navigator.userAgent  系统、浏览器

```
navigator.userAgent
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36"
```

- navigator.platform 浏览器支持的系统

```
navigator.platform
"Win32"
```

参考链接：https://github.com/lxz0510/Web/blob/master/04-JavaScript%E5%9F%BA%E7%A1%80/BOM%E7%9A%84%E5%B8%B8%E8%A7%81%E5%86%85%E7%BD%AE%E6%96%B9%E6%B3%95%E5%92%8C%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1.md