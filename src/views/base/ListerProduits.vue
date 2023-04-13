<template>
  <CRow>
    <CCol v-for="(product, index) in products" :key="index" sm="6" md="4" lg="3" class="mb-4">
      <CCard class="product-card">
        <CCardImage class="product-image product-card product-card:hover" :src="product.image" />

        <CCardBody>
          <CCardTitle>{{ product.name }}</CCardTitle>
          <CCardText>
            Prix: {{ product.price }} DT<br />
            Categorie: {{ product.category }}<br />
            Description: {{ product.description }}
          </CCardText>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "ListerProduits",
  data() {
    return {
      products: [
        {
          name: "Produit 1",
          price: "10.00",
          description: "Description du produit 1",
          image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/340378908_763582728614906_5519020698099197142_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=wM5GBSAnN2cAX8W8IfC&_nc_oc=AQkTlGOuj33W4S0sPJHSVFzOrvyicF5Btu3sgkeJk4z2gtryzfPbcOMGp8ycUSOI0bniZ9d2OLYQfRrCdtcAtkuY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ5wGeWp5zZ3RSoGGmW584_AeA8e7aZFkBN1NrzrPk4FA&oe=645ACE38",
        },
        {
          name: "Produit 2",
          price: "20.00",
          description: "Description du produit 2",
          image: "https://via.placeholder.com/150",
        },
        // Add more products here
      ],
    };
  },
  methods:{
    // Add methods here
    async getProducts() {
      try {
        const response = await fetch("http://127.0.0.1:5001/parkingapp-af332/us-central1/getProducts",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        this.products = data;
        console.log(this.products);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getProducts();
  },
};

</script>

<style scoped>
.card-img-wrapper {
  overflow: hidden;
  max-height: 200px;
  position: relative;
}

.card-img-top {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s;
}

.product-card:hover .card-img-top {
  transform: scale(1.1);
}

.product-card {
  overflow: hidden;
}
</style>
