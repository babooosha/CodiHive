<template>
    <Header />
    <Menu />
    <!-- <table :data="users"> -->
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="border-l-8 border-t-8 min-w-full text-center text-sm font-light shadow-lg bg-white border-collapse">
              <thead slot="head" class="border-b font-medium text-white bg-gray-700"> <!--class="flex justify-between gap-x-6 py-5relative rounded-t-md text-sm font-medium bg-gray-700 shadow-xl"-->
                <tr> 
                    <th scope="col" class=" px-6 py-4">ID</th>
                    <th scope="col" class=" px-6 py-4">NAME</th>
                    <th scope="col" class=" px-6 py-4">SURNAME</th>
                    <th scope="col" class=" px-6 py-4">EMAIL</th>
                    <th scope="col" class=" px-6 py-4">COMPANY</th>
                    <th scope="col" class=" px-6 py-4">AGE</th>
                    <th scope="col" class=" px-6 py-4">VALIDATION</th>
                    <th scope="col" class=" px-6 py-4">ACTIVE</th>
                    <th scope="col" class=" px-6 py-4">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="row in rows" :key="row.id" class="hover:bg-gray-50 border-b dark:border-neutral-200"> 
                    <td class="whitespace-nowrap  px-3 py-1 font-medium">{{ row.id }}</td>
                    <td class="whitespace-nowrap  px-3 py-1">{{ row.name }}</td>
                    <td class="whitespace-nowrap  px-3 py-1">{{ row.surname }}</td>
                    <td class="whitespace-nowrap  px-3 py-1">{{ row.email }}</td>
                    <td class="whitespace-nowrap  px-3 py-1">{{ row.company }}</td>
                    <td class="whitespace-nowrap  px-3 py-1">{{ row.age }}</td>
                    <td class="whitespace-nowrap  px-3 py-1">{{ row.validation }}</td>
                    <td class="whitespace-nowrap  px-3 py-1">{{ row.active }}</td>
                    <td class="whitespace-nowrap  px-3 py-1">
                      <button class="edit">
                        <a v-on:click="edit" href="#" class="flex-row items-center p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                        </a>
                      </button>
                      <button>
                        <a v-on:click="config" href="#" class="flex-row items-center p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </a>
                      </button>
                      <button>
                        <a v-on:click="delete" href="#" class="flex-row items-center p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </a>
                      </button>
                    </td>
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
  name: 'Clients',
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
        company: "Company Lda", 
        age: "28", 
        validation: true, 
        active: true,  
      },
      { 
        id:456, 
        name:"Rui", 
        surname: "Tavares", 
        email: "ruitavares@gmail.com", 
        company: "Enterprise Lda", 
        age: "42", 
        validation: false, 
        active: true,   
      },
      { 
        id:789, 
        name:"Carmen", 
        surname: "Pombo", 
        email: "cpombo@gmail.com", 
        company: "Food Lda", 
        age: "37", 
        validation: false, 
        active: true,   
      },
      { 
        id:1010, 
        name:"Fernando", 
        surname: "Coelho", 
        email: "fcoelho@gmail.com", 
        company: "Trucks Lda", 
        age: "48", 
        validation: false, 
        active: true,   
      }
      
    
      ]
    }
  },
}

  /*
  methods: {
    getClients() {
        fetch('/data/clients.json')
            .then(resp => resp.json())
            .then(data => this.)
    }
  },

  mounted() {
    this.getClients()
  }
  */

</script>

