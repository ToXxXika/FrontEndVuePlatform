<template>
  <div>
    <p> "Utilisateurs" pour obtenir tous les utilisateurs</p>
    <p>"LeaderBoard" pour obtenir le meilleur employée dans le tableau .</p>
    <Terminal welcomeMessage="Bienvenue dans Depot Vente" prompt="ROOT $" class="dark-demo-terminal" aria-label="PrimeVue Terminal Service" />
  </div>
</template>

<script>
import TerminalService from "primevue/terminalservice";

export default {
  methods: {
    async getProducts(){
      const response = await fetch('http://127.0.0.1:5001/parkingapp-af332/us-central1/getProducts',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      //convert data into array
      let array = [];
      for (let i = 0; i < data.length; i++) {
        array.push(data[i]);
      }
      return array
    },
    async getUsers(){
      const response = await fetch('http://127.0.0.1:5001/parkingapp-af332/us-central1/getUsers',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      let array=[];

      for (let i = 0; i < data.length; i++) {
        const user = data[i].nom+" "+data[i].prenom+" "+data[i].email+" "+data[i].role;
        array.push(user);
      }
      return array ;
    },
    async commandHandler(text) {
      let response = [];
      let argsIndex = text.indexOf(' ');
      let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

      switch (command) {
        case "utilisateurs":
          //loop through the users and display them
          response = await this.getUsers();
          console.log(response);

          break;

        case "salut":
          response = 'Hola ' + text.substring(argsIndex + 1);
          break;

        case "random":
          response = Math.floor(Math.random() * 100);
          break;
        case "leaderboard":
          response = "Leaderboard";
          break;

        default:
          response = "Commande Inconnue: " + command;
      }

      TerminalService.emit('response', response);
    }
  },
  mounted() {
    TerminalService.on('command', this.commandHandler);
  },
  beforeUnmount() {
    TerminalService.off('command', this.commandHandler);
  }
}
</script>
<style scoped>
p {
  margin-top: 0;
}
::v-deep(.dark-demo-terminal) {
  background-color: #212121;
  color: #ffffff;
}

::v-deep(.dark-demo-terminal .p-terminal-command) {
  color: #80cbc4;
}

::v-deep(.dark-demo-terminal .p-terminal-prompt) {
  color: #ffd54f;
}

::v-deep(.dark-demo-terminal .p-terminal-response) {
  color: #9fa8da;
}
</style>
