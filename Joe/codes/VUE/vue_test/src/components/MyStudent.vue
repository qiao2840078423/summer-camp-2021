<template>
  <div>
    <h2>学生名字：{{ studentName }}</h2>
    <h2 @click="clog">学生年龄：{{ Myage+1 }}</h2>
    <button @click="Myage++">age++</button>
  </div>
</template>

<script>
import {mixin} from "../mixin"
export default {
  name: "MyStudent",
  data() {
    return {
      Myage: this.age,
    };
  },
  props: {
    studentName: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      default: 0
    }
  },
  mixins: [mixin]
};
</script>