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
            icon:'',
            url:'/contact'
        }
        
    ]);

</script>

<template>

    <div class="flex-auto">
            <Menubar :model="items" class="justify-content-around"/>
    </div>


</template>