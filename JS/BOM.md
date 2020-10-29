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
- 