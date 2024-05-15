const { createApp } = Vue
createApp({
    data() {
        return {
            titolo: "vue-email-list",

        }
    },

    methods: {
        getEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {

            })


        }

    },


    //MOMENTI DI BASE
    mounted() {
        console.log("App montata")


    }
}).mount("#app")