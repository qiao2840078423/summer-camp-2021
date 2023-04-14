# Vue

[TOC]

### 数据绑定

- v-bind（单向）、v-model（双向）
- v-model不能应用于某些标签，如h1
- v-model收集的就是value值，因此可以省去value

- data函数式不能使用箭头函数，因为箭头函数内部无this；若使用普通函数，则this指向Vue实例