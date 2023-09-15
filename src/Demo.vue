<template>
<div class="demo-center">
    <vue-button link="/login" isLink />
</div>
</template>

<script>
import VueButton from './components/VueButton.vue';
export default {
    name: 'DemoComponent',
    components: {
        VueButton,
    },
}
</script>

<style scoped>
.demo-center {
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
}
</style>