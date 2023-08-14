<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"></MyHeader>
        <MyList :todoList="todoList"></MyList>
        <MyFooter
          :todoList="todoList"
          :checkAllTodo="checkAllTodo"
          :clearDoneTodo="clearDoneTodo"
        ></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo(obj) {
      this.todoList.unshift(obj);
    },
    updateDone(id) {
      this.todoList.forEach((obj) => {
        if (obj.id === id) obj.done = !obj.done;
      });
    },
    updateTodo(id, task) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) todo.task = task;
      });
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter((obj) => {
        return obj.id !== id;
      });
    },
    checkAllTodo(checked) {
      this.todoList.forEach((obj) => {
        obj.done = checked;
      });
    },
    clearDoneTodo() {
      this.todoList = this.todoList.filter((obj) => {
        return obj.done === false;
      });
    },
  },
  watch: {
    todoList: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("updateDone", this.updateDone);
    this.$bus.$on("deleteTodo", this.deleteTodo);
    this.$bus.$on("updateTodo", this.updateTodo);
  },
  beforeDestroy() {
    this.$bus.$off("updateDone");
    this.$bus.$off("deleteTodo");
    this.$bus.$off("updateTodo");
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(103, 159, 180);
  margin-right: 5px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>