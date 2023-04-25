# ES6

[TOC]

### ECMAScript 6简介

- ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现

------

### let和const命令

#### let命令

- JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量`i`时，就在上一轮循环的基础上进行计算

- `for`循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
- 不存在变量提升
- 在代码块内，使用`let`命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”
- `let`不允许在相同作用域内，重复声明同一个变量
- 块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要

#### 块级作用域

- ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域

#### const命令

- 声明一个只读的常量

- `const`的作用域与`let`命令相同：只在声明所在的块级作用域内有效

- `const`命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用

- `const`声明的常量，也与`let`一样不可重复声明

- `const`实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动

- `var`命令和`function`命令声明的全局变量，依旧是顶层对象的属性；`let`命令、`const`命令、`class`命令声明的全局变量，不属于顶层对象的属性

  ------

### 变量的解构赋值

#### 数组的解构赋值

- 如果解构不成功，变量的值就等于`undefined`
- ES6 内部使用严格相等运算符（`===`），判断一个位置是否有值。所以，只有当一个数组成员严格等于`undefined`，默认值才会生效
- 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值

#### 对象的解构赋值

- 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量

![image-20230329113804479](E:\Github\summer-camp-2021\Joe\notes\images\image-20230329113804479.png)

![image-20230329113914344](E:\Github\summer-camp-2021\Joe\notes\images\image-20230329113914344.png)

![image-20230329113952206](E:\Github\summer-camp-2021\Joe\notes\images\image-20230329113952206.png)

-  JavaScript 引擎会将`{x}`理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块

#### 字符串的解构赋值

![image-20230403171847148](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403171847148.png)

#### 圆括号问题

- 可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号

  ------

### 函数

#### 函数参数的默认值

- 参数变量是默认声明的，所以不能用`let`或`const`再次声明
- 使用参数默认值时，函数不能有同名参数

![image-20230403200139978](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403200139978.png)

- 参数默认值是惰性求值的
- 参数默认值可以与解构赋值的默认值，结合起来使用

![image-20230403200448042](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403200448042.png)

- 如果非尾部的参数设置默认值，实际上这个参数是没法省略的

![image-20230403201328856](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403201328856.png)

- 上面代码中，有默认值的参数都不是尾参数。这时，无法只省略该参数，而不省略它后面的参数，除非显式输入`undefined`
- 如果传入`undefined`，将触发该参数等于默认值，`null`则没有这个效果
- 指定了默认值以后，函数的`length`属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，`length`属性将失真
- 如果设置了默认值的参数不是尾参数，那么`length`属性也不再计入后面的参数了
- 代码中，参数`x = x`形成一个单独作用域。实际执行的是`let x = x`，由于暂时性死区的原因，这行代码会报错”x 未定义“

![image-20230403201749360](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403201749360.png)

#### rest参数

![image-20230403202711740](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403202711740.png)

- 注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错

#### 严格模式

- 只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错
- 这样规定的原因是，函数内部的严格模式，同时适用于函数体和函数参数。但是，函数执行的时候，先执行函数参数，然后再执行函数体。这样就有一个不合理的地方，只有从函数体之中，才能知道参数是否应该以严格模式执行，但是参数却应该先于函数体执行

#### name属性

- 函数的`name`属性，返回该函数的函数名
- 如果将一个匿名函数赋值给一个变量，ES5 的`name`属性，会返回空字符串，而 ES6 的`name`属性会返回实际的函数名

![image-20230403203316288](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403203316288.png)

- 如果将一个具名函数赋值给一个变量，则 ES5 和 ES6 的`name`属性都返回这个具名函数原本的名字

![image-20230403203402338](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403203402338.png)

- `Function`构造函数返回的函数实例，`name`属性的值为`anonymous`

![image-20230403203522897](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403203522897.png)

- `bind`返回的函数，`name`属性值会加上`bound`前缀

![image-20230403203549243](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403203549243.png)

#### 箭头函数

- 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
- 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用`return`语句返回
- 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错

![image-20230403210954144](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403210954144.png)

