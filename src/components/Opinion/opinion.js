import moment from 'moment'
import { getProjectById, getOpinionByWorkerId } from '../../api/project'
import {getUserById} from '../../api/workers'


export default {
  name: "Project",
  data: () => ({
    project: {},
    opinions: {},
    worker:{},
  }),
  mounted() {
    const {projectId, id} = this.$route.params
    this.project = getProjectById(projectId)
    this.opinions = getOpinionByWorkerId(this.project,id)
    this.worker = getUserById(id)
  },
  methods: {
    formatDate:function(date) {
      return moment(date).format("YYYY-MM-DD")
    }
  }

}