<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    mounted() {
    },

    methods:{
        submit(){
            let save_data = {
                email : this.email,
                password : this.password
            }
            axios.post('/api/login', save_data).then(response => {
                this.$store.dispatch('login', response.data);
            });
        }
    }
};
</script>

<style>
</style>
