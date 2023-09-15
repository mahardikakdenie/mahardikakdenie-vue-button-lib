<template>
<button
    v-if="!isDiv && !isLink"
    :class="[btnClass, {
        'pointer-events-none': isLoading,
        'btn-disabled': isDisabled,
    }]"
    class="btn-default"
    :disabled="isDisabled"
    v-bind="$attrs"
    @click="onClick"
>
    <template v-if="!isLoading && !$slor.default">
        <span 
            v-if="icon"
            class="btn-text">
            <span :class="[iconClass, {
                'icon-position-right': iconPositionRight,
                'icon-position-left': iconPositionRight && text
            }]">
                <icon :icon="icon" />
            </span>
        </span>
    </template>
</button>
</template>

<script>
import Icon from '@/components/Icon.vue';
export default {
    name: 'VueButton',
    components: {
        Icon
    },
    props: {
        btnClass: {
            type: String,
            default: 'vue-button'
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
        isLoading: {
            type: Boolean,
            default: false,
        },
        isDiv: {
            type: Boolean,
            default: false,
        },
        isLink: {
            type: Boolean,
            default: false,
        },
        iconPosition: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        iconClass: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        }
    },
    computed: {
        iconPositionRight() {
            return this.iconPosition === 'right';
        },
        iconPositionLeft() {
            return this.iconPosition === 'left';
        },
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
.btn-default {
    display: inline-flex;
    justify-content: center;
}
.pointer-events-none {
    pointer-events: none;
}
.btn-disabled {
    opacity: .4;
    cursor: not-allowed;
}
.btn-text {
    display: flex;
    align-items: center;
}
</style>
