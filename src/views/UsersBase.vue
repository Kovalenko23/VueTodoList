<template>
  <el-input @keyup="handleDebouncedSearch" v-model="searchStr" />
   <el-select v-model="value" placeholder="Select" @change="userPerPage(value)">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    >
    </el-option>
  </el-select> 
  <el-table :data="users" style="width: 100%">
    <el-table-column prop="id" label="User ID" width="180" />

    <el-table-column prop="username" label="Username" width="180" />

    <el-table-column prop="name" label="Name" />

    <el-table-column prop="email" label="Email" />

    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
      <el-button type="primary" @click="$router.push(`/UsersBase/${scope.row.id}`)" circle
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
import { mapGetters } from "vuex";
import debounce from "../utils/debounce";


export default {
  name: "UserBase",

  data() {
    return {
      searchStr: "",
      debounsedString: '',
      requestResult: [],
      // value:ref(''),

      options: [
         {
          value: "0",
          label: "I WANNA SEE NOTHING",
        },
        {
          value: "10",
          label: "10",
        },
        {
          value: "20",
          label: "20",
        },
        {
          value: "50",
          label: "50",
        },
         {
          value: "100",
          label: "100",
        },
           {
          value: "1000",
          label: "WHERE IS MY USERS, LEBOWSKIY",
        },
      ],
    };
  },
  props: {
    usersData: {
      type: Object,
      required: false,
    },
  },
  components: {},
  computed: {

    handleDebouncedSearch() {
      return debounce(() => this.debounsedString = this.searchStr)
    },

    ...mapGetters({
      users: "getUsersList",
    }),

    matchingName() {
      return users.email.filtered((email) => users.includes(searchStr.value));
    },

     users() {
      if (!this.debounsedString) return this.$store.getters.getUsersList;

      let filteredUsers = [];

      for (let i of this.$store.getters.getUsersList) {
        if (i.email.toUpperCase().includes(this.debounsedString.toUpperCase()))
          filteredUsers.push(i);
      }
      return filteredUsers;
    },
  },
  methods: {
    userPerPage(userAmount) {
      this.$store.dispatch("getUsersList", userAmount);
    },

    // handleDebouncedSearch: debounce(function (e) {
    //   if (!e.target.value) this.searchStr = "";
    //   return (this.searchStr = e.target.value);
    // }, 500),


    handleDeleteUser(idx) {
      //this.localUsersList.splice(idx, 1);
      this.$store.commit("REMOVE_USER", idx);
    },

  },

  beforeCreate() {
    console.log("this.users", this.users);
    this.$store
      .dispatch("getUsersList")
      .then((response) => {
        console.log("users request response", response);
        this.localUsersList = response;
      })
      .catch((error) => console.error("users request error", error));
  },

  mounted() {
    console.log("mounted", this.users);
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