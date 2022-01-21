<template>
  <div id="nav">
    <div class="router-links">
      <router-link to="/">Home</router-link>
      <router-link to="/TodoList">TodoLsit</router-link>
      <router-link to="/UsersBase">UsersBase</router-link>
    </div>
  </div>
  <!-- <component :is="layout"> -->
    <router-view />
  <!-- </component> -->
</template>

<script>
import BalmUI from 'balm-ui';


export default {
  computed: {
    layout() {
      const layoutName = this.$route.meta.layout;
      return () => import(`@/layouts/${layoutName}.vue`);
    },
  },
};
</script>
<style>



#app {
  height: 100%;
  width: 100%;
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  flex-flow: column wrap;
  padding: 30px;
  border: 2px solid;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-top: 5px;
  padding-bottom: 5px;
}
.router-links {
  flex-flow: column wrap;
  display: flex;
  margin-top: 50%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
html,
body {
  height: 100%;
  width: 100%;
}
</style>
