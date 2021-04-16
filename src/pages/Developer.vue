<template>
  <div class="developer">
    <div class="developer-details" v-if="worker.img">
      <img width="160" height="142" :src="worker.img" alt="" />
      <p class="developer-paragraph">
        {{ worker.first_name }}
        <span> {{ worker.last_name }} </span>
        <span class="developer-email"> {{ worker.email }} </span>
      </p>
    </div>
    <b-table :items="projects" :fields="fields"></b-table>
      <button @click="$router.back()" class="developer-button">
        <md-icon> arrow_back</md-icon>
</button>
  </div>

</template>
<script src="../components/Developer/developer.js">
</script>
<style scoped>
.table {
  width: 80%;
  margin-bottom:50px;
}
.developer {
  margin-left: 30px;
}
.developer-details {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.developer-paragraph {
  margin-left: 40px;
}
.developer-email {
  display:block;
}
.developer-button {
  margin-left:30px;
  display:flex;
  background:none;
  outline: none;
  border:2px solid grey;
  width:50px;
  height:50px;
  border-radius:50%
}
</style>
