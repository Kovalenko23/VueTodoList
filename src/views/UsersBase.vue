<template>
  <input @keyup="handleDebouncedSearch" v-model="searchStr" />
  <el-table :data="users" style="width: 100%">
    <el-table-column prop="id" label="User ID" width="180" />

    <el-table-column prop="username" label="Username" width="180" />

    <el-table-column prop="name" label="Name" />

    <el-table-column prop="email" label="Email" />

    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <el-button type="primary" @click="showUserDetails(scope.$index)" circle
          >Details</el-button
        >

        <el-button type="danger" @click="handleDeleteUser(scope.$index)" circle
          >Remove</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserBase",
  // setup() {
  //   this.$store.dispatch("getUsersList");
  //   then((response) => (this.requestResult = response)).catch((error) =>
  //     console.error(error)
  //   );
  // },
  data() {
    return {
      requestResult: [],
    };
  },
  computed: {
      ...mapGetters({
        users: 'getUsersList'
      })
    },
    beforeCreate() {
      console.log('this.users', this.users);
      this.$store
          .dispatch('getUsersList')
          .then(response => {
            console.log('users request response', response)
            this.localUsersList = response
          })
          .catch(error => console.error('users request error', error))
    },
  mounted() {
    console.log(this.users);
  },
 
};
</script>

<style scoped>
.post {
  height: 100px;
  width: 100px;
  border: 4px solid blueviolet;
}
</style>