- **使用注意点**
- （1）函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象
- （2）不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误
- （3）不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替
- （4）不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数
- 上面四点中，第一点尤其值得注意。`this`对象的指向是可变的，但是在箭头函数中，它是固定的
- 箭头函数让this绑定定义时所在的作用域，而不是指向运行时所在的作用域

![image-20230403211410919](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403211410919.png)

- 上面代码中，`Timer`函数内部设置了两个定时器，分别使用了箭头函数和普通函数。前者的`this`绑定定义时所在的作用域（即`Timer`函数），后者的`this`指向运行时所在的作用域（即全局对象）。所以，3100 毫秒之后，`timer.s1`被更新了 3 次，而`timer.s2`一次都没更新
- 箭头函数可以让`this`指向固定化，这种特性很有利于封装回调函数。下面是一个例子，DOM 事件的回调函数封装在一个对象里面

![image-20230403211443966](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403211443966.png)

- 上面代码的`init`方法中，使用了箭头函数，这导致这个箭头函数里面的`this`，总是指向`handler`对象。否则，回调函数运行时，`this.doSomething`这一行会报错，因为此时`this`指向`document`对象
- `this`指向的固定化，并不是因为箭头函数内部有绑定`this`的机制，实际原因是箭头函数根本没有自己的`this`，导致内部的`this`就是外层代码块的`this`。正是因为它没有`this`，所以也就不能用作构造函数
- 除了`this`，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：`arguments`、`super`、`new.target`
- 箭头函数内部的变量`arguments`，其实是函数`foo`的`arguments`变量
- 由于箭头函数没有自己的`this`，所以当然也就不能用`call()`、`apply()`、`bind()`这些方法去改变`this`的指向
- **不适用场合**
- **（1）定义对象的方法，且该方法内部包括`this`**

![image-20230403211644847](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403211644847.png)

- 上面代码中，`cat.jumps()`方法是一个箭头函数，这是错误的。调用`cat.jumps()`时，如果是普通函数，该方法内部的`this`指向`cat`；如果写成上面那样的箭头函数，使得`this`指向全局对象，因此不会得到预期结果。这是因为对象不构成单独的作用域，导致`jumps`箭头函数定义时的作用域就是全局作用域
- **（2）需要动态`this`的时候，也不应使用箭头函数**

![image-20230403211746193](E:\Github\summer-camp-2021\Joe\notes\images\image-20230403211746193.png)

- 上面代码运行时，点击按钮会报错，因为`button`的监听函数是一个箭头函数，导致里面的`this`就是全局对象。如果改成普通函数，`this`就会动态指向被点击的按钮对象
- 另外，如果函数体很复杂，有许多行，或者函数内部有大量的读写操作，不单纯是为了计算值，这时也不应该使用箭头函数，而是要使用普通函数，这样可以提高代码可读性

  ------

### Symbol

#### 概述

- ES6 引入了一种新的原始数据类型`Symbol`，表示独一无二的值。
- 注意，`Symbol`函数前不能使用`new`命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。
- 如果 Symbol 的参数是一个对象，就会调用该对象的`toString`方法，将其转为字符串，然后才生成一个 Symbol 值。

![image-20230409231549297](E:\Github\summer-camp-2021\Joe\notes\images\image-20230409231549297.png)

- Symbol 值不能与其他类型的值进行运算，但是，Symbol 值可以显式转为字符串

![image-20230409231704424](E:\Github\summer-camp-2021\Joe\notes\images\image-20230409231704424.png)

- 另外，Symbol 值也可以转为布尔值，但是不能转为数值

#### Symbol.prototype.description

- 实例属性`description`，直接返回 Symbol 的描述

![image-20230409231938937](E:\Github\summer-camp-2021\Joe\notes\images\image-20230409231938937.png)

#### 作为属性名的 Symbol

![image-20230409232524786](E:\Github\summer-camp-2021\Joe\notes\images\image-20230409232524786.png)

- Symbol 值作为对象属性名时，不能用点运算符
- 同理，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中
- Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的

