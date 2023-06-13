<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"></MyHeader>
        <MyList :todoList="todoList" :updateDone="updateDone" :deleteTodo="deleteTodo"></MyList>
        <MyFooter :todoList="todoList" :checkAllTodo="checkAllTodo" :clearDoneTodo="clearDoneTodo"></MyFooter>
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
    MyList,
    MyFooter,
  },
  data() {
    return {
        todoList:[
            {id: "001", task: "学习", done: true},
            {id: "002", task: "吃饭", done: false},
            {id: "003", task: "篮球", done: false}
        ]
    }
  },
  methods: {
    addTodo(obj){
      this.todoList.unshift(obj)
    },
    updateDone(id){
      this.todoList.forEach(obj => {
        if(obj.id === id) obj.done = !obj.done
      });
    },
    deleteTodo(id){
      this.todoList = this.todoList.filter((obj)=>{
        return obj.id !== id
      })
    },
    checkAllTodo(checked){
      this.todoList.forEach(obj => {
        obj.done = checked
      })
    },
    clearDoneTodo(){
      this.todoList = this.todoList.filter((obj) => {
        return obj.done === false
      })
    }
  }
};
</script>

<style>
/*base*/
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
