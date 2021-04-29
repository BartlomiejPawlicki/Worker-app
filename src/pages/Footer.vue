<template>
  <div class="footer">
    <div class="footer-container">
      {{ user.first_name }} {{ user.last_name }}
      <div class="footer-details">
        is logged as a {{ user.role }}
      </div>
    </div>
  </div>
</template>


<script src="../components/Footer/footer.js">
</script>

<style scoped>
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
  padding-left:5px;
}
</style>