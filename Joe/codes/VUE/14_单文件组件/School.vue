<template>
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      schoolName: "No1",
      address: "pengze",
    };
  },
};
</script>

<style>
.demo {
  background: orange;
}
</style>