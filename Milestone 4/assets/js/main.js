let app = new Vue({
  el: '#app',
  data: {
    contacts: [{
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
    ],
    // Proprietà utilizzata per cambiare ciò che mostra il contatto selezionato.
    activeCont: 0,
    // Proprietà utilizzata per i nuovi messaggi.
    newMessage: '',
    // Proprietà utilizzata cercare i contatti all'interno della search bar.
    search: '',
  },
  methods: {
    //Funzione che permette il cambio di conversazione
    showConv(index) {
      this.activeCont = index;
    },
    //Funzione che permette l'invio di nuovi messaggi
    sendMsg() {
      this.contacts[this.activeCont].messages.push({
        date: dayjs().format('DD/MM/YYYY hh:mm:ss'),
        text: this.newMessage,
        status: 'sent'
      });
      this.newMessage = '';

      // Funzione che permette l'aggiunta di un ok automatico
      setTimeout(() => {
        this.contacts[this.activeCont].messages.push({
          date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
          text: 'ok!',
          status: 'received',
        });
      }, 1000);
    },
    // Funzione che permette lo scroll automatico verso il fondo dell'area chat quando viene aggiunto un nuovo messaggio
    scrollToEnd() {
      let container = this.$refs.scrollArea;
      let containerScroll = container.scrollHeight;
      container.scrollTop = containerScroll;
    }
  },
  computed:{
    // Funzione per filtrare i messaggi nella search bar
    filteredContact() {
      return this.contacts.filter(contactFilter => {
        return contactFilter.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  // Mounted e updated vengo utilizzati per eseguire un nuovo aggiornamento ogni volta che la pagina subisce un evento.
  mounted() {
    this.scrollToEnd();
  },
  updated() {
    this.scrollToEnd();
  }
});
