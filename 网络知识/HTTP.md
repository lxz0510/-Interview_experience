# HTTP

- HTTP协议构建与TCP/IP协议之上，是一个应用层协议，默认端口号是80
- HTTP是无连接无状态的协议

### HTTP报文

 HTTP 请求分为三个部分：

状态行、请求行、消息主体

```
<method> <request-URL> <version>
<headers>

<entity-body>
```

HTTP 定义了与服务器交互的不同方法，最基本的方法有4种，

是`GET`，`POST`，`PUT`，`DELETE`。`URL`全称是资源描述符，我们可以这样认为：一个`URL`地址，它用于描述一个网络上的资源，而 HTTP 中的`GET`，`POST`，`PUT`，`DELETE`就对应着对这个资源的查，增，改，删4个操作。

1. get

   用于获取信息，而且应该是安全和幂等的

   所谓安全的意味着该操作用于获取信息而非修改信息。换句话说，GET 请求一般不应产生副作用。就是说，它仅仅是获取资源信息，就像数据库查询一样，不会修改，增加数据，不会影响资源的状态。

   幂等的意味着对同一 URL 的多个请求应该返回同样的结果。

   ```
    GET /books/?sex=man&name=Professional HTTP/1.1 //状态行(请求方式/资源路径/版本号)
    Host: www.example.com //host 资源的url
    User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.6)//代理用户的信息
    Gecko/20050225 Firefox/1.0.1 //浏览器的内核
    Connection: Keep-Alive //长久连接
   ```

2. post 表示可能修改变服务器上的资源的请求。

   ```
    POST / HTTP/1.1
    Host: www.example.com
    User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.6)
    Gecko/20050225 Firefox/1.0.1
    Content-Type: application/x-www-form-urlencoded
    Content-Length: 40 
    Connection: Keep-Alive
   
    sex=man&name=Professional  
   ```

   **get和post的不同**

   ![img](https://camo.githubusercontent.com/eb94fc7050d60f1ba087c92805b0b4f5ba3b331fb790e5b5fc3b926f7216e28e/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330365f313431352e706e67)

   我们大概要记住以下几点：

   **1**、浏览器在回退时，get**不会重新请求**，但是post会重新请求。【重要】

   **2**、get请求会被浏览器**主动缓存**，而post不会。【重要】

   3、get请求的参数，会报**保留**在浏览器的**历史记录**里，而post不会。做业务时要注意。为了防止CSRF攻击，很多公司把get统一改成了post。

   **4**、get请求在url中传递的参数有大小限制，基本是2kb，不同的浏览器略有不同。而post没有注意。

   5、get的参数是直接暴露在url上的，相对不安全。而post是放在请求体中的。

## http状态码

http状态码分类：

![img](https://camo.githubusercontent.com/f6cb65a6c2747251a830bc7a74cf514bbef7f05e7434f41145ea9b790aadc595/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330365f313433302e706e67)

常见的http状态码：

![img](https://camo.githubusercontent.com/0b18627a4fcde7ad92bf58f979a089e09e83afd8fe7aece14789c8c5894d29b7/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330365f313433312e706e67)

![img](https://camo.githubusercontent.com/e6c1726ff03a785c120c7ea87e4a30d73ebc23b20d69afa5982817756225ebea/687474703a2f2f696d672e736d79687661652e636f6d2f32303138303330365f313434302e706e67)

403 未授权

404未找到资源

常见状态码

- 200

- 301

- 302

- 304

- 400

- 401

- 403

- 404

- 500

- 503

  

###  响应报文

- 状态行
- 响应头
- 响应主体

### 持久连接

解决了HTTP是无连接的问题（连接一次就断开）

**关于http无连接无状态的问题**

一.无连接

1. 每一个访问都是无连接，服务器挨个处理访问队列里的访问，处理完一个就关闭连接，这事儿就完了，然后处理下一个新的
2. 无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接

二.无状态

   1.协议对于事务处理没有记忆能力

   2.对同一个url请求没有上下文关系

   3.每次的请求都是独立的，它的执行情况和结果与前面的请求和之后的请求是无直接关系的，它不会	受前面的请求应答情况直接影响，也不会直接影响后面的请求应答情况

   4.服务器中没有保存客户端的状态，客户端必须每次带上自己的状态去请求服务器

 