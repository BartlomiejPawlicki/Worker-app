<template>
  <div class="footer">
    <div class="footer-container">
      {{ user.first_name }} {{ user.last_name }}
      <div class="footer-details">is logged as a {{ user.role }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
};
</script>

<style scoped>
.footer {
  position: absolute;
  width: 100%;
  bottom:0;
}
.footer-container {
  background-color: #222831;
  color: white;
  justify-content: center;
  font-size: 12px;
  height: 35px;
  align-items: center;
  display: flex;
  font-weight: bold;
}
.footer-details {
  padding-left: 5px;
}
</style>