<template>
  <div class="page">
    <form>
      <div class="page-container">
        <h1 class="page-header">Login</h1>
        <div class="page-content">
          <div>
            <label>
              <input type="email" placeholder="email" />
            </label>
          </div>
          <div>
            <label>
              <input type="password" placeholder="password" />
            </label>
          </div>
          <button class="page-button">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
</script>

<style scoped>
.page {
  background: radial-gradient(#003, #000);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-container {
  background-color: white;
  width: 450px;
  height: 240px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  padding: 50px;
}
.page-header {
  margin-bottom: 10px;
  color:black;
  font-weight:lighter;
  font-family:Georgia, 'Times New Roman', Times, serif
}
.page-button {
  background-color: rgb(48, 117, 245);
  margin-top: 10px;
  width: 150px;
  text-decoration: none;
  color: #ffffff;
  border-radius: 4px;
  display: inline-block;
  font-weight: 600;
  padding: 5px 15px;
  border: none;
}
.page-button:hover {
  background-color: #100541;
  border-radius: 4px;
}
</style>
