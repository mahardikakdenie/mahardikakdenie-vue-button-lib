<template>
  <div>
    <button class="lv-button">
      <slot> this is button </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'VueButton'
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
