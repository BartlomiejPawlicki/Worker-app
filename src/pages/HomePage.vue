<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-field>
        <label for="filters">Technology</label>
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
          :items="updateWorkers"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          small
        >
          <template #cell(actions)="{ item: worker }">
            <router-link :to="`/workers/${worker.uuid}`"
              >see details</router-link
            >
          </template>
        </b-table>
      </div>

      <b-pagination
        v-model="currentPage"
        :total-rows="updateWorkers.length"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import { api } from "../api";
const prepareSpecializationsForDisplay = (data) => {
  const results = data.map((x) => ({
    ...x,
    specializations: x.specializations.map((x) => x.name).join(", "),
  }));

  return results;
};

export default {
  name: "HomePage",
  data: () => ({
    selectedFilters: [],
    workers: [],
    perPage: 6,
    currentPage: 1,
    fields: [
      {
        key: "uuid",
        sortable: true,
        label: "ID",
      },
      {
        key: "first_name",
        sortable: true,
      },
      {
        key: "last_name",
        sortable: true,
      },
      {
        key: "specializations",
      },
      { key: "actions" },
    ],
    filters: [
      {
        code: "net",
        name: ".NET",
      },
      {
        code: "react",
        name: "React JS",
      },
      {
        code: "c#",
        name: "C#",
      },
      {
        code: "node",
        name: "Node JS",
      },
    ],
  }),
  computed: {
    updateWorkers() {
      const results = !this.selectedFilters.length
        ? this.workers
        : this.workers.filter((x) =>
            x.specializations
              .map((s) => s.code)
              .some((r) => this.selectedFilters.indexOf(r) !== -1)
          );
      return prepareSpecializationsForDisplay(results);
    },
  },
  mounted() {
    const fetchUsers = async (url) => {
      const response = await api(url);
      this.workers = response;
    };

    fetchUsers("workers");
  },
  methods: {
    onChange(selectedFilters) {
      this.selectedFilters = selectedFilters;
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  justify-content: center;
  margin-top: 50px;
}
.md-field {
  max-width: 300px;
  margin-bottom: 100px;
}
.md-layout {
  margin: 0;
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
  max-width: 1500px;
}
</style>
