<template>
<span>
    <icon :icon="icon" />
</span>
</template>
<script>
import { Icon } from '@iconify/vue'
export default {
    name: 'IconComponent',
    components: {
        Icon
    },
    props: {
        icon: {
        type: String,
        default: 'heroicons-outline:home'
        }
    }
}
</script>
<style lang=""></style>
