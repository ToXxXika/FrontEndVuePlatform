<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          Liste des utilisateurs
        </CCardHeader>
        <CCardBody>
          <CTable responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Photo</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nom</CTableHeaderCell>
                <CTableHeaderCell scope="col">Prénom</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                <CTableHeaderCell scope="col">Rôle</CTableHeaderCell>
                <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow v-for="user in users" :key="user.id">
                <CTableDataCell>
                 <CIcon name="cil-user" custom-class="c-sidebar-nav-icon" />
                </CTableDataCell>
                <CTableDataCell>{{ user.nom }}</CTableDataCell>
                <CTableDataCell>{{ user.prenom }}</CTableDataCell>
                <CTableDataCell>{{ user.email }}</CTableDataCell>
                <CTableDataCell>{{ user.role }}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="info" size="sm" @click="editUser(user)">
                    Modifier
                  </CButton>
                  &nbsp;

                  <CButton color="danger" size="sm" @click="deleteUser(user)">
                    Supprimer
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          <CModal :show.sync="showModal" @update:show="showModal = $event">
            <CModalHeader>Modifier l'utilisateur</CModalHeader>
            <CModalBody>
              <CForm @submit.prevent="updateUser">
                <CFormGroup>
                  <CLabel for="edit-nom">Nom</CLabel>
                  <CFormInput id="edit-nom" v-model="selectedUser.nom" />
                </CFormGroup>
                <CFormGroup>
                  <CLabel for="edit-email">Nom</CLabel>
                  <CFormInput id="edit-email" v-model="selectedUser.email" :disabled="true" />
                </CFormGroup>
                <CFormGroup>
                  <CLabel for="edit-prenom">Prénom</CLabel>
                  <CFormInput id="edit-prenom" v-model="selectedUser.prenom" />
                </CFormGroup>
                <CButton type="submit" color="primary">Enregistrer</CButton>
              </CForm>
            </CModalBody>
          </CModal>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>


export default {

  data() {
    return {
      users: [],
      showModal:false,
      selectedUser :null,// Load users from your database
    };
  },
  // Fetch users from your database
  async created() {
    // Replace this with the actual API call to fetch users from your database
    const response = await fetch("http://127.0.0.1:5001/parkingapp-af332/us-central1/getUsers");

    this.users = await response.json();
  },
  methods: {
    editUser(user) {
      console.log("Edit user with ID:", user);
      // Implement your edit user logic here
     this.selectedUser= Object.assign({}, user);
      this.showModal=true;
      console.log(this.selectedUser);
      console.log(this.showModal);
    },
    async deleteUser(user) {
      // Implement your delete user logic here
      const response = await fetch('http://127.0.0.1:5001/parkingapp-af332/us-central1/deleteUser',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          email:this.selectedUser.email
        })
      });
      const data = response.json();
      if(data.status===200){
        window.alert("Utilisateur supprimé");
      }
    },
  },
};
</script>
