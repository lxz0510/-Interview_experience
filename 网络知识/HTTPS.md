# HTTPS

在讲述HTTPS之前，需要说明一下HTTPS的出现旨在解决哪些问题

**HTTP的不足**（主要体现在安全性方面）

HTTP作为具备无状态，无连接，简单快速灵活的一种协议，其安全性能自然存在不足

但是在很多场合我们可能会要求安全第一，其次再是速度快的考虑

主要在已下三个方面存在安全性问题

- 通信使用明文
  - 在本地发出信息的那一时间开始，互联网上的监听就已经开始了，在传输过程中的任一环节资源都有可能面临安全问题
- 不验证对方的身份
  - 这也是HTTP无状态特点的不足之处，虽然提高了响应的速度，但是用户的安全性没有得到保障
- 无法证明报文的完整性

**如何应对这些安全问题**

1. **加密处理防止被窃听**

   1. 通信的加密 HTTP+SSL（安全套接层）来建立安全的通信线路
   2. 内容的加密，对报文进行加密

2. 验证对方的身份

   ​	客户端带上信用机构颁发的数字证书

3. 使用散列值检验的方法防止篡改报文

   通常使用MD5和SHA-1的算法生成散列值



**HTTP+通信加密+证书+完整性保护 === HTTPS**

HTTPS是身披SSL外壳的HTTP

HTTPS并不是应用层的一种新的协议，只是HTTP的部分通信接口使用SSL和TLS协议代替而已

通常是HTTP直接与TCP进行通信，当使用ssl或者TlS时，就变成HTTP先和SSL通信，再由SSL和tcp进行通信，相当于SSL在HTTP和TCP之间充当一个增加了安全措施的中间件。  

