<template>
  <div class="container">
    <form>
        <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
          placeholder="Enter Name"
          v-model="name"
        />
      </div>
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
      <div class="form-group">
        <label for="exampleInputPassword1">Password confirmation</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword2"
          placeholder="Password"
          v-model="password_confirmation"
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
            name:'',
            email:'',
            password:'',
            password_confirmation:''
        }
    },

    methods:{
        submit(){
            let save_data = {
                name: this.name,
                email : this.email,
                password : this.password,
                password_confirmation: this.password_confirmation
            }
            axios.post('api/register', save_data).then(response => {
                console.log(response.data.access_token);
            });
        }
    }
};
</script>

<style>
</style>