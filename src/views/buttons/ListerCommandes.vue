<template>
  <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Commandes</span>
          <Button icon="pi pi-refresh" rounded raised />
        </div>
      </template>
      <Column field="commandRef" header="Reference"></Column>
      <Column field="prixTotal" header="TOTAL">
        <template #body="slotProps">
          <span class="text-900">{{ slotProps.data.prixTotal }} DT</span>
        </template>
      </Column>
      <Column header="Status">
        <template #body="slotProps">
          <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data)" />
        </template>
      </Column>
      <Column field="Adresse" header="Adresse">
        <template #body="slotProps">
          <Tag :value="slotProps.data.Adresse" :severity='info' />
        </template>
      </Column>
      <Column field="Action" header="Action">
        <template #body="slotProps">
          <Button icon="pi pi-file-pdf" class="p-button-rounded p-button-info" @click="generatePDF(slotProps.data)" />
          <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" />
        </template>
      </Column>
      <template #footer> il y a  {{ products ? products.length : 0 }} Commandes. </template>
    </DataTable>
  </div>
</template>
<script>
import jsPDF from "jspdf";
import Table from "jspdf-autotable";
export default {
  name:'ListerCommandes',
  data() {
    return {
      products: [],
      jsPDF: jsPDF

    };


  },

  async created(){
    const cloudcall = 'http://127.0.0.1:5001/parkingapp-af332/us-central1/getCommands';
    const response = await fetch(cloudcall,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
     this.products= await response.json();

    console.log(this.products);
  },

  methods: {
    generatePDF(commande){
      console.log("commande", commande)
      const doc = new jsPDF();
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      doc.setFont("Gelvetica");

      doc.setFillColor("#ffffff");
      doc.rect(0, 0, width, height, 'F');
      doc.setFontSize(36)
      doc.text("Commande",width/2,40,{align: "center"});
      doc.setFontSize(16);
      doc.setTextColor("#782d2d");
      doc.text(`Client : ${commande.Nom}  ${commande.Prenom}`, 20, 90);
      doc.text(`Adresse : " ${commande.Adresse}`, 20, 100);
      doc.text(`Telephone"  ${commande.NumeroTel}`, 20, 110);
      doc.setFontSize(12);
      const currentDate = new Date();
      const deliveryDate = new Date(currentDate);
      deliveryDate.setDate(deliveryDate.getDate() + 3);
      doc.text(`Date de Livraison : ${deliveryDate.getDay()} /${deliveryDate.getMonth()}/${deliveryDate.getFullYear()}`, 20, 130);
      doc.text(`Command Reference : ${commande.commandRef}`, 20, 150);
      doc.text(`Nom du Produit : ${commande.product}`, 20, 160);
      doc.text(`Total : ${commande.prixTotal} DT`, 20, 170);
      Table(doc, {
        head: [["Reference", "Produit", "Prix", "Quantite"]],
        body: [
          [commande.commandRef, commande.product, commande.prixTotal, commande.quantite],
        ],
        styles: {
          fontSize: 13,
          cellPadding: 2,
          overflow: "linebreak",
          halign: "center",
          valign: "middle",
        },
        columnStyles: {
          0: { cellWidth: 30 },
          1: { cellWidth: 50 },
          2: { cellWidth: 30 },
          3: { cellWidth: 30 },
        },
        startY: 180,
      });

      doc.setFontSize(10);
      doc.text("Signature client:", 20, height - 50);
      doc.line(20, height - 40, width / 3, height - 40);
      doc.text(`Date: ${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`, width / 3 + 20, height - 50);
      doc.line(width / 3 + 20, height - 40, width / 3 * 2, height - 40);
      doc.text("Signature de la société:", width /
        3 * 2 + 20, height - 50);

      doc.save(`commande_${commande.commandRef}.pdf`);



      },

    getSeverity(product) {
      console.log(product.inventoryStatus);
      switch (product.inventoryStatus) {
        case 'TERMINE':
          console.log('success');
          return 'success';
        case 'EN COURS':
          console.log('warning');
          return 'warning';
        case 'ECHOUEE':
          console.log('danger');
          return 'danger';
        default:
          return 'info';
      }
    },

  },
}

</script>
