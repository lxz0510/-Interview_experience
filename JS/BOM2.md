### JavaScript的组成

JavaScript基础分为三个部分：

- ECMAScript：JavaScript的语法标准。包括变量、表达式、运算符、函数、if语句、for语句等。
- **DOM**：文档对象模型（Document object Model），操作**网页上的元素**的API。比如让盒子移动、变色、轮播图等。
- **BOM**：浏览器对象模型（Browser Object Model），操作**浏览器部分功能**的API。比如让浏览器自动滚动。

### 常见的BOM对象

BOM可以让我们通过JS来操作浏览器。BOM中为我们提供了一些对象，来完成对浏览器相关的操作。

常见的 BOM对象有：

- Window：代表整个浏览器的窗口，同时 window 也是网页中的全局对象。
- Navigator：代表当前浏览器的信息，通过该对象可以识别不同的浏览器。
- Location：代表当前浏览器的地址栏信息，通过 Location 可以获取地址栏信息，或者操作浏览器跳转页面。
- History：代表浏览器的历史记录，通过该对象可以操作浏览器的历史记录。由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效。
- Screen：代表用户的屏幕信息，通过该对象可以获取用户的显示器的相关信息。

备注：这些 BOM 对象都是作为 window 对象的属性保存的，可以通过window对象来使用，也可以直接使用。比如说，我可以使用 `window.location.href`，也可以直接使用 `location.href`，二者是等价的。

备注2：不要忘了，之前学习过的`document`也是在`window`中保存的。

## History 对象

History对象：可以用来操作浏览器的向前或向后翻页。

### History对象的属性

```
history.length
```

解释：获取浏览器历史列表中的 url 数量。注意，只是统计当次的数量，如果浏览器关了，数量会重置为1。

### History对象的方法

```
history.back()
```

解释:回退到上一个页面，作用和回退按钮一样

```
history.forward()
```

解释：用来跳转到下一个页面，作用和浏览器的前进按钮是一样的

```
history.go( int n);  // 需要整数作为参数

// 代码举例：
history.go( 1 ); // 向前跳转一个页面，相当于 history.forward()

history.go( 2 ); // 表示向前跳转两个页面

history.go( 0 ); // 刷新当前页面

history.go( -1 ); // 向后跳转一个页面，相当于 history.back()

history.go( -2 ); // 向后跳转两个页面
```



