<template>
<svg
    class="animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :class="loadingClass"
>
        <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
        />
        <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
</svg>
</template>

<script>
export default {
    name: 'ButtonLoading',
    props: {
        loadingClass: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.w-5 {
    width: 20px;
}
.h-5 {
    width: 20px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
    margin: 0 12px 0 -4px;
    color: white;
}
</style>
