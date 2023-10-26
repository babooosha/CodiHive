<template>
    <Header />
    <Menu />
    <table class="table-auto">
  <thead>
    <tr>
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Test survey</td>
      <td>Medicine</td>
      <td></td>
      <td></td>
      <td>06/03/2023</td>
      <td>06/03/2023</td>
      <td>155</td>
      <td>100/15</td>
      <td>Preparing</td>
      <td></td>
    </tr>
    <tr>
      <td>test</td>
      <td>Medicine otra cate</td>
      <td></td>
      <td></td>
      <td>27/02/2023</td>
      <td>28/02/2023</td>
      <td>155</td>
      <td>50/15</td>
      <td>Preparing</td>
      <td></td>
    </tr>
    <tr>
        <td>TESTE</td>
      <td>-</td>
      <td></td>
      <td></td>
      <td>06/03/2023</td>
      <td>06/03/2023</td>
      <td>155</td>
      <td>0/15</td>
      <td>Preparing</td>
      <td></td>
    </tr>
  </tbody>
</table>
    
</template>


<script>
import Header from "@/components/template/Header.vue"
import Menu from "@/components/template/Menu.vue"

export default {
    name: 'Searches',
    components: { Header, Menu }

}





</script>


<style>
    
</style>