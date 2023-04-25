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
