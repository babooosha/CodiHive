<template>
    <div class="bg-background-image w-screen h-screen flex items-center justify-center">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl font-bold leading-6 text-gray-700 text-center">Login</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        v-model="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        v-model="password"
                        placeholder="Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 text-white rounded-lg bg-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-gray-100"
                        v-on:click="signUp"
                    >Login</button>

                    <!-- <div class="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div> -->
                </div>

                <div class="mt-10 text-center text-sm text-gray-200">
                    Don't have an account? 
                    <router-link class="font-semibold leading-6 text-gray-400 hover:text-white" to="/sign-up">Sign up</router-link> 
                        
                    
                </div>

                
            </div>
            
        </div>

</template>


<script>
import { RouterLink } from 'vue-router';
// import axios from 'axios'

export default {
    name: 'Login',
    components: { RouterLink },
    // data() {
    //     return {
    //         email: '',
    //         password: ''
    //     }
    // },
    // methods: {
    //    async login() {
    //          let result = await axios.get(
    //              `http://localhost:5173/users?email=${this.email}&password=§{this.password}`
    //          )

    //          if(result.status==200 && result.data.length > 0) {
    //              localStorage.setItem("user-info", JSON.stringify(result.data[0]))
    //              this.$router.push({name: 'Home'})
    //          }
    //          console.warn(result)
    //      }

    // }
}

</script>


<style>
.bg-background-image {
  
    background-image: url('../assets/img/wave.png');
    background-size: cover;
    background-position: center;
  }
</style>