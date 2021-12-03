
new 主要做了三件事情
 * 1. 创建一个新对象
 * 2. 将这个新对象的_proto_指向构造函数
 * 2. 执行构造函数，并且将新对象绑定到构造函数的this上
 * 3. 返回这个新对象

```js
function _new () {
  // 取到构造函数
  var constructor = Array.prototype.shift.call(arguments)
  // 创建一个新对象，并将constructor.prototype作为这个对象的_proto_
  var obj = Object.create(constructor.prototype);
  var args = Array.prototype.slice.call(arguments, 1)
  constructor.apply(obj, args)
  return obj;
}
```