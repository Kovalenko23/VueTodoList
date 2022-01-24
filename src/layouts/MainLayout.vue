<template>
  <section class="layout" style="width: inherit;">
    <slot/>
  </section>
</template>

<script>

  export default {
    name: 'MainLayout'
  }
</script>

<style scoped>
  .layout{
    width: inherit;
    background-color: aquamarine;
  }
</style>
