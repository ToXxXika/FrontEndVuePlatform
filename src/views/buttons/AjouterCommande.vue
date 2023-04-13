<template>
  <div class="p-fluid">
    <div class="p-field mb-4">
      <span class="p-float-label">
      <InputText id="nom" v-model="commande.nom" />
      <label for="nom">Nom</label>
    </span>
    </div>
    <div class="p-field mb-4">
      <span class="p-float-label">
      <InputText @focusout="VerifyUser" id="prenom" v-model="commande.prenom" />
      <label for="prenom">Prenom</label>
    </span>

    </div>
    <div class="p-field mb-4">
      <span class="p-float-label">
      <InputText id="produit" v-model="commande.nomProduit" />
      <label for="produit">Nom Produit</label>
    </span>

    </div>
    <div class="p-field mb-4">
        <span class="p-float-label">
            <InputText @focusout="VerifyProduct" id="Quantity" v-model="commande.quantite" />
            <label for="Quantity">Quantité</label>
        </span>
    </div>

    <div class="p-field mb-4 ">
       <span class="p-float-label">
      <InputText id="adresse" v-model="commande.adresse" />
      <label for="adresse">Adresse de livraison</label>
    </span>

    </div>

    <div class="p-field mb-4">
      <span class="p-float-label">
      <InputText id="tel" v-model="commande.numeroTel" />
      <label for="tel">Numero Tel</label>
    </span>

    </div>

    <div class="p-field mb-4">
      <span class="p-float-label">
      <InputText id="prix" v-model="commande.prixTotal" />
      <label for="prix">Prix Total du produits</label>
    </span>
    </div>
    <Button label="Ajouter Commande " id="btn" @click="submitCommande" />
    <Toast ref="toast" position="top-right" />
  </div>
</template>

<script>
import { useToast } from "primevue/usetoast";

export default {
  name: "AjouterCommande",

  data() {
    return {
      commande: {
        quantite: "",
        adresse: "",
        nom: "",
        prenom: "",
        numeroTel: "",
        nomProduit: "",
        prixTotal: ""
      },
      toast: null
    };
  },
  created() {
    this.toast = useToast();
  },
  methods: {
    async VerifyUser(){
      const nom = this.commande.nom;
      const prenom = this.commande.prenom;
      console.log(nom);
      console.log(prenom);
      const response =  await fetch('http://127.0.0.1:5001/parkingapp-af332/us-central1/getUsers',{
        method:"GET",
        headers: {
          "Content-Type":"application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      let j = 0 ;
      if(data.length === 0){
        this.toast.add({severity:"error",summary:"Erreur ",detail:"Aucun utilisateur dans la plateforme",life:3000});
        document.getElementById("Quantity").disabled = true ;
        document.getElementById("prix").disabled = true ;
        document.getElementById("tel").disabled = true ;
        document.getElementById("adresse").disabled = true ;
        document.getElementById("produit").disabled = true ;
        document.getElementById("btn").disabled=true;

      }else {
        while (j <= data.length) {
          if ((data[j].nom === nom) && (data[j].prenom === prenom)) {
            this.toast.add({
              severity: "success",
              summary: "Success",
              detail: "Client/Utilisateur validé",
              life: 3000
            });
            return ;
          }else{
            j++;
          }
          if (j === data.length) {
            this.toast.add({
              severity: "error",
              summary: "Erreur ",
              detail: "Client/Utilisateur non trouvé",
              life: 3000
            });
            this.commande.nom = "";
            this.commande.prenom = "";
          }
        }
      }
    },
    async VerifyProduct() {
      console.log("HI")
      const produit = this.commande.nomProduit;
      const quantite = this.commande.quantite
      console.log(produit)
      console.log(quantite)
      const response = await fetch("http://127.0.0.1:5001/parkingapp-af332/us-central1/getProducts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await response.json();
      console.log(data)
      let j = 0;
      while(j <=data.length){
         if(data[j].name===produit){
            if(data[j].quantity>quantite){
              this.toast.add({severity:"success",summary:"Success",detail:"Produit/quantite valide",life:3000});
              this.commande.prixTotal= data[j].price*quantite;
              document.getElementById("prix").disabled = true ;

              return ;
            }
         }else{
           j++;
         }
         if(j===data.length){
           this.toast.add({severity:"error",summary:"Erreur Produit",detail:"Quantite ou nom produit invalide",life:3000});
           this.commande.quantite="";
           this.commande.nomProduit="";
           return ;
         }
      }

    },
    showSuccessToast() {
      this.toast.add({ severity: "success", summary: "Success ", detail: "Commande validée ", life: 3000 });
    },
    showDangerToast() {
      this.toast.add({ severity: "error", summary: "Erreur", detail: "Commande echouée", life: 3000 });
    },
    clearText() {
      this.commande.nom = "";
      this.commande.prenom = "";
      this.commande.nomProduit = "";
      this.commande.quantite = null;
      this.commande.adresse = "";
      this.commande.numeroTel = "";
      this.commande.prixTotal = null;
    },

    async submitCommande() {
      console.log("****************************************");
      console.log(this.commande);
      const cloudCall = "http://127.0.0.1:5001/parkingapp-af332/us-central1/addCommand";
      const response = await fetch(cloudCall, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nom: this.commande.nom,
          prenom: this.commande.prenom,
          nomProduit: this.commande.nomProduit,
          quantite: this.commande.quantite,
          adresse: this.commande.adresse,
          numeroTel: this.commande.numeroTel,
          prixTotal: this.commande.prixTotal
        })
      });
      const data = await response.json();
      if (data.status === 200) {
        console.log("Commande ajouté avec succès");
        this.showSuccessToast();
        this.clearText();

      } else {
        console.log("Erreur lors de l'ajout de la commande");
        this.showDangerToast();
      }
    }

  }
};
</script>
