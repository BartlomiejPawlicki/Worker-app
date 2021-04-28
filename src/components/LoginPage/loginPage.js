import { getUserByEmail } from '../../api/workers.js'


export default {
  name: "LoginPage",
  data: () => ({
    email: "",
    password: "",
    response: {},
  }),
  methods: {
    login() {
      this.response = getUserByEmail(this.email, this.password)
      if (this.response.status === 200) {
        localStorage.setItem("user",JSON.stringify(this.response.data))
        this.$router.push({ path: 'home' })
      }
    } 
  }
}
