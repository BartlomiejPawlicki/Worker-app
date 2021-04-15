<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-field>
        <label for="movies">Technology</label>
        <md-select
          @md-selected="onChange"
          v-model="selectedFilters"
          name="filters"
          id="filters"
          multiple
        >
          <md-option
            v-for="(v, index) in filters"
            :key="index"
            :value="v.code"
            >{{ v.name }}</md-option
          >
        </md-select>
      </md-field>

      <div>
        <b-table
          id="my-table"
          :items="filteredWorkers"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          small
        >
          <template #cell(actions)="data">
                <router-link :to="`/workers/${data.item.uuid}`">see details</router-link>
          </template>
        </b-table>
      </div>

      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script src="../components/HomePage/homePage.js">
 
</script>

<style scoped>
.md-field {
  max-width: 300px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

td span {
  margin-right: 6px;
}
 
* {
  max-width:1500px;
}
</style>
