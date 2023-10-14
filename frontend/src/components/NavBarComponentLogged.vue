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
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            
        },
        {
            label: 'Profile',
            icon: 'pi pi-fw pi-user',
            url:'/profile'
        },
        {
            label: 'Tasks',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'All Tasks',
                    icon: 'pi pi-fw pi-calendar-times',
                    url:'/tasks'
                }
            ]
        },
        
        {
            label: 'Logout',
            icon: 'pi pi-fw pi-sign-out',
            url:'/logout'
        }
    ]);
</script>

<template>
    <div class="flex-auto">
        <Menubar :model="items" class="justify-content-around"/>
    </div>
</template>

