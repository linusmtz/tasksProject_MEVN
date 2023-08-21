
<script setup>
    import Menubar from 'primevue/menubar';
    import { reactive, ref } from "vue";

    const items = reactive([
        {
            label:"Tasks",
            items:[
                {
                    label:"New task"
                },
                {
                    label:"My tasks"
                }
            ] 
        },
        {
            label:"My profile"
        },
        {
            label:"Register"
        },
        {
            label:"Login"
        }
        ,
        {
            label:"Logout",
            icon: 'pi pi-fw pi-power-off'
        }
    ])

</script>

<template>
    <Menubar :model="items">
    </Menubar>

</template>

<style>
    @import '~primeflex/primeflex.css';
</style>