#### 属性名的遍历

- Symbol 作为属性名，遍历对象的时候，该属性不会出现在`for...in`、`for...of`循环中，也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`返回
- 但是，它也不是私有属性，有一个`Object.getOwnPropertySymbols()`方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值
- 使用`for...in`循环和`Object.getOwnPropertyNames()`方法都得不到 Symbol 键名，需要使用`Object.getOwnPropertySymbols()`方法

![image-20230410000347544](E:\Github\summer-camp-2021\Joe\notes\images\image-20230410000347544.png)

- 另一个新的 API，`Reflect.ownKeys()`方法可以返回所有类型的键名，包括常规键名和 Symbol 键名
- 由于以 Symbol 值作为键名，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法

#### Symbol.for()，Symbol.keyFor()

- 我们希望重新使用同一个 Symbol 值，`Symbol.for()`方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到**全局**
- `Symbol.keyFor()`方法返回一个已登记的 Symbol 类型值的`key`

![image-20230410151706897](E:\Github\summer-camp-2021\Joe\notes\images\image-20230410151706897.png)

------

### Set和Map数据结构

#### Set

##### 基本用法

- 类似于数组，但是成员的值都是唯一的，没有重复的值
- `Set`函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化

![image-20230410184007816](E:\Github\summer-camp-2021\Joe\notes\images\image-20230410184007816.png)



- 上面代码中，例一和例二都是`Set`函数接受数组作为参数，例三是接受类似数组的对象作为参数
- 上面代码也展示了一种去除数组重复成员的方法

![image-20230410184104699](E:\Github\summer-camp-2021\Joe\notes\images\image-20230410184104699.png)

- 上面的方法也可以用于，去除字符串里面的重复字符

![image-20230410184133170](E:\Github\summer-camp-2021\Joe\notes\images\image-20230410184133170.png)

- 两个对象总是不相等的

![image-20230410184206649](E:\Github\summer-camp-2021\Joe\notes\images\image-20230410184206649.png)

- 上面代码表示，由于两个空对象不相等，所以它们被视为两个值

##### Set实例的属性和方法

- `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
- `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `Set.prototype.clear()`：清除所有成员，没有返回值
- `Array.from`方法可以将 Set 结构转为数组
- 这就提供了去除数组重复成员的另一种方法

![image-20230410184400600](E:\Github\summer-camp-2021\Joe\notes\images\image-20230410184400600.png)

##### 遍历操作

- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

![image-20230410184509817](E:\Github\summer-camp-2021\Joe\notes\images\image-20230410184509817.png)

- Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的`values`方法
- 这意味着，可以省略`values`方法，直接用`for...of`循环遍历 Set

![image-20230410184550387](E:\Github\summer-camp-2021\Joe\notes\images\image-20230410184550387.png)

- 扩展运算符（`...`）内部使用`for...of`循环，所以也可以用于 Set 结构

![image-20230410184651261](E:\Github\summer-camp-2021\Joe\notes\images\image-20230410184651261.png)

- 扩展运算符和 Set 结构相结合，就可以去除数组的重复成员

![image-20230410184715579](E:\Github\summer-camp-2021\Joe\notes\images\image-20230410184715579.png)

- 而且，数组的`map`和`filter`方法也可以间接用于 Set 了

![image-20230410184755922](E:\Github\summer-camp-2021\Joe\notes\images\image-20230410184755922.png)

#### Map

##### 含义和基本用法

- ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现
- 作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组

![image-20230412171340927](E:\Github\summer-camp-2021\Joe\notes\images\image-20230412171340927.png)

- `Set`和`Map`都可以用来生成新的 Map

![image-20230412171507260](E:\Github\summer-camp-2021\Joe\notes\images\image-20230412171507260.png)

- 同样的值的两个实例，在 Map 结构中被视为两个键

![image-20230412171609497](E:\Github\summer-camp-2021\Joe\notes\images\image-20230412171609497.png)

- 由上可知，Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键

##### 实例的属性和操作方法

- `size`属性返回 Map 结构的成员总数
- `set`方法设置键名`key`对应的键值为`value`，然后返回整个 Map 结构。如果`key`已经有值，则键值会被更新，否则就新生成该键
- `get`方法读取`key`对应的键值，如果找不到`key`，返回`undefined`
- `has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
- `delete`方法删除某个键，返回`true`。如果删除失败，返回`false`
- `clear`方法清除所有成员，没有返回值

