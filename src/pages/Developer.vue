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
    <b-table :items="projects" :fields="fields">
      <template #cell(projectDescription)="data">
        <router-link
          :to="`/workers/${$route.params.id}/project/${data.item.id}`"
          >see project description<span v-if="checkWorkerStatus()">
            ({{ data.item.opinions.length }})</span
          ></router-link
        >
      </template>
    </b-table>
    <ReturnButton />
  </div>
</template>
<script>
import { getProjectsByWorkerId } from "../api/project";
import { getUserById } from "../api/workers";
import ReturnButton from "../Components/ReturnButton";

export default {
  name: "Developer",
  components: {
    ReturnButton,
  },
  data: () => ({
    worker: {},
    projects: [],
    fields: [
      {
        key: "start_date",
        sortable: true,
        label: "Project Start Date",
      },
      {
        key: "end_date",
        sortable: true,
        label: "Project End Date",
      },
      {
        key: "name",
        sortable: true,
        label: "Project Name",
      },
      { key: "projectDescription" },
    ],
    project: {},
    isManagerlogged: false,
  }),
  mounted() {
    const uuid = this.$route.params.id;
    this.worker = getUserById(uuid);
    this.projects = getProjectsByWorkerId(uuid);
  },
  methods: {
    checkWorkerStatus() {
      const userStorage = JSON.parse(localStorage.getItem("user"));
      const userRole = userStorage.role;
      return userRole === "manager";
    },
  },
};
</script>
<style scoped>
.table {
  width: 85%;
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
</style>
