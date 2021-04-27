import { getUserByEmail } from '../../api/workers.js'


export default {
  name: "LoginPage",
  data: () => ({
    email: "",
    password: "",
    response: {},
  }),
  methods: {
    handleSubmit(e) {
      e.preventDefault(e)
    },
    login() {
      this.response = getUserByEmail(this.email, this.password)
      if (this.response.status === 200) {
        localStorage.setItem("fullName",this.response.data.first_name + " " + this.response.data.last_name)
        this.$router.push({ path: 'home' })
      }
    }
  }
}
