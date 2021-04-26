<template>
  <div class="opinion">
    <div class="opinion-details">
      <div class="opinion-header">
        <h1>{{ project.name }}</h1>
      </div>
    
      <div v-for="opinion in opinions" :key="opinion.index">
        <div>
          {{formatDate(opinion.date) }}
          {{ opinion.text }}
        </div>
      </div>
    </div>
    <button class="opinion-button" @click="$router.back()">
      <md-icon> arrow_back</md-icon>
    </button>
  </div>
</template>
<script src="../components/Opinion/opinion.js">
</script>


<style scoped>
.opinion {
  min-height: 100vh;
  background: radial-gradient(#003, #000);
  color: white;
  padding: 50px 0 30px 0;
}
.opinion-details {
  border: 2px solid white;
  width: 70%;
  display: inline-block;
  border-radius: 5px;
  padding-bottom: 25px;
}
.opinion-header {
  margin: 50px 0 20px 0;
}
.opinion-button {
  margin: 50px 0 0 30px;
  display: flex;
  background: white;
  outline: none;
  border: 2px solid grey;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.opinion-button:hover {
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