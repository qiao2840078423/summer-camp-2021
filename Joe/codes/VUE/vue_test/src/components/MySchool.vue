<template>
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2 @click="clog">学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import {mixin} from "../mixin"
export default {
  name: "MySchool",
  data() {
    return {
      schoolName: "No1",
      address: "pengze",
    };
  },
  mixins: [mixin]
};
</script>

<style scoped>
.demo {
  background: orange;
}
</style>