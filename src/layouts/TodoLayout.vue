<template>
  <div class="container">
    <div class="top-frame" />

    <slot />

    <div class="bottom-frame" />
  </div>
</template>

<script>
  export default {
    name: 'TodoLayout'
  }
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.top-frame {
  width: 35em;
  height: 2em;
  border: 4px solid #F56C6C;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  background-color: #F56C6C;
}
.bottom-frame {
  width: 35em;
  height: 2em;
  border: 4px solid #F56C6C;
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
  background-color: #F56C6C;
}
</style>