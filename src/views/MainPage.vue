<template>
  <!--主頁面-->
  <v-layout class="rounded rounded-md">
    <v-app-bar title=" logo 來意有限公司"></v-app-bar>
   <!--選擇想要的功能-->
    <v-navigation-drawer app permanent width="60">
      <v-list>
        <v-list-item>
          <v-btn icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn icon>
            <v-icon>mdi-calendar</v-icon>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn icon>
            <v-icon>mdi-cog</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
   <!--MAIN 內容-->
    <v-container>
      <v-card>
        <!--CẦN SỬA-->
        <v-card-title class="d-flex align-center justify-space-between" style="margin-top: 70px; margin-left: 7in; margin-right: 7in;">
        <v-text-field
        v-model="search"
      
        placeholder="Year-month"
        dense
        outlined
      hide-details
       
       ></v-text-field>
       <v-btn color="success" @click="openDialog(null)" style="min-width: 12px;">
        <v-icon left>mdi-arrow-left</v-icon> INSERT
       </v-btn>
         </v-card-title>
       <!--增刪表格-->
        <v-data-table :headers="headers" :items="waterUsageData" :search="search">
          <template v-slot:item.actions="{ item }">
            <v-btn color="primary" small @click="openDialog(item)">Edit</v-btn>
            <v-btn color="error" small class="ml-2" @click="deleteItem(item.id)">Delete</v-btn>
          </template>
        </v-data-table>
      </v-card>

      <!-- Dialog for Add/Edit -->
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>{{ form.id ? 'Edit Water Usage' : 'Add Water Usage' }}</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="form.factory" label="Factory" required></v-text-field>
              <v-text-field v-model="form.year" label="Year" type="number" required></v-text-field>
              <v-text-field v-model="form.month" label="Month" type="number" required></v-text-field>
              <v-text-field v-model="form.tapWater" label="Tap Water Meter" type="number"></v-text-field>
              <v-text-field v-model="form.recycledWater" label="Recycled Water Meter" type="number"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="dialog = false">Cancel</v-btn>
            <v-btn color="success" @click="saveItem">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      yearMonth: '',
      dialog: false,
      form: { id: null, factory: '', year: '', month: '', tapWater: '', recycledWater: '' },
      waterUsageData: [
        { id: 'WLYN202501', factory: 'LYN', year: 2025, month: 1, tapWater: 324, recycledWater: 44 },
        { id: 'WLYN202502', factory: 'LYN', year: 2025, month: 2, tapWater: 100, recycledWater: 100 }
      ],
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Factory', value: 'factory' },
        { text: 'Year', value: 'year' },
        { text: 'Month', value: 'month' },
        { text: 'Tap Water Meter', value: 'tapWater' },
        { text: 'Recycled Water Meter', value: 'recycledWater' },
        { text: 'Actions', value: 'actions', sortable: false }
      ]
    };
  },
  methods: {
    openDialog(item) {
      if (item) {
        this.form = { ...item };
      } else {
        this.form = { id: null, factory: '', year: '', month: '', tapWater: '', recycledWater: '' };
      }
      this.dialog = true;
    },
    saveItem() {
      if (this.form.id) {
        const index = this.waterUsageData.findIndex(d => d.id === this.form.id);
        if (index !== -1) this.waterUsageData.splice(index, 1, { ...this.form });
      } else {
        this.form.id = 'WLYN' + this.form.year + this.form.month;
        this.waterUsageData.push({ ...this.form });
      }
      this.dialog = false;
    },
    deleteItem(id) {
      this.waterUsageData = this.waterUsageData.filter(d => d.id !== id);
    }
  }
};
</script>
