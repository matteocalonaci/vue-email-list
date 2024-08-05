RECUPERO LE MAIL API
<br>

Per stampare le email creo una funzione `getMail`.
Questa funzionr esegue un ciclo for all'interno del quale esegue una chiamata axios per recuperare il numero di mail richieste,  salvare u dati in una istanza di vue`result`quindi aggiungere per ogni giro un nuovo result all'array emailList.
<br>

FUNZIONE ADD MAIL
<br>

Per aggiungere una nuova mail da parte di un utente,
collego il testo scritto nell'input e l'istanza di vue tramiite un `v-model`.
Creo una funzione `addMail` nella quale prendo il testo salvato nell'istanza e lo pusho nell'array.
<br>

FUNZIONE  REMUVE MAIL
<br>

Per rimuovere una mail da parte di un utente creo `remuveEmail`,
Tramite la funzione `splice` in questo caso con `indexOf`, cerco la posizione di un elemento all'interno dell'array e eliminarlo.

Per la paginazione ho usato un template di `bootstrap-vue.org`.