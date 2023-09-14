<template>
<button class="lv-button">
    <slot>
        this is button
    </slot>
</button>
</template>

<script>
export default {

}
</script>

<style scoped>
.lv-button {
    background: #43b883;
    color: white;
    outline: none;
    border: none;
}
</style>