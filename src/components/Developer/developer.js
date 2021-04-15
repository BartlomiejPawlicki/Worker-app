import {getProjectsByWorkerId} from '../../api/project'
import {getUserById} from '../../api/workers'
import customFields from './fields'

export default {
  name: "Developer",
  data: () => ({
    worker: {},
    projects:[],
    fields:[...customFields]
  }),
  mounted() {
    const uuid = this.$route.params.id
    this.worker = getUserById(uuid)
    this.projects = getProjectsByWorkerId(uuid)
    fetch("https://randomuser.me/api/").then(data => data.json())
    .then(data => this.worker = data)
  },
  
  

  computed: {
 
  },
  methods: {
   
  },
};