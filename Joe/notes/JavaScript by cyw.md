#### JS基础

- JavaScript = ECMAScript(语言基础) + Web APIs（DOM页面文档对象模型+BOM浏览器对象模型）
- 输出语法 
  - document.write(' ') 可以解析成网页元素
  - alert(' ') 跳过页面渲染优先被执行
  - console.log(' ') 
- 输入语法
  - prompt(' ') 跳过页面渲染优先被执行
- let : 允许、许可、让、要 
- var 旧版本使用  var可以先使用在声明，var声明过的变量可以重复声明，变量提升，全局变量，没有块级作用
- （变量名只能用 _ 、字母、数字、$ 组成，并且数字不能开头，严格区分大小写，规范：小驼峰命名法）
- 数组Array：[ ]      let arr = new Array( )    arr[0] = arr['0']
  - 属性 arr.length
  - 增：arr.push( )，返回数组新长度    arr.unshift( )，插入数组开头，返回新长度
  - 删：arr.pop( )返回删除的最后元素的值    arr.shift( )返回删除的开头元素     arr.splice(start,deleteCount )删除指定元素,返回由被删除的元素组成的一个数组
  - arr.sort( )升序，arr.sort(function(a,b){ return a-b})升序    arr.sort(function(a,b){ return b-a})降序
