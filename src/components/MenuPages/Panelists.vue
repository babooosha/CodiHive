<template>
    <Header />
    <Menu />
    <!-- <table :data="users"> -->
    <table>
      <thead slot="head" class="flex justify-between gap-x-6 py-5relative rounded-md text-sm font-medium bg-gray-700">
        <tr class="text-sm font-semibold leading-6 text-white">
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Validation</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="row in rows" :key="row.id" class="flex justify-between gap-x-6 py-5  bg-white">
            <td>{{ row.id }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.surname }}</td>
            <td>{{ row.email }}</td>
            <td>{{ row.gender }}</td>
            <td>{{ row.age }}</td>
            <td>{{ row.validation }}</td>
            <td>{{ row.active }}</td>
            <td>{{ row.actions }}</td>
          </tr>
      </tbody>
    </table>
  </template>


<script>
import Header from "@/components/template/Header.vue"
import Menu from "@/components/template/Menu.vue"
import { toFormData } from "axios";
// import users from './users.json'

export default {
  name: 'Panelists',
  components: { Header, Menu },
  data(){
    return {
      // other method:
      // columns: [
      //   {
      //     label: 'ID',
      //     field: 'id',
      //   },
      //   {
      //     label: 'Name',
      //     field: 'name',
      //   },
      //   {
      //     label: 'Surname',
      //     field: 'surname',
      //   },
      //   {
      //     label: 'Email',
      //     field: 'email',
      //   },
      //   {
      //     label: 'Gender',
      //     field: 'gender',
      //   },
      //   {
      //     label: 'Age',
      //     field: 'age',
      //     type: 'number',
      //   },
      //   {
      //     label: 'Validation',
      //     field: 'validation',
      //     type: 'boolean',
      //   },
      //   {
      //     label: 'Active',
      //     field: 'active',
      //     type: 'boolean',
      //   },
      //   {
      //     label: 'Actions',
      //     field: 'actions',
      //   },     
      // ],
      rows: [{ 
        id:123, 
        name:"Ana", 
        surname: "Silva", 
        email: "anasilva@gmail.com", 
        gender: "female", 
        age: "28", 
        validation: true, 
        active: true, 
        actions: 3 
      },
      { 
        id:456, 
        name:"Rui", 
        surname: "Tavares", 
        email: "ruitavares@gmail.com", 
        gender: "male", 
        age: "42", 
        validation: false, 
        active: true, 
        actions: 3 
      }
      
    
      ]
    }
  },
}

  /*
  methods: {
    getPanelists() {
        fetch('/data/panelists.json')
            .then(resp => resp.json())
            .then(data => this.)
    }
  },

  mounted() {
    this.getPanelists()
  }
  */

</script>

