<script setup>
    import { ref } from 'vue';
    import Card from 'primevue/card';
    import InputText from 'primevue/inputtext';

    import Button from 'primevue/button';

    import Password from 'primevue/password';


    const username = ref('');
    const password = ref('');
    

    function XD(){
        console.log(username);        
    }

</script>
<template>
    
    <Card class="flex justify-content-center align-items-center h-20rem" style="box-shadow: none;">
            <template #title> 
                <div class="flex justify-content-center">
                    Tasks login 
                </div> 
            </template>
            <template #content>
                <form action="" >
                    <div >
                        <span class="p-float-label mb-5 mt-4 ">
                            <InputText class="w-full" id="username" v-model="username" />
                            <label for="username">Username</label>
                        </span>
                    </div>
                    <div>
                        <span class="p-float-label mb-5 mt-4">
                            <Password v-model="value" toggleMask />
                            <label for="password">Password</label>
                        </span>
                    </div>
                    <div class="flex justify-content-center">
                        <Button label="Login" class="bg-green-600" type="submit" />
                    </div>
                </form>

            </template>   
    </Card>


        
</template>

<style>



</style>
