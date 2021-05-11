<template>
  <div class="opinion">
    <div class="opinion-details">
      <div class="opinion-header">
        <h1>Project: {{ project.name }}</h1>
        <div class="opinion-description">
          <p>project description: {{ project.description }}</p>
        </div>
      </div>
      <div v-for="opinion in opinions" :key="opinion.index">
        <div v-if="checkWorkerStatus()">
          <div>
            <div class="opinion-date">
              {{ formatDate(opinion.date) }}
            </div>
            <div class="opinion-author">
              author: {{ opinion.author_first_name }}
              {{ opinion.author_last_name }}
            </div>
            opinion: {{ opinion.text }}
          </div>
        </div>
      </div>
    </div>
    <ReturnButton />
  </div>
</template>
<script>
import moment from "moment";
import ReturnButton from "../Components/ReturnButton";
import { api } from "../api";

export default {
  name: "Project",
  components: {
    ReturnButton,
  },
  data: () => ({
    project: {},
    opinions: {},
    isManagerLogged: false,
  }),
  mounted() {
    const { projectId, id } = this.$route.params;
    const fetchData = async (url) => {
      const response = await api(url);
      const opinions = response.opinions.filter((x) => x.member_id === id);
      this.project = response;
      this.opinions = opinions;
    };

    fetchData(`projects/${projectId}?_expand=opinions`);
  },
  methods: {
    formatDate: function (date) {
      return moment(date).format("YYYY-MM-DD");
    },
    checkWorkerStatus() {
      const userStorage = JSON.parse(localStorage.getItem("user"));
      const userRole = userStorage.role;
      return userRole === "manager";
    },
  },
};
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
.opinion-description {
  margin: 30px 30px;
}
.opinion-header {
  margin: 30px 0 30px 0;
}
.opinion-date {
  padding-top: 15px;
  margin: 15px 0 10px 0;
  border-top: 3px solid white;
}
.opinion-author {
  margin: 10px 0 10px 0;
}
</style>