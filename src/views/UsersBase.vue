<template>
  <el-input @keyup="handleDebouncedSearch" v-model="searchStr" />
  <el-table :data="users" style="width: 100%">
      <el-table-column
        prop="id"
        label="User ID"
        width="180" />

      <el-table-column
        prop="username"
        label="Username"
        width="180" />

      <el-table-column
        prop="name"
        label="Name" />

    <el-table-column
        prop="email"
        label="Email" />

    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <el-button type="primary" @click="showUserDetails(scope.$index)" circle>Details</el-button>

        <el-button type="danger" @click="handleDeleteUser(scope.$index)" circle>Remove</el-button>
      </template>
    </el-table-column>
    </el-table>
</template>

<script>
  import { mapGetters } from 'vuex';
  import debounce from '@/utils/debounce';

  export default {
    name: 'UsersList',
    data() {
      return {
        searchStr: '',
        localUsersList: []
      }
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
    methods: {
      handleDebouncedSearch: debounce(function (e) {
        if (!e.target.value) this.searchStr = '';
        return this.searchStr = e.target.value;
      }, 500),
      handleDeleteUser(idx) {
        //this.localUsersList.splice(idx, 1);

        this.$store.commit('REMOVE_USER', idx);
      },
      showUserDetails(idx) {
        console.log('showUserDetails', idx)
      }
    }
  }
</script>

<style scoped>
  .Test{
      height: 100px;
      width: 100px;
      background-color: blueviolet;
  }
</style>
