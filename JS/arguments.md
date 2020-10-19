# 前言

1.在函数调用的时候，浏览器会传递两个隐式参数：

一个是函数的上下文对象this，另一个是封装实参的类数组对象arguments

2.和其他程序设计语言不用，ECMAScript不会验证传递给函数的参数个数是否等于函数定义的参数个数。

开发者定义的函数都可以接受任意个数的参数，多余的会忽略，不够的传递undefined给函数。

```
function fn (a, b, c) {
    console.log(a, b, c); // 1 2 undefined
    // 函数对象的length属性就是函数形参的个数
    console.log(fn.length); // 3
}
fn(1, 2);

```

# arguments

#### **1.描述**

**`arguments`是一个类数组对象，用来存储实际传递给函数的参数**，使调用函数时不局限于函数声明所定义的参数列表。

#### 2、访问实参和检查实参个数

`arguments`访问单个参数的方式与访问数组元素的方式相同。例如`arguments[0]`、`arguments[1]`、`arguments[n]`，在函数中不需要明确指出参数名，就能访问它们。通过`length`属性可以知道实参的个数。

```
function f2() {
```

#### 3、callee属性

每一个对象都有自己的属性，而`arguments`有一个`callee`属性，返回正被执行的`Function`对象。

#### **4、转化成真实数组**

`arguments`是类数组对象，除了`length`属性和索引元素之外没有任何`Array`属性。例如，它没有 `pop`方法。但是它可以被转换为一个真正的`Array`

### 四、总结

1、`arguments`是一个类数组对象，用来存储实参；具有`length`、`callee`等属性；可以用`arguments[0]`这个形式访问实参；可以转换为真实数组。

2、`arguments`和函数相关联，其只有在函数执行时可用，不能显式创建。

3、`arguments`可以用来遍历参数；通过`callee`实现递归；也可以模拟函数重载。