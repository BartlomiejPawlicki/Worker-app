<template>
  <div>
  <img height="141" width="162" v-if="worker" :src="worker.results[0].picture.large" >
    <p>
      {{ worker.first_name }} <span> {{ worker.last_name }} </span>
    </p>
    <b-table :items="projects" :fields="fields"></b-table>
  </div>
</template>

<script src="../components/Developer/developer.js">
</script>
 

<style scoped>
.table {
  width:80%;
}
</style>
