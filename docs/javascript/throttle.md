节流:当持续触发事件时，保证间隔一定时间段内只调用一次事件处理函数。
按照一定的时间间隔触发事件
场景，拖拽事件中获取元素的位置，导致过于频繁的触发函数

```js
/**
 * 
 * @param {*} fn 执行函数
 * @param {*} delay 函数执行时间间隔
 * @returns 
 */

function throttle (fn, delay = 100) {
  let timer = null;

  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null
    }, delay);
  }
}
```