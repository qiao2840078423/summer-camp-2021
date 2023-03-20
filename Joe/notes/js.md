# JavaScript

- 使用 **window.alert()** 弹出警告框
- 使用 **document.write()** 方法将内容写到 HTML 文档中
- 使用 **innerHTML** 写入到 HTML 元素
- 使用 **console.log()** 写入到浏览器的控制台



- 如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖。
- 如果您把值赋给尚未声明的变量，该变量将被自动作为全局变量声明
- 在 HTML 中, 全局变量是 window 对象: 所有数据变量都属于 window 对象
- === 为绝对相等，即数据类型与值都必须相等



在 JavaScript 中有 5 种不同的数据类型：

- string
- number
- boolean
- object
- function

3 种对象类型：

- Object
- Date
- Array

2 个不包含任何值的数据类型：

- null
- undefined



-  **typeof** 操作符来查看 JavaScript 变量的数据类型
- **constructor** 属性返回所有 JavaScript 变量的构造函数
- **Operator +** 可用于将变量转换为数字



- 使用 JavaScript 内置函数 JSON.parse() 将字符串转换为 JavaScript 对象:
- **#** 包含了一个位置信息，默认的锚是**#top** 也就是网页的上端。而javascript:void(0), 仅仅表示一个死链接。在页面很长的时候会使用 **#** 来定位页面的具体位置，格式为：**# + id**。如果你要定义一个死链接请使用 javascript:void(0) 。