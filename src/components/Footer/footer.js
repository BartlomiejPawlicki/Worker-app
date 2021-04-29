
export default {
    name: "Footer",
    data() {
        return {
            workerStorage: {}
        }

    },
    mounted() {
        const user = JSON.parse(localStorage.getItem("user"))
        this.workerStorage = (`${user.first_name} ${user.last_name} is logged on as ${user.role}`)
    }
}
