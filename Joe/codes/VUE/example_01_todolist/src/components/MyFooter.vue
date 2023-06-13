<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneAll }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todoList", "checkAllTodo", "clearDoneTodo"],
  computed: {
    doneAll() {
      return this.todoList.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
    total() {
      return this.todoList.length;
    },
    isAll: {
      get() {
        return this.doneAll === this.total && this.total > 0;
      },
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },
  methods: {
    clearDone() {
        if(confirm("确定删除所有完成项？")){
            this.clearDoneTodo();
        }
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>