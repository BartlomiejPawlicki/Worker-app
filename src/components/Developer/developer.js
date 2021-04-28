import { getProjectsByWorkerId } from '../../api/project'
import { getUserById } from '../../api/workers'
import customFields from './fields'

export default {
  name: "Developer",
  data: () => ({
    worker: {},
    projects: [],
    fields: [...customFields, { key: "opinions", requiresManager:true }],
    isUserAdmin:false,
  }),
  mounted() {
    const uuid = this.$route.params.id
    this.worker = getUserById(uuid)
    this.projects = getProjectsByWorkerId(uuid)
  },
  computed: {
    computedFields() {
      if (!this.isUserAdmin)
        return this.fields.filter(field => !field.requiresManager);
      else
        return this.fields;
    }
  },
  methods: {
  },
};

// thClass: 'd-none', tdClass: 'd-none'
// console.log(this.fields[3])