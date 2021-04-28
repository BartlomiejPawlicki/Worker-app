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
    <b-table :items="projects" :fields="computedFields">
      <template #cell(opinions)="data">
        <router-link
          :to="`/workers/${$route.params.id}/project/${data.item.id}`"
          >see project</router-link
        >
      </template>
    </b-table>
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
  margin-bottom: 50px;
}
.developer {
  padding: 30px 0 0 30px;
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
  display: block;
}
.developer-button {
  margin-left: 30px;
  display: flex;
  background: none;
  outline: none;
  border: 2px solid grey;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.developer-button:hover {
  background: rgb(121, 117, 117);
}
.md-icon:hover {
  color: white;
  transition: 1s;
}
</style>
