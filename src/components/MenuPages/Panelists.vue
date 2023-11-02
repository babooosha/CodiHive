<template>
    <Header />
    <Menu />
    <!-- <table :data="users"> -->
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center text-sm font-light shadow-lg bg-white border-collapse">
              <thead slot="head" class="border-b rounded-t-md font-medium text-white bg-gray-700"> <!--class="flex justify-between gap-x-6 py-5relative rounded-t-md text-sm font-medium bg-gray-700 shadow-xl"-->
                <tr> 
                    <th scope="col" class=" px-6 py-4">ID</th>
                    <th scope="col" class=" px-6 py-4">Name</th>
                    <th scope="col" class=" px-6 py-4">Surname</th>
                    <th scope="col" class=" px-6 py-4">Email</th>
                    <th scope="col" class=" px-6 py-4">Gender</th>
                    <th scope="col" class=" px-6 py-4">Age</th>
                    <th scope="col" class=" px-6 py-4">Validation</th>
                    <th scope="col" class=" px-6 py-4">Active</th>
                    <th scope="col" class=" px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="row in rows" :key="row.id" class="hover:bg-gray-50 border-b dark:border-neutral-200"> 
                    <td class="whitespace-nowrap  px-6 py-4 font-medium">{{ row.id }}</td>
                    <td class="whitespace-nowrap  px-6 py-4">{{ row.name }}</td>
                    <td class="whitespace-nowrap  px-6 py-4">{{ row.surname }}</td>
                    <td class="whitespace-nowrap  px-6 py-4">{{ row.email }}</td>
                    <td class="whitespace-nowrap  px-6 py-4">{{ row.gender }}</td>
                    <td class="whitespace-nowrap  px-6 py-4">{{ row.age }}</td>
                    <td class="whitespace-nowrap  px-6 py-4">{{ row.validation }}</td>
                    <td class="whitespace-nowrap  px-6 py-4">{{ row.active }}</td>
                    <td class="whitespace-nowrap  px-6 py-4">{{ row.actions }}</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>         
  </template>


<script>
import Header from "@/components/template/Header.vue"
import Menu from "@/components/template/Menu.vue"
// import { toFormData } from "axios";
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

