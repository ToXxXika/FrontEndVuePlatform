<template>
  <CRow>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="primary">
        <template #value
          >{{users}}
          <span class="fs-6 fw-normal">
            (-12.4% <CIcon icon="cil-arrow-bottom" />)
          </span>
        </template>
        <template #title>Employeurs</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3 mx-3"
            style="height: 70px"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointBackgroundColor: '#321fdb',
                  data: [68, 59, 84, 84, 51, 55, 40],
                },
              ],
            }"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: 30,
                  max: 89,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: 0.4,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="info">
        <template #value
          >{{ commandes}}
          <span class="fs-6 fw-normal">
            (40.9% <CIcon icon="cil-arrow-top" />)
          </span>
        </template>
        <template #title>Commandes</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3 mx-3"
            style="height: 70px"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'transparent',
                  borderColor: 'rgba(255,255,255,.55)',
                  pointBackgroundColor: '#39f',
                  data: [1, 18, 9, 17, 34, 22, 11],
                },
              ],
            }"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: -9,
                  max: 39,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="warning">
        <template #value
          >{{ products }}
          <span class="fs-6 fw-normal">
            (84.7% <CIcon icon="cil-arrow-top" />)
          </span>
        </template>
        <template #title>Produits</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="line"
            class="mt-3"
            style="height: 70px"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [78, 81, 80, 45, 34, 12, 40],
                  fill: true,
                },
              ],
            }"
            :options="{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
              elements: {
                line: {
                  borderWidth: 2,
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
    <CCol :xs="3">
      <CWidgetStatsA class="mb-4" color="danger">
        <template #value
          >44K
          <span class="fs-6 fw-normal">
            (-23.6% <CIcon icon="cil-arrow-bottom" />)
          </span>
        </template>
        <template #title>Sessions</template>
        <template #action>
          <CDropdown placement="bottom-end">
            <CDropdownToggle
              color="transparent"
              class="p-0 text-white"
              :caret="false"
            >
              <CIcon icon="cil-options" class="text-high-emphasis-inverse" />
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">Action</CDropdownItem>
              <CDropdownItem href="#">Another action</CDropdownItem>
              <CDropdownItem href="#">Something else here</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </template>
        <template #chart>
          <CChart
            type="bar"
            class="mt-3 mx-3"
            style="height: 70px"
            :data="{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
                'January',
                'February',
                'March',
                'April',
              ],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [
                    78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67,
                    82,
                  ],
                  barPercentage: 0.6,
                },
              ],
            }"
            :options="{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawTicks: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                    drawBorder: false,
                    drawTicks: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
            }"
          />
        </template>
      </CWidgetStatsA>
    </CCol>
  </CRow>
</template>

<script>
import { CChart } from '@coreui/vue-chartjs'
import { onMounted } from "vue";
export default {
  name: 'WidgetsStatsA',
   data() {
     return {
       users: 0,
       products: 0,
       commandes: 0,
     }
   },
  methods:{
    async   getALL(){
      const response = await fetch('http://127.0.0.1:5001/parkingapp-af332/us-central1/getUsers',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data.length;
    },
    async  getProducts (){
      const response2 = await fetch('http://127.0.0.1:5001/parkingapp-af332/us-central1/getProducts',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data2 = await response2.json();
      return  data2.length;
    },
    async getCommandes (){
      const response3 = await fetch('http://127.0.0.1:5001/parkingapp-af332/us-central1/getCommands',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data3 = await response3.json();
      return  data3.length;
    }
  },
  async mounted() {
    this.users = await this.getALL();
    this.products =await  this.getProducts();
    this.commandes = await this.getCommandes();
  },





  components: {
    CChart,
  },
}
</script>
