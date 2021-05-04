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
          :items="filteredWorkers"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          small
        >
          <template #cell(actions)="data">
            <router-link :to="`/workers/${data.item.uuid}`"
              >see details</router-link
            >
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

<script>
import { isEmpty } from "lodash";
import { workers } from "../api/workers";

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
    workers: workers,
    filteredWorkers: prepareSpecializationsForDisplay(workers),
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
    rows() {
      return this.filteredWorkers.length;
    },
  },
  methods: {
    onChange(selectedFilters) {
      const results = isEmpty(selectedFilters)
        ? this.workers
        : this.workers.filter((x) =>
            x.specializations
              .map((s) => s.code)
              .some((r) => selectedFilters.indexOf(r) !== -1)
          );

      this.filteredWorkers = prepareSpecializationsForDisplay(results);
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
