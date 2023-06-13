<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="update(todo.id)" />
      <!-- 不建议这种做法，因为props传进来的数据只读 -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span>{{ todo.task }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteLi(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo", "updateDone", "deleteTodo"],
  methods: {
    update(id) {
      this.updateDone(id);
    },
    deleteLi(id){
        if(confirm("确定删除吗？")){
            this.deleteTodo(id)
        }
    }
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ddd;
}

li:hover button {
  display: block;
}
</style>