##### 遍历方法

- `Map.prototype.keys()`：返回键名的遍历器。
- `Map.prototype.values()`：返回键值的遍历器。
- `Map.prototype.entries()`：返回所有成员的遍历器。
- `Map.prototype.forEach()`：遍历 Map 的所有成员。

##### 与其他结构的相互转换

- Map转为数组

![image-20230412171940209](E:\Github\summer-camp-2021\Joe\notes\images\image-20230412171940209.png)

- 数组转为Map：将数组传入 Map 构造函数，就可以转为 Map
- Map转为对象：如果所有 Map 的键都是字符串，它可以无损地转为对象；如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名

![image-20230412172126322](E:\Github\summer-camp-2021\Joe\notes\images\image-20230412172126322.png)

- 对象转为Map：对象转为 Map 可以通过`Object.entries()`

![image-20230412172224803](E:\Github\summer-camp-2021\Joe\notes\images\image-20230412172224803.png)

- Map转为JSON：Map 的键名都是字符串，这时可以选择转为对象 JSON；Map 的键名都是字符串，这时可以选择转为对象 JSON

![image-20230412172421366](E:\Github\summer-camp-2021\Joe\notes\images\image-20230412172421366.png)

![image-20230412172451242](E:\Github\summer-camp-2021\Joe\notes\images\image-20230412172451242.png)

- JSON转为Map：先转为对象，再转为Map

![image-20230412172610772](E:\Github\summer-camp-2021\Joe\notes\images\image-20230412172610772.png)

------

### Promise对象

#### Promise的含义

- Promise 是异步编程的一种解决方案
- 所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理
- `Promise`对象有以下两个特点：对象的状态不受外界影响，有三种状态：`pending`（进行中）、`fulfilled`（已成功）和`rejected`（已失败）；一旦状态改变，就不会再变，任何时候都可以得到这个结果。`Promise`对象的状态改变，只有两种可能：从`pending`变为`fulfilled`和从`pending`变为`rejected`。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。

#### 基本用法

- ES6 规定，`Promise`对象是一个构造函数，用来生成`Promise`实例

![image-20230412213550786](D:\files\Github\summer-camp-2021\Joe\notes\images\image-20230412213550786.png)

