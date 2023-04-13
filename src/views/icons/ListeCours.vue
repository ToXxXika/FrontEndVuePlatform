<template>
  <div class="card">
    <DataView :value="products">
      <template #header>
        <Button label="Ajouter un Cour" @click="visible = true" raised />

      </template>


      <template #list="slotProps">
        <div class="col-12">
          <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
            <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
                 :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
                 :alt="slotProps.data.name" />
            <div
              class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
              <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                <div class="text-2xl font-bold text-900">{{ slotProps.data.name }}</div>
                <Rating :modelValue="slotProps.data.rating" readonly :cancel="false"></Rating>
                <div class="flex align-items-center gap-3">
                                    <span class="flex align-items-center gap-2">
                                        <i class="pi pi-tag"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </span>
                  <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)"></Tag>
                </div>
              </div>
              <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                <span class="text-2xl font-semibold">${{ slotProps.data.price }}</span>
                <Button icon="pi pi-shopping-cart" rounded
                        :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
  <template>
    <Dialog maximizable modal  v-model:visible="visible" position="top" :style="{width:'70vw'}">
      <div class="p-fluid">
        <div class ="p-field mb-4">
         <span class="p-float-label">
          <InputText id="titre" placeholder="Titre" />
          <label for="titre">Titre</label>
        </span>
        </div>
         <div class="p-field mb-4">
            <span class="p-float-label">
         <InputText id="Instructeur"  placeholder="Instructeur" />
          <label for="Instructeur">Instructeur</label>
        </span>
         </div>
        <div class="p-field mb-4">
           <span class="p-float-label">
           <InputText id="Duree" placeholder="Durée" />
          <label for="Duree">Durée</label>
        </span>
        </div>
        <div class="p-field mb-4">
           <span class="p-float-label">
          <Dropdown v-model="selectedLevel" :options="niveauOptions" optionLabel="name" id ="Niveau" placeholder="Niveau"></Dropdown>
          <label for="Niveau">Niveau</label>
        </span>
        </div>
        <div class="p-field mb-4">
          <span class="p-float-label">
          <CFormTextarea id="Description" ></CFormTextarea>
          <label for="Description">Description</label>
        </span>
        </div>
        <div class="p-field mb-4">
          <span class="p-float-label">
        <InputText id="prix" placeholder="Prix" />
          <label for="prix">Prix</label>
        </span>
        </div>
      </div>
      <template #footer>
        <div class="p-d-flex p-jc-end">
          <Button label="Cancel" @click="visible=false"/>
          <Button label="Confirmer" icon="pi pi-check" @click="ajouterCours"/>
        </div>
      </template>
    </Dialog>
  </template>
  <toast ref="toast" position="left"></toast>
</template>
<script>

import { ref } from "vue";
import {useToast} from "primevue/usetoast";

export default {
  name: "CoreUIIcons",
  data() {
    return {
      visible: false,

  selectedLevel: null,
      products: [
        {
          "name": "Bamboo Watch",
          "image": "bamboo-watch.jpg",
          "price": 65,
          "category": "Accessories",
          "inventoryStatus": "INSTOCK",
          "rating": 5
        },
        {
          "name": "Black Watch",
          "image": "black-watch.jpg",
          "price": 72,
          "category": "Accessories",
          "inventoryStatus": "INSTOCK",
          "rating": 4
        },
        {
          "name": "Blue Band",
          "image": "blue-band.jpg",
          "price": 79,
          "category": "Fitness",
          "inventoryStatus": "LOWSTOCK",
          "rating": 3
        },
        {
          "name": "Blue T-Shirt",
          "image": "blue-t-shirt.jpg",
          "price": 29,
          "category": "Clothing",
          "inventoryStatus": "INSTOCK",
          "rating": 5
        },
        {
          "name": "Bracelet",
          "image": "bracelet.jpg",
          "price": 15,
          "category": "Accessories",
          "inventoryStatus": "INSTOCK",
          "rating": 4
        },
        {
          "name": "Brown Purse",
          "image": "brown-purse.jpg",
          "price": 120,
          "category": "Accessories",
          "inventoryStatus": "INSTOCK",
          "rating": 4
        },
        {
          "name": "Chakra Bracelet",
          "image": "chakra-bracelet.jpg",
          "price": 32,
          "category": "Accessories",
          "inventoryStatus": "LOWSTOCK",
          "rating": 3
        },
        {
          "name": "Galaxy Earrings",
          "image": "galaxy-earrings.jpg",
          "price": 34,
          "category": "Accessories",
          "inventoryStatus": "INSTOCK",
          "rating": 5
        },
        {
          "name": "Game Controller",
          "image": "game-controller.jpg",
          "price": 99,
          "category": "Electronics",
          "inventoryStatus": "INSTOCK",
          "rating": 4
        },
        {
          "name": "Gaming Set",
          "image": "gaming-set.jpg",
          "price": 299,
          "category": "Electronics",
          "inventoryStatus": "INSTOCK",
          "rating": 3
        }
      ],
      niveauOptions: [
        { name: 'Débutant', value: 'Débutant' },
        { name: 'Intermédiaire', value: 'Intermédiaire' },
        { name: 'Avancé', value: 'Avancé' }
      ],
      toast:null,
    };
  },
  created() {
    this.toast =  useToast();
  },
  methods: {
    showSuccessToast() {
      this.toast.add({severity:'success', summary: 'Success ', detail:'Cours Ajouté ', life: 3000});
    },
    showDangerToast() {
      this.toast.add({severity:'error', summary: 'Erreur', detail:'Cours non Ajouté', life: 3000});
    },
    async ajouterCours(){
      const titre = document.getElementById('titre').value;
      const instructeur = document.getElementById('Instructeur').value;
      const duree = document.getElementById('Duree').value;
      const niveau = this.selectedLevel['value'];
      const description = document.getElementById('Description').value;
      const prix = document.getElementById('prix').value;
      console.log(titre,instructeur,duree,niveau,description,prix);
      const response = await fetch('http://127.0.0.1:5001/parkingapp-af332/us-central1/addCourse',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          titre: titre,
          instructeur: instructeur,
          duree: duree,
          niveau: niveau,
          description: description,
          prix: prix
        })
      });
      const data = await response.json();
      if(data.status===200){
        this.showSuccessToast();
        this.visible = false;

      }else{
        this.showDangerToast();
      }
    },
    getSeverity(data) {
      if (data.inventoryStatus === "INSTOCK") {
        return "success";
      } else if (data.inventoryStatus === "LOWSTOCK") {
        return "warning";
      } else if (data.inventoryStatus === "OUTOFSTOCK") {
        return "danger";
      }
    }
  }
};
</script>
