<template>
    <!-- <div class="register">
       <input type="text" v-model="name" placeholder="Name" />
       <input type="text" v-model="email" placeholder="Email" />
       <input type="password" v-model="password" placeholder="Password" />
       <button v-on:click="signUp">Sign Up</button>
       <p>
            <router-link to="/login">Login</router-link>
       </p>
    </div> -->
    
    
    <div class="bg-background-image w-screen h-screen flex items-center justify-center">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl font-bold leading-6 text-gray-700 text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        v-model="name"
                        placeholder="Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        v-model="email"
                        placeholder="Email" />

                        <div class="flex items-center justify-between">
                            <input 
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                v-model="password"
                                placeholder="Password" />
                            <div class="text-sm p-3">
                                <a href="#" class="font-semibold text-gray-400 hover:text-gray-700">Forgot password?</a>
                            </div>
                        </div>
                        

                    <!-- <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        v-model="confirm_password"
                        placeholder="Confirm Password" /> -->

                    <button
                        type="submit"
                        class="w-full text-center py-3 text-white rounded-lg bg-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-gray-100"
                        v-on:click="signUp"
                    >Create Account</button>

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
                    Already have an account? 
                    <router-link class="font-semibold leading-6 text-gray-400 hover:text-white" to="/login">Login</router-link> 
                        
                    
                </div>
            </div>
        </div>
    
</template>


<script>
import { RouterLink } from 'vue-router';
// import axios from 'axios'


export default {
    name: 'SignUp',
    components: { RouterLink },
    // data() {
    //     return {
    //         name: '',
    //         email: '',
    //         password: '',
    //     }
    // },
    // methods: {
    //     async signUp() {
    //         let result = await axios.post("http://localhost:5173/users", {
    //             email: this.email,
    //             password: this.password,
    //             name: this.name
    //         })
    //         console.warn(result)
    //         if(result.status==201) {
    //              localStorage.setItem("user-info", JSON.stringify(result.data))
    //              this.$router.push({name: 'Home'})
    //         }

    //     }
    // },
    // mounted() {
    //        let user = localStorage.getItem('user-info')
    //        if(user) {
    //              this.$router.push({name: 'Home'})
    //        }
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
