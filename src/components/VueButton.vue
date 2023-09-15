<template>
<button
    v-if="isButtonDefault"
    :class="[btnClass, {
        'pointer-events-none': isLoading,
        'btn-disabled': isDisabled,
    }]"
    class="btn-default"
    :disabled="isDisabled"
    v-bind="$attrs"
    @click="onClick"
>
    <template v-if="isContentAvailable">
        <btn-icon 
            v-if="icon" 
            :isIconPositionLeft="iconPositionLeft"
            :isIconPositionRight="iconPositionRight"
            :text="text"
            :icon="icon"
            :iconClass="iconClass"
        />
        <span v-if="!icon && text">
            {{ text }}
        </span>
    </template>
    <template v-if="isLoading">
        <btn-loading :loadingClass="loadingClass" />
        Loading ...
    </template>
    <div v-if="hasContentAndNotLoading">
        <slot />
    </div>
</button>

<router-link 
    v-if="isLinkEnabled"
    :to="link"
    :class="[btnClass, {
        'pointer-events-none': isLoading,
        'btn-disabled': isDisabled,
    }]"
    class="btn-default"
>
    <template v-if="isContentAvailable">
        <btn-icon 
            v-if="icon" 
            :isIconPositionLeft="iconPositionLeft"
            :isIconPositionRight="iconPositionRight"
            :text="text"
            :icon="icon"
            :iconClass="iconClass"
        />
        <span v-else-if="text && !icon">
            {{ text }}
        </span>
    </template>
    <template v-if="isLoading">
        <btn-loading :loadingClass="loadingClass" />
        Loading ...
    </template>
    <div v-if="hasContentAndNotLoading">
        <slot />
    </div>
</router-link>
</template>

<script>
import BtnIcon from './Button/BtnIcon.vue';
import BtnLoading from './Button/BtnLoading.vue';
export default {
    name: 'VueButton',
    components: {
        BtnIcon,
        BtnLoading,
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
            default: 'This is Button Text'
        },
        iconClass: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: '',
        },
        loadingClass: {
            type: String,
            default: '',
        },
        link: {
            type: String,
            default: '',
        }
    },
    computed: {
        iconPositionRight() {
            return this.iconPosition === 'right';
        },
        iconPositionLeft() {
            return this.iconPosition === 'left';
        },
        isButtonDefault() {
            return !this.isDiv && !this.isLink;
        },
        isContentAvailable() {
            return !this.isLoading && !this.$slots.default;
        },
        hasContentAndNotLoading() {
            return this.$slots.default && !this.isLoading;
        },
        isLinkEnabled() {
            return this.isLink && this.link
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
    white-space: nowrap;
    padding: .75rem 1.5rem;
    border-radius: 5px;
}
.btn-default {
    display: inline-flex;
    justify-content: center;
}
.pointer-events-none {
    pointer-events: none;
    cursor: not-allowed;
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
