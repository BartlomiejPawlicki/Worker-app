import { getProjectsByWorkerId } from '../../api/project'
import { getUserById } from '../../api/workers'
import customFields from './fields'

export default {
  name: "Developer",
  data: () => ({
    worker: {},
    projects: [],
    fields: [...customFields, { key: "opinions", requiresManager: true }],
    isManagerLogged: false,
  }),
  mounted() {
    const uuid = this.$route.params.id
    this.worker = getUserById(uuid)
    this.projects = getProjectsByWorkerId(uuid)

    const userStorage = JSON.parse(localStorage.getItem("user"))
    const userRole = userStorage.role
    if (userRole === "manager") {
      this.isManagerLogged = true
    }
  },
  computed: {
    computedFields() {
      if (!this.isManagerLogged)
        return this.fields.filter(field => !field.requiresManager);
      else
        return this.fields;
    }
  },
  methods: {
  },
};

// thClass: 'd-none', tdClass: 'd-none'