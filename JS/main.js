const { createApp } = Vue
createApp({
    data() {
        return {
            titolo: "VUE GENERATE 10 EMAIL",
            ul: "Le mail generate sono:",
            element: "",
            email: [],
        }
    },



    methods: {
        getEmail() {
            for (let i = 0; i <= 9; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.element = result.data.response;
                    this.email.push(this.element)

                    // console.log(this.email)
                })
            }
        },


    },



    //MOMENTI DI BASE
    mounted() {
        console.log("App montata")
        this.getEmail()
    }


}).mount("#app")
