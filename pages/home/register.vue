<template>
    <div class="container" >
        <!-- Default form register -->
        <ValidationObserver v-slot="{ invalid }">
<form class="text-center border border-light p-5" @submit.prevent="register">

    <p class="h4 mb-4">đăng ký</p>
    <ValidationProvider rules="required" v-slot="{ errors }">
        <span>{{ errors[0] }}</span>
    <input type="text"  class="form-control mb-4" placeholder="username"  v-model="username"  >
    </ValidationProvider>
    <!-- E-mail -->
    <ValidationProvider rules="required|email" v-slot="{ errors }">
        <span>{{ errors[0] }}</span>
    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail" v-model="email">
    </ValidationProvider>
    <!-- Password -->
    <ValidationProvider rules="required|min" v-slot="{ errors }">
        <span>{{ errors[0] }}</span>
    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" v-model="password">
    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
        At least 8 characters and 1 digit
    </small>
    </ValidationProvider>

    <!-- Phone number -->
    <ValidationProvider rules="required|phone" v-slot="{ errors }">
        <span>{{ errors[0] }}</span>
    <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" v-model="phoneNumber">
    <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
        Optional - for two step authentication
    </small>
    </ValidationProvider>

    <!-- Newsletter -->
    
    <div class="custom-control custom-checkbox">
        <label class="lable-ridio-group">bạn là hướng dẫn viên hay là khác hàng của chúng tôi ?</label>
        <b-form-radio-group 
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
    ></b-form-radio-group>
    </div>

    <!-- Sign up button -->
    <button class="btn btn-info my-4 btn-block" type="submit" :disabled="invalid" >Sign in</button>



    <hr>

    <!-- Terms of service -->
    <p>By clicking</p>
        <em>Sign up</em> you agree to our
        <a href="" target="_blank">terms of service</a>

</form>
<!-- Default form register -->
    </ValidationObserver>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        selected: 'customer',
        options: [
          { item: 'customer', name: 'khách hàng' },
          { item: 'tourGuide', name: 'hướng dẫn viên du lịch'},
        ],
        username:'',
        email:'',
        password:'',
        phoneNumber:''
      }
    },
    methods:{
        async register(){
             alert('Form has been submitted!');
            // if(this.selected ==='tourGuide'){
            //     this.$emit('set-profile',{
            //         username:this.username,
            //         email:this.email,
            //         password: this.password,
            //         phoneNumber: this.phoneNumber,
            //         role:this.selected
            //     });
            //     this.$router.push('/home/Profile');
            // }

        }
    },
    computed:{
       
    }
  }
</script>
<style  scoped>
.container{
    margin-top: 40px;
}
.lable-ridio-group{
    font-size: 20px;
    font: 1em sans-serif;
}
</style>