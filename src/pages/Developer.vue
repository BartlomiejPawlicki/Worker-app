<template>
  <div class="developer">
    <div class="developer-details">
      <img width="160" height="142" :src="worker.img" alt="" />
      <p class="developer-paragraph">
        {{ worker.first_name }}
        <span> {{ worker.last_name }} </span>
        <span class="developer-email"> {{ worker.email }} </span>
      </p>
    </div>
    <b-table :items="projects" :fields="fields">
      <template #cell(projectDescription)="{ item: project }">
        <router-link
          class="developer-link"
          :to="`/workers/${$route.params.id}/project/${project.id}`"
        >
          see project description
          <span v-if="checkWorkerStatus()" class="developer-quantity">
            {{ getOpinionsForProject(project).length }}</span
          >
        </router-link>
      </template>
    </b-table>
    <ReturnButton />
  </div>
</template>

<script>
import ReturnButton from "../Components/ReturnButton";
import { api } from "../api";

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
    isManagerlogged: false,
  }),
  mounted() {
    const uuid = this.$route.params.id;
    const fetchProjects = async (url) => {
      const response = await api(url);
      const listOfProjects = response.filter((x) =>
        x.members.find((a) => a === uuid)
      );

      this.projects = listOfProjects;
    };

    fetchProjects("projects");

    const fetchUsers = async (url) => {
      const response = await api(url);
      const worker = response.find((x) => x.uuid === uuid);
      this.worker = worker;
    };

    fetchUsers("workers");
  },
  methods: {
    checkWorkerStatus() {
      const userStorage = JSON.parse(localStorage.getItem("user"));
      const userRole = userStorage.role;
      return userRole === "manager";
    },
    getOpinionsForProject(project) {
      return project.opinions.filter((x) => x.member_id === this.worker.uuid);
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
.developer-link {
  position: relative;
  justify-content: center;
}
.developer-quantity {
  background: rgb(68, 70, 184);
  border-radius: 15px;
  color: White;
  position: absolute;
  top: -10px;
  right: -15px;
  font-size: 10px;
  padding: 4px;
}
</style>
