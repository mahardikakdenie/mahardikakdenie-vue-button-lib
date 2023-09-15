<template>
<span 
    v-if="icon"
    class="btn-text">
    <span 
        :class="[
            iconClass, {
            'icon-position-right': isIconPositionRight,
            'icon-position-left': isIconPositionLeft && text
        }]"
        :dir="isIconPositionRight ?  'right' :'left'"
    >
        <icon :icon="icon" />
    </span>
    <span v-if="text"> {{ text }} </span>
</span>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
    name: 'BtnIcon',
    components: {
        Icon
    },
    props: {
        isIconPositionRight: {
            type: Boolean,
            default: false,
        },
        isIconPositionLeft: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: 'heroicons-outline:home'
        },
        iconClass: {
            type: String,
            default: ''
        },
    },
}
</script>

<style scoped>
.btn-text {
    display: flex;
    align-items: center;
}

.icon-position-left:dir(ltr) {
    margin-right: .5rem;
}

.icon-position-left:dir(ltr) {
    margin-left: .5rem;
}

.icon-position-right {
    order: 1;
}

.icon-position-right:dir(ltr) {
    margin-left: .5rem;
}

.icon-position-right:dir(ltr) {
    margin-right: .5rem;
}
</style>