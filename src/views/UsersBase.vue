<template>
  <div>
    <el-input @keyup="handleDebouncedSearch" v-model="searchStr" />
    <el-select v-model="value" placeholder="Select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
      <!-- <userCard v-if="isCardVisible" @closeCard="closeDetailsCard" /> -->
    </el-select>

    <el-table :data="localUsersList" style="width: 100%">
      <el-table-column prop="id" label="User ID" width="180" />

      <el-table-column prop="username" label="Username" width="180" />

      <el-table-column prop="name" label="Name" />

      <el-table-column prop="email" label="Email" />

      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button
            type="primary"
            @click="showUserDetails(scope.$index)"
            circle
            >Details</el-button
          >

          <el-button
            type="danger"
            @click="handleDeleteUser(scope.$index)"
            circle
            >Remove</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import debounce from "../utils/debounce";
import userCard from "../components/Users-components/UserCard.vue";

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
      searchStr: "",
      requestResult: [],
      // value:ref(''),

      options: [
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
      ],
    };
  },
  props: {
    usersData: {
      type: Object,
      required: false,
    },
  },
  components: { userCard },
  computed: {
    ...mapGetters({
      users: "getUsersList",
    }),

    matchingName() {
      return users.email.filtered((email) => users.includes(searchStr.value));
    },

    users() {
      if (!this.searchStr) return this.$store.getters.getUsersList;

      let filteredUsers = [];

      for (let i of this.$store.getters.getUsersList) {
        if (i.email.toUpperCase().includes(this.searchStr.toUpperCase()))
          filteredUsers.push(i);
      }
      return filteredUsers;
    },
  },
  methods: {
    handleDebouncedSearch: debounce(function (e) {
      if (!e.target.value) this.searchStr = "";
      return (this.searchStr = e.target.value);
    }, 500),

    // showDetails (id) {
    //         this.isCardVisible = true;
    //         this.currentUser = this.$store.getters.getUsersList.find(user => user.id === id)
    //         console.log(this.currentUser)},

    handleDeleteUser(idx) {
      //this.localUsersList.splice(idx, 1);
      this.$store.commit("REMOVE_USER", idx);
    },

    showUserDetails(idx) {
      console.log("showUserDetails", idx);
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
    console.log("mounted",this.users);
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