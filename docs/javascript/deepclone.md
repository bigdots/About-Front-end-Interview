

对象的赋值只是传址

## JSON转化
```js
function deepClone(tar) {
  return JSON.parse(JSON.stringify(tar))
}
```


## 递归
```js

// 基本类型判断
function IsBasicType(value) {
    const type = typeof value;
    return type !== "object" || type == null
}

function deepClone(tar) {
    if (IsBasicType(tar)) {
        // 如果是基本类型值，直接返回
        return tar
    }


    // 初始化结果
    let result;
    if (tar instanceof Array) {
        result = [];
    } else {
        result = {}
    }

    for (const key in tar) {
        // 判断是否为原型链上的属性
        if (Object.hasOwnProperty.call(tar, key)) {
            const element = tar[key];
            // 递归
            result[key] = deepClone(element)
        }
    }

    return result;
}
```