- 常量 const
- 数据类型：基本数据类型(number、string、boolean、undefined、null) + 引用数据类型(object)
  - 基本数据类型存储值本身，也称值类型，存放在**栈**；引用数据类型存储地址，存放在**堆**中
  - number中的NaN：not a number代表计算错误，不正确或者未定义的数学操作的结果
  - string：' '、" "、\` \`.
  - 模板字符串: \`今年${age}岁了\`
  - null + 1 = 1、undefined + 1 = NaN
  - 类型检测 typeof(x)、typeof x
  - 类型转换 +'123' = 123(+号作为正号解析可以转换成数字型)
  - 显示转换：
    - Number(数据) 结果为NaN则表示转换结果不是数字
    - "" 、null 数字转换成0，undefined 数字转换成 NaN
    - null == undefined 、null !== undefined
    - parseInt(数据)、parseFloat(数据)
    - Boolean( )   0、""、undefined、null、false、NaN 转换为布尔值后都是false 

- 运算符：+= 、++ 、\=\=(值相等)、\=\=\=(类型和值相等)、!\=(不等)、 !\=\=(不全等)  存在隐式转换
- 函数：命名，小驼峰式命名，前缀动词
  - 函数没有return 默认返回值为undefined
  - 函数内部变量不声明直接赋值可以当成全局变量
  - 匿名函数：let fn = function( ){ }  立即执行函数：(function( ){ })( )、(function( ){ }( ))
  - 函数取默认值：x = x || 0 逻辑中断
- 对象object：let obj = { }  、 let obj = new Object( )
  - obj.name  obj.['name']\(空格或者中横线的情况\)   obj.say( )、obj['say-i']\( \)
  - 删：delete obj.name
  - 遍历：for( let key in obj ){ obj[k] }

#### API

- DOM（Document Object Model ）操作网页内容

- 获取元素
  - document.querySelector('box' / '.class' / '#id') 选择匹配的第一个元素
  - document.querySelectorAll('CSS选择器') 选择匹配的多个元素  返回NodeList
  - document.getElementById('id') 根据id获取一个元素
  - document.getElementsByTagName('div') 根据标签获取页面所以div
  - document.getElementsByClassName('class') 根据类名获取页面所以类名为class的元素
  
- 修改元素
  - .innerText    显示纯文本，不解析标签
  - .innerHTML    解析标签

- 操作常见属性：href、title、src、className

- 操作样式属性
  - .style 生成行内样式表，权重比较高
  - .classList.add('newclass') 增加类
  - .classList.remove('oldclass') 删除类
  - .classList.toggle('class') 切换类   有类就删掉，没有类就增加
  - .classList.contains('class') 是否包含类 返回true false
  
- 操作表单属性
  - input.value 表单内容
  - input.type 

- 自定义属性
  - 专门的data- 自定义属性
  - 标签上以data- 开头
  - DOM对象上以dataset对象方式获取

- 定时器-间歇函数
  - 开启定时器：setInterval ( 函数，间隔时间/ms )  返回值是一个id数字
  - setInterval( 'fn( )',1000 )、setInterval( fn,1000 )
  - 关闭计时器：clearInterval( id )
  
- 事件监听
  - 对象.addEventListener('事件类型', function)   click、mouseover
  - 版本，DOM L0 事件源.on事件 = function( ){ }（事件会出现覆盖）、DOM L2 事件源.addEventListener(事件。处理函数)
  - 事件类型：
    - 鼠标事件：click、mouseenter鼠标经过、mouseleave鼠标离开
      - mouseover和mouseout 有冒泡效果  上面的两个没有冒泡效果
    - 焦点事件：focus获得焦点、blur失去焦点
    - 键盘事件：keydown键盘按下触发、keyup键盘抬起触发
    - 文本事件：input用户输入事件     change事件：value改变并失去焦点，值发生变化
  - 事件对象event
    - type属性 获取当前事件类型
    - clientX、clientY 光标相对浏览器可见窗口左上角
    - offsetX、offsetY 光标相对于当前DOM元素左上角
    - key 用户按下的键盘的值
  - 环境对象 this
  - 回调函数
  
- 事件流 事件捕获和事件冒泡

  - 阻止冒泡 事件对象.stopPropagation()  阻止流动传播包括冒泡和捕获

- 事件解绑

  - btn.onclick = null
  - btn.removeEventListener('click',fn)

- 事件委托

  - 利用子元素冒泡到父元素，减少注册次数

- 阻止默认行为

  - 阻止默认行为发送  阻止链接跳转、表单域跳转e.preventDefault( )

- 其他事件

  - 页面加载事件

    window.addEventListener('load',function( ){ }) 页面所有资源加载完成

    document.addEventListener('DOMContentLoaded',function( ){ }) 页面的DOM加载完毕，无需等待样式表和图像

  - 元素滚动事件

    滚动条滚动时触发，监听整个页面滚动

    window.addEventListener('scroll',function( ){ }) 

    获取html元素写法：document.documentElement

    scroll.scrollTop   scroll.scrollLeft   scroll.scrollTo(x,y)

  - 页面尺寸事件

    窗口改变时候触发

    window.addEventListener('resize',function( ){ }) 

    获取元素的可见部分宽高（不包含border，margin，滚动条等)  (包含padding)  clientWidth和clientHeight

    获取元素的自身宽高、包含元素自身设置的宽高、padding、border      offsetWidth和offsetHeight

    获取元素距离自己定位父级元素的左、上距离   offsetLeft和offsetTop  注意是只读属性

    element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置 

- 日期对象  const date = new Date()    const date = new Date('2023-1-1 08:30:00')

  - 对象方法 getFullYear()年份、getDate()日期、getDay()星期几
  - 时间戳：1970/1/1 00:00:00 起到现在的毫秒数  date.getTime()、+new Date()、Date.now()

- DOM节点:元素节点、属性节点、文本节点、其他

  - 父节点，.parentNode

  - 子节点：.childNodes 获得所有子节点    .children 获得所有元素节点

  - 兄弟节点：下一个兄弟节点：.nextElementSibling    上一个兄弟节点：.previousElementSibling

  - 新增节点 document.createElement('标签名')

  - 追加节点：父元素.appendChild( 元素 ) 插入父元素最后   父元素.insertBefore( 要插入的元素, 在哪个元素前面 )

  - 克隆节点：元素.cloneNode(布尔值) true:克隆包含后代节点   false:克隆不包含后代节点  默认false

  - 删除节点：父元素.removeChild(要删除的元素)

- M端事件 移动端

  - 触屏事件touch

  - touchstart 手指触摸到一个DOM元素触发

  - touchmove 手指在一个DOM元素上滑动时触发

  - touchend 手指在一个DOM元素上移开时触发

- BOM（Browser Object Model 浏览器对象模型）

- Window对象

  - 包含navigation、location、document、history、screen	
  - 定时器-延时函数 setTimeout(回调函数，等待毫秒数)
  - clearTimeout(timer)

- JS执行机制，单线程

  - 同步任务都在主线程上执行，形成一个执行栈

  - JS的异步是通过回调函数实现的

    一般而言，异步任务有以下三种类型:
    1、普通事件，如click、resize等

    2、资源加载，如load.error 等

    3、定时器，包括setlnterval、setTimeout等

    异步任务相关添加到任务队列中（任务队列也称为消息队列）

  - 执行机制

    1.先执行执行栈中的同步任务。

    2.异步任务放入任务队列中。

    3.一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。

  - 由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为事件循环（ event loop)。
  
- location 对象

  - location.href   常用于跳转页面
  - location.search  获取地址中携带的参数，？后面部分
  - location.hash  获取地址中的哈希值， # 后面部分
  - location.reload(true) true强制刷新 

- navigator 对象

  - navigator.userAgent 检查浏览器版本及平台

- history 对象

  - history.back()
  - history.forward()
  - history.go(参数) 1前进、-1后退

- localStorage  本地存储只能存储字符串数据类型

  - localStorage  数据永久存储在本地，同一浏览器共享，以键值对的形式存储使用
  - localStorage.setItem( key,value ) 增或改
  - localStorage.getItem( key ) 查
  - localStorage.removeItem( key ) 删
  - sessionStorage 生命周期为关闭浏览器窗口

- localStorage   存储复杂数据类型

  - 复杂数据类型转换成JSON字符串，再存储
  - JSON.stringify( 复杂对象类型 )   复杂数据转JSON字符串
  - JSON字符串：属性和值有引号，引号统一双引号
  - JSON.parse( JSON字符串 )   JSON字符串转复杂数据类型
  
- map()，join()数组方法实现字符串拼接

  - map()，遍历数组处理数据，返回新数组
  - arr.map( function(ele,index){ return ele+'其他'} )
  - join()，把数组所有元素转换为一个字符串 默认为逗号，
  
- 正则表达式

  - const 变量名 = / 表达式 /

  - test( )正则表达式与指定字符串是否匹配 regObj.test(被检测字符串)  匹配则返回true否则返回false

  - exec( ) 一个指定字符串中执行一个搜索匹配 regObj.test(被检测字符串)  匹配成功返回数组否则返回null

  - 元字符：具有特殊含义的字符；分类：边界符(表示位置开头结尾)、量词(重复次数)、字符类( \d表示0~9 )

    [a-z]、[A-Z]、[0-9]、[a-zA-Z]、[a-zA-Z0-9]

    边界符：^ 表示匹配首行文本；$ 表示匹配行尾文本

    量词：*：重复0次或更多次，+：重复1次或更多次，？重复0次或1次，

    ​		{n}：重复n次，{n,}：重复n次或更多次，{n,m}：重复n到m次
	- 字符类：[ ]匹配字符集合 包含中括号之中任何一个字符即可，\[^a-z\] 匹配除小写字母以外的字符，**.** 点表示除换行符之外的任何单个字符
	- 预定类：\d = [0-9]、\D = \[^0-9\]、\w = 字母数字下划线、\W 除了字母数字下划线、\s = [\t \r \n \v \f]匹配空格包括换行制表空格、\S 除了空格的字符
	- 修饰符：约束正则执行的某些细节行为，如是否区分大小写、是否支持多行匹配
	
	  /表达式/修饰符	**i** ignore的缩写，表示字母不区分大小写；**g** global的缩写，匹配所有满足正则表达式的结果     
	
	  替换：字符串.replace(/正则表达式/，'替换的文本')  返回一个新的字符串作为结果

#### JS进阶

- 作用域scope
  - 局部作用域（函数作用域+块作用域）和全局作用域
  - let和const声明的变量会产生**块作用域**，var不会
- 作用域链：原则：优先查找当前函数作用域中的变量，再依次逐级查找父级作用域直到全局作用域；**本质是底层的变量查找机制** 
- 垃圾回收机制（Garbage Collection）GC：生命周期：内存分配、内存使用、内存回收
  - 内存泄漏：程序中分配的内存由于某种原因程序未释放或无法释放
  - 垃圾回收算法：引用计数法（不再使用的对象）、标记清除法（无法到达的对象）

- 闭包

