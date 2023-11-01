<template>
  <Header />
  <Menu />
  <v-table>
    <thead slot="head">
      <th>Searches</th>
      <th>Categories</th>
      <th>Client</th>
      <th>Manager</th>
      <th>Start Date</th>
      <th>End Date</th>
      <th>Contacts</th>
      <th>Completed</th>
      <th>Status</th>
      <th>Actions</th>
    </thead>
    <tbody>
        <tr v-for="row in rows" :key="row.id">
          <td>{{ row.searches }}</td>
          <td>{{ row.categories }}</td>
          <td>{{ row.client }}</td>
          <td>{{ row.manager }}</td>
          <td>{{ row.startDate }}</td>
          <td>{{ row.endDate }}</td>
          <td>{{ row.contacts }}</td>
          <td>{{ row.completed }}</td>
          <td>{{ row.status }}</td>
          <td>{{ row.actions }}</td>
        </tr>
    </tbody>
  </v-table>
</template>


<script>
import Header from "@/components/template/Header.vue"
import Menu from "@/components/template/Menu.vue"

export default {
    name: 'Searches',
    components: { Header, Menu },
    data(){
      return {
        
        rows: [{ 
          searches:"Test survey", 
          categories:"Medicine", 
          client: "-", 
          manager: "-",
          startDate: "06/03/2023", 
          endDate: "06/03/2023", 
          contacts: "155", 
          completed: 100/15, 
          status: "Preparando", 
          actions: 3 
    
        }]
      }
    },
}




</script>


<style>
    
</style>