<template>
    <header class="header">
        <router-link to="/"><img src="https://www.tesigandia.com/imagenes/logo-tesi-blanco.png" alt="Header Image"/></router-link>
        <LanguageDropdown class="dropdown"/>
    </header>
</template>

<script>
import LanguageDropdown from '@/components/template/LanguageDropdown.vue'
// import Logo from '../../assets/Logo.png'



export default {
    name: 'Header',
    components: { LanguageDropdown },
    
    
}
</script>

<style>
    .header {
        grid-area: header;
        background-color: #ffff;

        display: flex; /* row by default */
        justify-content: space-between; /* main axis */
        align-items: right;
        border: 1px solid #cacaca;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    }

    .dropdown {
        position: absolute right;
        margin: 9px;
    }

    img {
        position: absolute left;
        justify-content: flex-start;
        align-content: flex-start;
        

        max-height: 40px;
        margin: 10px;
    }

   
</style>
