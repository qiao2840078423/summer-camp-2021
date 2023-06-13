# Vue

[TOC]

### 1.数据绑定

- v-bind（单向）、v-model（双向）
- v-model不能应用于某些标签，如h1
- v-model收集的就是value值，因此可以省去value

- data函数式不能使用箭头函数，因为箭头函数内部无this；若使用普通函数，则this指向Vue实例

### 2.事件处理

#### 事件的基本使用

- v-on:click="函数名()"
- 简写成@click=''函数名''
- 默认传参event

#### 事件修饰符

- prevent: 阻止默认事件
- stop: 阻止冒泡
- once: 事件只触发一次
- capture: 使用事件的捕获模式
- self: 只有event.target是当前操作的元素时才触发事件
- passive: 事件的默认行为立即执行，无需等待事件回调执行完毕
- 事件修饰符可使用链式结构

#### 键盘事件

- @keyup.enter（别名）
- 系统修饰键（用法特殊）：ctrl、alt、shift、meta，建议配合keydown使用
- 键盘事件可使用链式结构

### 3.计算属性

- computed，由已有的属性计算而来
- get，混存，return的值就是计算属性的值
- set，属性要被修改，则必须写set方法

### 4.监视属性

#### 基本使用

- watch handler 一修改就触发
- 可通过vm.$watch监视

#### 深度监视

- Vue中的watch默认不监测对象内部值的改变（一层）
- 配置deep:true可以检测对象内部值的改变
- 当配置项中只有handler时可简写

#### watch对比computed

- computed能完成的功能，watch都可以完成
- watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作
- 被vue管理的函数，最好写成普通函数，这样this指向vm实例对象
- 不为vue管理的函数，最好写成箭头函数（定时器的回调函数、ajax的回调函数、promise的回调函数）

### 5.绑定样式

#### 绑定class样式

- 字符串写法：样式的类名不确定，需要动态指定
- 数组写法：绑定的样式个数不确定，名字也不确定
- 对象写法：绑定的样式个数确定，名字也确定，但要动态决定用不用

#### 绑定style样式

- 对象写法
- 数组写法

### 6.条件渲染

- v-if：适用于切换频率比较低的场景
- v-show：适用于切换频率比较高的场景，不展示的DOM未被移除，仅仅是试用样式隐藏

### 7.列表渲染

#### 基本列表

- v-for：可遍历数组、对象、字符串、指定次数

#### key的原理

1. 虚拟DOM中key的作用：

​					key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据新数据生成新的虚拟DOM；

​					随后Vue进行新虚拟DOM与旧虚拟DOM的差异比较，比较规则如下：

2. 比较规则

​					key相同：

​									虚拟DOM中内容没有变，直接使用之前的真实DOM；

​									虚拟DOM内容变了，则生成新的真实DOM，替换之前页面中的DOM

​					key不同：

​									创建新的真实DOM，随后渲染到页面

#### Vue数据监测的原理-监测对象

- Vue创建一个检测实例obsever，该实例实现函数首先把传入的data的属性变为列表，再遍历列表，使该实例为每个属性进行数据代理，最后把该实例赋给vm.\_data（当data有多层数据时，进行递归，保证每个属性都被数据代理）
- Vue在数据代理中的set方法实现页面动态变化的效果，set方法内部包括产生新的虚拟DOM、与旧DOM进行比较……更新页面
- Vue还用vm.data数据代理vm._data，所以在控制台敲入vm.data时，里面的属性需要使用get方法读取vm.\_data里的属性值，而它又是通过数据监测中的get方法读取原生data属性值（数据劫持）；同理，在修改vm.data时，首先修改vm.\_data的属性，而后通过数据监测调用set方法改变原生data属性值，与此同时对页面进行操作。

#### 总结Vue监视数据

1. vue会监视data中所有层次的数据
2. 如何监测对象中的数据？

​						通过setter实现监视，且要在new Vue时就传入要监测的数据

​							（1）对象中后追加的属性，Vue默认不做响应式处理

​							（2）如需给后添加的属性做响应式，请使用如下API：

​											Vue.set(target, propertyNmae/index, value)或

​											vm.$set(target, propertyNmae/index, value)

3. 如何监测数组中的数据？

​						通过包裹数据更新元素的方法实现，本质就是做了两件事：

​							（1）调用原生对应的方法对数据进行更新

​							（2）重新解析模板，进而更新页面

4. 在Vue修改数组中的某个元素一定要使用如下方法：

​				（1）使用这些API：push()  pop()  shift()  unshift()  splice()  sort()  reverse()

