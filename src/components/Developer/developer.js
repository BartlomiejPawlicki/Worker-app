import { getProjectsByWorkerId } from '../../api/project'
import { getUserById } from '../../api/workers'
import customFields from './fields'

export default {
  name: "Developer",
  data: () => ({
    worker: {},
    projects: [],
    fields: [...customFields]
  }),
  mounted() {
    const uuid = this.$route.params.id
    this.worker = getUserById(uuid)
    this.projects = getProjectsByWorkerId(uuid)
    console.log(getUserById(uuid))
  },
  computed: {
  },
  methods: {

  },
};