# ts的基本类型检查约束

## **如何进行类型约束**

- 变量后添加 `:` 即可，如  ```let str:string;```
- ts在很多场景下可以进行自动的类型推导；
---
## **基本类型**：
- `number`
- `boolean`
- `string`
- `object`（不太常用）
- 数组
- `null` 和 `undefined`
  - `null` 和 `undefined` 是其他类型的子类型
  - 这样的话就可以将`null` 和 `undefined` 赋值给其他类型的变量，如 `let string:number = null`；但这就会引起程序中隐患，因此我们必须规避这样的问题，**在`tsconfig.json`文件中加入`"strictNullChecks": true` 的编译选项。**
---
## **其他常用类型**

- 联合类型：多种类型任选其一
  - 写法如下：```let str:string | null; ``` ，表示 `str` 变量既可以是 `string` 类型又可以赋值为 `null`；

  ---
- `void` 类型
  - 通常用于约束函数的返回类型，表示没有任何返回值；

  ---
- `never` 类型
  - 通常用于约束函数的返回类型，表示函数永远不会结束；

  ---
- 字面量类型
  - 使用值进行约束；
  - 案例：
  ![](https://github.com/cdydayang/img/blob/master/carbon%20(2).png?raw=true)

  ---
- 元祖类型（tuple）
  - 一个固定长度的数组，并且数组中每一项的值类型也固定；
  - 案例：
  ```
    let arr:[string,number];
    arr = ['dayang',18];
  ```
---
- any 类型

---

## **类型别名**
- 对已知的一些类型定义名称:
- 形式：``` type 类型名 = ... ```
- 案例：
  
    ![](https://github.com/cdydayang/img/blob/master/carbon%20(3).png?raw=true)

---

## **源代码和编译结果的差异**
