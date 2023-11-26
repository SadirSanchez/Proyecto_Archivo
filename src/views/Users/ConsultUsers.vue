<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user[2]">
          <td>{{ user[2] }}</td>
          <td>{{ user[0] }}</td>
          <td>{{ user[1] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import config from "@/services/config.js";
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },

  methods: {
    getUsers() {
      axios.get(config.app_url + 'users/ConsultUsers.php')
        .then(response => {
          this.users = response.data.split(',');
          let tempUsers = []
          this.users.map(item => {
            item = item.split('-')
            if (item.length > 1){
              tempUsers.push(item)
            }
          } )
          this.users = tempUsers;
        })
        .catch(error => {
          console.error('Error:', error);
          console.log('Response:', error.response);
        });
    }
  },

  mounted() {

    this.getUsers()

  }

}

</script>
<style scoped></style>
