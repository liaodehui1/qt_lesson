## JWT
Header：  
sha256：哈希算法 相同输入相同输出  
```js
{
  "alg": "HS256",
  "typ": "JWT"
}
```
part1: base64(header) 编码完的  
  base64：用64个字符表示A-Za-z0-9  
```js
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```
part2：base64(payload)  
Signature:  
part3: sha256(part1 + part2,'secret')  

完整：part1.part2.part3  
校验：将接收到的token的part1和part2结合secret通过sha256算法，看结果是否为part3