<template>
    <footer class="footer">
        <span>Copyright</span>

    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #ddd;
        color: #333; 

        display: flex; 
        align-items: center; /* cross axis */
        justify-content: flex-end; /* right side */
        padding-right: 10px;
        
    }
</style>
