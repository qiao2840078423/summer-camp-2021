<template>
  <div>
    <MySchool></MySchool>
    <MyStudent studentName="Joe" :age="20"></MyStudent>
  </div>
</template>

<script>
import MySchool from "./components/MySchool.vue";
import MyStudent from "./components/MyStudent.vue";

export default {
  name: "App",
  components: {
    MyStudent,
    MySchool,
  },
};
</script>