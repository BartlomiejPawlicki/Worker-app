
export default {
    name: "Footer",
    data() {
        return {
            user: {}
        }

    },
    mounted() {
        this.user = JSON.parse(localStorage.getItem("user"))
    }
}
