<script setup>
    import { ref } from 'vue';
    import Card from 'primevue/card';
    import InputText from 'primevue/inputtext';
    const username = ref('');
    const password = ref('');


</script>
<template>
    
    <Card class="flex justify-content-center align-items-center" style="height: 650px;">
            <template #title> 
                <div class="flex justify-content-center">
                    Login 
                </div> 
            </template>
            <template #content>
                <div class="flex justify-content-center">
                    <span class="p-float-label mb-5 ">
                        <InputText id="username" v-model="username" />
                        <label for="username">Username</label>
                    </span>
                </div>
                <div class="flex justify-content-center">
                    <span class="p-float-label ">
                        <InputText id="password" v-model="password" />
                        <label for="password">Password</label>
                    </span>
                </div>
            </template>   
    </Card>


        
</template>

<style>



</style>
