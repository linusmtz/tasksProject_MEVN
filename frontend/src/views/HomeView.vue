<script setup>
    import NavBarComponent from '../components/NavBarComponent.vue';
    import HomeComponent from '../components/HomeComponent.vue';
    import FooterComponent from '../components/FooterComponent.vue';
</script>

<template>
    <main>
        <NavBarComponent/>
        <div class="flex-column" style="height: 100%;">
            <HomeComponent/>
        </div>
        <div class="flex-column" style="height: 100%;">
            <FooterComponent/>
        </div>
    </main>
</template>