- `Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
- `resolve`函数的作用是，将`Promise`对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；`reject`函数的作用是，将`Promise`对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去
- `Promise`实例生成以后，可以用`then`方法分别指定`resolved`状态和`rejected`状态的回调函数

![image-20230412213639624](D:\files\Github\summer-camp-2021\Joe\notes\images\image-20230412213639624.png)

- `then`方法可以接受两个回调函数作为参数。第一个回调函数是`Promise`对象的状态变为`resolved`时调用，第二个回调函数是`Promise`对象的状态变为`rejected`时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受`Promise`对象传出的值作为参数
- Promise 新建后就会立即执行

![image-20230412213750236](D:\files\Github\summer-camp-2021\Joe\notes\images\image-20230412213750236.png)

- 上面代码中，Promise 新建后立即执行，所以首先输出的是`Promise`。然后，`then`方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以`resolved`最后输出
- 注意，调用`resolve`或`reject`并不会终结 Promise 的参数函数的执行

![image-20230412213839470](D:\files\Github\summer-camp-2021\Joe\notes\images\image-20230412213839470.png)

- 上面代码中，调用`resolve(1)`以后，后面的`console.log(2)`还是会执行，并且会首先打印出来。这是因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务
- 一般来说，调用`resolve`或`reject`以后，Promise 的使命就完成了，后继操作应该放到`then`方法里面，而不应该直接写在`resolve`或`reject`的后面。所以，最好在它们前面加上`return`语句，这样就不会有意外

#### Promise.resolve()

- 将现有对象转为 Promise 对象，`Promise.resolve()`方法就起到这个作用
- `Promise.resolve`方法的参数分成四种情况。
- **（1）参数是一个 Promise 实例**，那么`Promise.resolve`将不做任何修改、原封不动地返回这个实例
- **（2）参数是一个`thenable`对象**
- `Promise.resolve`方法会将这个对象转为 Promise 对象，然后就立即执行`thenable`对象的`then`方法

![image-20230412202915591](E:\Github\summer-camp-2021\Joe\notes\images\image-20230412202915591.png)

- 上面代码中，`thenable`对象的`then`方法执行后，对象`p1`的状态就变为`resolved`，从而立即执行最后那个`then`方法指定的回调函数，输出 42
- **（3）参数不是具有`then`方法的对象，或根本就不是对象**
- 如果参数是一个原始值，或者是一个不具有`then`方法的对象，则`Promise.resolve`方法返回一个新的 Promise 对象，状态为`resolved`
- **（4）不带有任何参数**
- 需要注意的是，立即`resolve()`的 Promise 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时

#### Promise.reject()

- 注意，`Promise.reject()`方法的参数，会原封不动地作为`reject`的理由，变成后续方法的参数。这一点与`Promise.resolve`方法不一致

![image-20230412203605607](E:\Github\summer-camp-2021\Joe\notes\images\image-20230412203605607.png)

- 上面代码中，`Promise.reject`方法的参数是一个`thenable`对象，执行以后，后面`catch`方法的参数不是`reject`抛出的“出错了”这个字符串，而是`thenable`对象

### Class的继承

#### 简介

- 子类必须在`constructor`方法中调用`super`方法，否则新建实例时会报错。这是因为子类自己的`this`对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用`super`方法，子类就得不到`this`对象
- 如果子类没有定义`constructor`方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有`constructor`方法
- 另一个需要注意的地方是，在子类的构造函数中，只有调用`super`之后，才可以使用`this`关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有`super`方法才能调用父类实例
- 父类的静态方法，也会被子类继承
- `Object.getPrototypeOf`方法可以用来从子类上获取父类

#### super关键字

- `super`这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同
- 第一种情况，`super`作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次`super`函数
- 注意，`super`虽然代表了父类`A`的构造函数，但是返回的是子类`B`的实例，即`super`内部的`this`指的是`B`的实例
- 第二种情况，`super`作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类
- 这里需要注意，由于`super`指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过`super`调用的
- ES6 规定，在子类普通方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类实例
- 由于`this`指向子类实例，所以如果通过`super`对某个属性赋值，这时`super`就是`this`，赋值的属性会变成子类实例的属性
- 如果`super`作为对象，用在静态方法之中，这时`super`将指向父类，而不是父类的原型对象
- 另外，在子类的静态方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类，而不是子类的实例

#### 类的proto属性和prototype属性

- 子类的`__proto__`属性，表示构造函数的继承，总是指向父类
- 子类`prototype`属性的`__proto__`属性，表示方法的继承，总是指向父类的`prototype`属性
- 下面，讨论两种情况。第一种，子类继承`Object`类
- `A.__proto__ === Object // true`
- `A.prototype.__proto__ === Object.prototype // true`
- 第二种情况，不存在任何继承
- `A.__proto__ === Function.prototype // true`
- `A.prototype.__proto__ === Object.prototype // true`
- 实例的proto属性：

- 子类实例的`__proto__`属性的`__proto__`属性，指向父类实例的`__proto__`属性

### 其他零碎内容

#### Iterator接口

原生具备 Iterator 接口的数据结构如下：

- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

#### Mixin模式的实现

- `mix`函数，可以将多个对象合成为一个类。使用的时候，只要继承这个类即可
- `class DistributedEdit extends mix(Loggable, Serializable) {`
- `  // ...`
- `}`
