<template>
  <div>
    <button class="btn" @click="$router.back()">
      <md-icon> arrow_back</md-icon>
    </button>
  </div>
</template>


<script>
export default {
  name: "ReturnButton",
};
</script>


<style scoped>
.btn {
  margin: 30px 0 30px 30px;
  display: flex;
  background: white;
  outline: none;
  border: 2px solid grey;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.btn:hover {
  background-color: rgb(194, 189, 189);
}
.md-icon {
  color: white;
  transition: 1s;
}
.md-icon:hover {
  color: white;
  transition: 1s;
}
</style>