const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Email List",
      result: "",
      list_title: "Lista email:",
      emailList: [],
      text: "",
      currentPage: 1,
      emailsPerPage: 10
    }
  },

  methods: {
    // creo una funzione che generi una email recuperata dalla chiamata ajax/axios per il numero di volte specificato nella condizione, salvando ad ogni giro di ciclo la email nell'apposito array.
    getMail() {
      for (let i = 0; i < 30; i++) {
        // axios fammi una chiamata get per ottenere dei dati da questo link un link che dovrebbe essere un api
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          // dopo di che esegui questa funzione
          // funzione che sarà eseguita dopo aver ricevuto i dati
          .then((response) => {
            // salvami i dati in result
            this.result = response.data.response;
            // singola email recuperata dalla chiamata axios
            this.emailList.push(this.result)
            console.log(this.emailList)
          })
      }
      // Ordina le email in ordine decrescente
      return this.emailList
    },
    // creo una funzione che stampa il contenuto dell'array emailList dopo che l'utente digita nuova email
    addEmail() {
      // il valore dell'input viene salvato in text che viene aggiunto all'array delle email
      this.emailList.push(this.text)
      return this.emailList
    },

    remuveEmail() {
      //rimuovo l'email selezionata dall'array
      // la funzione splice in questo caso con indexOf, cerca lo posizione di un elemento all'interno dell'array e eliminarlo.
      this.emailList.splice(this.emailList.indexOf(this.text), 1)
      return this.emailList
    },
    prevPage() {
      //se la pagina corrente è maggiore di 1 
      if (this.currentPage > 1) {
        // andiamo alla pagina precedente
        this.currentPage--;
      }
      // altrimenti non facciamo nulla
    },
    nextPage() {

      // Il Math.ceil()metodo statico arrotonda sempre per eccesso e restituisce il più piccolo numero intero maggiore o uguale a un numero dato.

      // se la pagina corrente è minore della lunghezza drll'array diviso il numero delle pagine, andiamo alla pagina successiva.
      if (this.currentPage < Math.ceil(this.emailList.length / this.emailsPerPage)) {
        this.currentPage++;
      }
    }

  },
  computed: {
    paginatedEmails() {
      const start = (this.currentPage - 1) * this.emailsPerPage;
      const end = start + this.emailsPerPage;
      return this.emailList.slice(start, end);
    }
  },

  mounted() {
    console.log("App Montata");
    this.getMail()

  }

}).mount("#app")