import { getProjectsByWorkerId } from '../../api/project'
import { getUserById } from '../../api/workers'
import customFields from './fields'

export default {
  name: "Developer",
  data: () => ({
    worker: {},
    projects: [],
    fields: [...customFields, { key: "opinions" }]
  }),
  mounted() {
    const uuid = this.$route.params.id
    this.worker = getUserById(uuid)
    this.projects = getProjectsByWorkerId(uuid)
  },
  computed: {
  },
  methods: {

  },
};