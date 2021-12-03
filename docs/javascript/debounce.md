适用于高频事件
防抖：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次
比如: 搜索输入框,用户连续输入停止后触发索引

```js
/**
 * 
 * @param {*} fn 执行函数
 * @param {*} delay 延迟触发间隔
 * @returns 
 */
function debounce(fn, delay = 100) {
    let timer = null; // 闭包
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            timer = null;
        }, delay);
    }
}
```