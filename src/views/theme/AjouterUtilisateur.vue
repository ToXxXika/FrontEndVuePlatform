<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <CIcon icon="cil-drop" />
          Ajouter un utilisateur
        </CCardHeader>
        <CCardBody>
          <CForm @submit.prevent="AjouterUtilisateur">
            <CFormGroup>
              <CLabel for="nom">Nom</CLabel>
              <CFormInput id="nom" placeholder="Entrez le nom" />
            </CFormGroup>
            <CFormGroup>
              <CLabel for="prenom">Prénom</CLabel>
              <CFormInput id="prenom" placeholder="Entrez le prénom" />
            </CFormGroup>
            <CFormGroup>
              <CLabel for="email">E-mail</CLabel>
              <CFormInput
                type="email"
                id="email"
                placeholder="Entrez l'e-mail"
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel for="motdepasse">Mot de passe</CLabel>
              <CFormInput
                type="password"
                id="motdepasse"
                placeholder="Entrez le mot de passe"
              />
            </CFormGroup>
            <CFormGroup>
              <CLabel for="role">Rôle</CLabel>
              <CFormSelect id="role">
                <option value="" disabled selected>Sélectionnez un rôle</option>
                <option value="admin">Admin</option>
                <option value="user">Utilisateur</option>
              </CFormSelect>
            </CFormGroup>
            <br />
            <CButton type="submit" color="primary">Ajouter</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
   <Toast ref="toast" position="top-right" />
</template>

<script>
import {useToast} from "primevue/usetoast";
export default {
  name: "AjouterUtilisateur",
  data(){
    return{
      fixedToasts: 0,
      toast:null
    };


  },
  created() {
    this.toast = useToast();
  },
  methods: {
    showSuccessToast() {
      this.toast.add({severity:'success', summary: 'Success ', detail:'Utilisateur ajouté ', life: 3000});
    },
    showDangerToast() {
      this.toast.add({severity:'error', summary: 'Erreur', detail:'Utilisateur non ajouté', life: 3000});
    },
    async AjouterUtilisateur() {


      const callCloud = "http://127.0.0.1:5001/parkingapp-af332/us-central1/adduser";
      const response = await fetch(callCloud, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nom: document.getElementById("nom").value,
          prenom: document.getElementById("prenom").value,
          email: document.getElementById("email").value,
          password: document.getElementById("motdepasse").value,
          role: document.getElementById("role").value
        })

      });
      const data = await response.json();
      if(data.status===200){
        console.log("Utilisateur ajouté avec succès");
        this.showSuccessToast();

      }else {
        this.showDangerToast();
      }
    },

  },
};
</script>
