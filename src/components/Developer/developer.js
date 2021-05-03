import { getProjectsByWorkerId } from '../../api/project'
import { getUserById } from '../../api/workers'
import customFields from './fields'

export default {
  name: "Developer",
  data: () => ({
    worker: {},
    projects: [],
    fields: [...customFields, { key: "projectDescription" }],
    project: {},
    isManagerlogged: false,
  }),
  mounted() {
    const uuid = this.$route.params.id
    this.worker = getUserById(uuid)
    this.projects = getProjectsByWorkerId(uuid)
  },
  methods: {
    checkWorkerStatus() {
      const userStorage = JSON.parse(localStorage.getItem("user"))
      const userRole = userStorage.role
      return userRole === "manager"
    }
  },
};