​				（2）Vue.set() 或 vm.$set()

​	特别注意，Vue.set() 和 vm.$set() 不能给vm（vm.data）或vm的根数据对象（vm._data）添加属性！！！

### 8.收集表单数据

- 单选type="radio"，name=...，v-model=...，需要配置value值
- 复选type="checkbox"，若没有配置value属性，则收集到的就是checked（布尔值）；若配置了value属性，则需要v-model的初始值是数组，那么收集的就是value组成的数组，否则收集到的就是checked（布尔值）
- v-model的三个修饰符：
  - lazy：失去焦点再收集数据
  - number：数字字符转为有效的数字
  - trim：输入首位空格过滤

### 9.内置指令

#### v-cloak

- 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性
- 使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题

#### v-once

- v-once所在节点在初次动态渲染后，就视为静态渲染了

#### v-pre

- 跳过其所在节点的编译过程
- 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译

### 10.自定义指令

1. 局部指令：

   ​		new Vue({

   ​				directives:{指令名：配置对象}   或   directives:{指令名：回调函数}

   ​		})

2. 配置对象中常用的三个回调

   - bind：指令与元素成功绑定时调用
   - inserted：指令所在元素被插入页面时调用
   - update：指令所在模板结构被重新解析时调用

3. 指令名不用驼峰命名法，两个单词间用-连接

### 11.生命周期

#### 生命周期

1. 又名：生命周期回调函数、生命周期函数、生命周期钩子
2. 是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数
3. 生命周期的函数不可更改
4. 生命周期中的this指向是vm或组件实例对象



![image-20230517155939577](D:\files\Github\summer-camp-2021\Joe\notes\images\image-20230517155939577.png)

![image-20230517160135983](D:\files\Github\summer-camp-2021\Joe\notes\images\image-20230517160135983.png)

- 常用的生命周期钩子：
  1. mounted：发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】
  2. beforeDestroy：清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】
- 关于销毁Vue实例：
  1. 销毁后借助Vue开发者工具看不到任何东西
  2. 销毁后自定义事件会失效，但原生DOM事件依然有效
  3. 一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了

### 12.非单文件组件

#### Vue中使用组件的三大步骤

1. 定义组件
2. 注册组件
3. 使用组件

#### 一个重要的内置关系

- VueComponent.prototype.\__proto__ === Vue.prototype
- 让组件实例对象可以访问到Vue原型上的属性、方法

### 13.单文件组件

#### 脚手架

#### render函数

- vue.js是完整版的Vue，包含：核心功能+模板解析器
- vue.runtime.xxx.js是运行版的Vue，只包含：核心功能，没有模板解析器
- 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容

#### ref属性

- 被用来给元素或子组件注册引用信息（id的替代者）
- 应用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象（vc）
- 使用方式：
  - \<h1 ref="xxx">......\</h1> 或 \<School ref="xxx">......\</School>
  - 获取：this.$refs.xxx

#### props配置项

- 功能：让组件接收外部传来的数据
- props是只读的，Vue底层会监测对props的修改，如果修改会发出警告；若业务需求修改，则复制props的内容到data中的一份，然后去修改data中的数据

#### mixin混入

- 功能：可以把多个组件共用的配置提取成一个混入对象
- 混入要使用分别暴露

#### 插件

- 功能：用于增强Vue

- 本质：包含install方法的一个对象，install方法的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据

- 定义插件：

  - 对象.install = function (Vue, options){

    ​	// 1. 添加全局过滤器

    ​	Vue.filter(....)

    ​	// 2. 添加全局指令

    ​	Vue.directive(....)

    ​	// 3. 配置全局混入

    ​	Vue.mixin(...)

    ​	// 4. 添加实例方法

    ​	Vue.prototype.$myMethod = function () {...}

    ​	Vue.prototype.$myProperty = xxxx

    }

- 使用插件：main.js中引入后Vue.use(plugins)

#### scoped样式

- 作用：让样式在局部生效，防止冲突
- 使用：\<style scoped>

### 14.TodoList案例

1. 组件化编码流程：

​			(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。

​			(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

​					1).一个组件在用：放在组件自身即可。

​					2). 一些组件在用：放在他们共同的父组件上（<span style="color:red">状态提升</span>）。

​			(3).实现交互：从绑定事件开始。

2. props适用于：

​			(1).父组件 ==> 子组件 通信

​			(2).子组件 ==> 父组件 通信（要求父先给子一个函数）

3. 使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
4. props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。
