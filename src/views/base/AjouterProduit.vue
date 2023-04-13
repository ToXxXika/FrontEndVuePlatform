<template>
  <CContainer>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>Ajouter un produit</CCardHeader>
          <CCardBody>
            <Toast ref="toast" position="top-right" />

            <CForm @submit.prevent="addProduct">
              <CFormGroup>
                <CLabel for="productName">Nom du produit</CLabel>
                <CFormInput id="productName" placeholder="Entrez le nom du produit" />
              </CFormGroup>
              <CFormGroup>
                <CLabel for="productDescription">Description du produit</CLabel>
                <CFormTextarea id="productDescription" rows="3" placeholder="Entrez la description du produit" />
              </CFormGroup>
              <CFormGroup>
                <CLabel for="productPrice">Prix du produit</CLabel>
                <CFormInput type="number" id="productPrice" placeholder="Entrez le prix du produit" />
              </CFormGroup>
              <CFormGroup>
                <CLabel for="Category">Categorie du produit</CLabel>
                <CFormInput type="text" id="Category" placeholder="Entrez la Categorie du produit" />
              </CFormGroup>
              <CFormGroup>
                <CLabel for="productQuantity">Quantité</CLabel>
                <CFormInput type="number" id="productQuantity" placeholder="Entrez la quantité du produit" />
              </CFormGroup>
              <CFormGroup>
                <CLabel for="productImage">Image du produit</CLabel>
                <input type="file" class="form-control-file" id="productImage" @change="onFileChange" />
              </CFormGroup>
              <br />

              <CButton  type="submit" color="primary">Ajouter le produit</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>


import {useToast} from "primevue/usetoast";

export default {
  name: 'AjouterProduit',

   created() {
    this.toast = useToast();
   },
  methods: {
    showSuccessToast() {
      this.toast.add({severity:'success', summary: 'Success ', detail:'Produit Ajouté ', life: 3000});
    },
    showDangerToast() {
      this.toast.add({severity:'error', summary: 'Erreur', detail:'Erreur dans l ajout du produit', life: 3000});
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.imagePath = URL.createObjectURL(file);
    },
    async addProduct() {
      const productName = document.getElementById('productName').value;
      const productDescription = document.getElementById('productDescription').value;
      const productPrice = document.getElementById('productPrice').value;
      const productQuantity = document.getElementById('productQuantity').value;
      const productCategory = document.getElementById('Category').value;

      console.log('Nom du produit:', productName);
      console.log('Description du produit:', productDescription);
      console.log('Prix du produit:', productPrice);
      console.log('Quantité du produit:', productQuantity);
      console.log('Chemin de l\'image du produit:', this.imagePath);
      const cloudcall = 'http://127.0.0.1:5001/parkingapp-af332/us-central1/addProduct';
      const response = await fetch(cloudcall, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: productName,
          description: productDescription,
          price: productPrice,
          quantity: productQuantity,
          category:productCategory,
          image: this.imagePath,
        }),
      });
      const data = await response.json();
      if(data.status===200){
        console.log('Produit ajouté avec succès');
      }else {
        console.log('Erreur lors de l\'ajout du produit');
      }
    },
  },
  data() {
    return {
      imagePath: '',
      toast: null,
    };
  },
};
</script>
