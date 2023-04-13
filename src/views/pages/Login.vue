<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Connexion</h1>
                  <p class="text-medium-emphasis">
                    Se connecter à votre compte
                  </p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput placeholder="Email" v-model="mail"/>
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Mot de passe"
                      autocomplete="current-password"
                      v-model="pass"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <Button color="primary" class="px-4" @click="verifuser">Connexion </Button>
                    </CCol>
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        Mot de passe oublié ?
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <p>Bienvenue dans la plateforme  !</p>
                  <CButton color="light" disabled="disabled" variant="outline"  class="mt-3">
                    Créer un compte
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
      <Toast ref="toast" position="top-right" />

    </CContainer>
  </div>
</template>

<script>
import { useToast } from "primevue/usetoast";

export default {
  name: 'Login',
  data(){
    return{
      mail:"",
      pass:"",
      toast:null
    }
  },
  created(){
    this.toast = useToast();
  },
  methods:{
    async verifuser(){
      console.log("hi");
      const response =  await fetch('http://127.0.0.1:5001/parkingapp-af332/us-central1/getUsers',{
        method:"GET",
        headers: {
          "Content-Type":"application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      let j = 0 ;
      console.log(this.mail);
      console.log(this.pass);
       while(j<=data.length){
         console.log(data[j].email)
          if((data[j].email===this.mail)&&(data[j]["password"]===this.pass)){
            this.toast.add({
              severity: "success",
              summary: "Success",
              detail: "Bienvenue",
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
             detail: "Non trouvé",
             life: 3000
           });
         }
       }
    }
  }
}
</script>
