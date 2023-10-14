<script setup>
    import { ref } from "vue";
    import Menubar from 'primevue/menubar';
    const items = ref([
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url:'/'
        },
        {
            label:'About',
            icon:'pi pi-book',
            url:'/about'
        },
        {
            label:'Contact',
            icon:'pi pi-envelope',
            url:'/contact'
        },
        {
            label:'Login',
            icon:'pi pi-sign-in',
            url:'/login'
        }
        
    ]);

</script>

<template>

    <div class="flex-auto h-10rem">
            <Menubar :model="items" class="h-5rem justify-content-around"/>
    </div>


</template>