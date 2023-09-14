<template>
<button 
    :class="btnClass"
    @click="onClick"
>
    <slot> 
        this is button 
    </slot>
</button>
</template>

<script>
export default {
    name: 'VueButton',
    props: {
        btnClass: {
            type: String,
            default: 'vue-button'
        }
    },
    methods: {
        onClick() {
            this.$emit('on-click');
        },
    },
}
</script>

<style scoped>
.vue-button {
    background: #43b883;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
}
</style>
