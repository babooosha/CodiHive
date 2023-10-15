<template>
        <Header />
        <Menu />
        <Content />
</template>


<script>
import Header from "@/components/template/Header.vue"
import Menu from "@/components/template/Menu.vue"
import Content from "@/components/template/Content.vue"

export default {
    name: 'Home',
    components: { Header, Menu, Content },
    // mounted() {
    //        let user = localStorage.getItem('user-info')
    //        if(!user) { // if there is nothing inside user
    //              this.$router.push({name: 'SignUp'})
    //        }
    // }
    
}

</script>