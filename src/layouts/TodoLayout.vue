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

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.top-frame {
  width: 35em;
  height: 2em;
  border: 2px solid red;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}
.bottom-frame {
  width: 35em;
  height: 2em;
  border: 2px solid red;
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
}
</style>
