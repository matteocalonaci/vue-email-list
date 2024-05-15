const { createApp } = Vue
createApp({
    data() {
        return {
            titolo: "vue-email-list",
            ul: "Le mail generate sono:",
            element: "",
            email: [],
        }
    },

    methods: {
        getEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                for (let i = 0; i <= 9; i++) {
                    // this.email.push(this.element)
                    this.element = result.data.response;


                    this.email.push(this.element)


                }
                console.log(this.email)
            })


        }

    },


    //MOMENTI DI BASE
    mounted() {
        console.log("App montata")
        this.getEmail()

    }
}).mount("#app")