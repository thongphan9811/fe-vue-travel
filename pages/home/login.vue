<template>
    <div class="container">
        <!-- Default form login -->
<form class="text-center border border-light p-5" @submit.prevent="login">

    <p class="h4 mb-4">Sign in</p>

    <!-- Email -->
    <input id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" type="email" v-model="email">

    <!-- Password -->
    <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" v-model="password">

    <div class="d-flex justify-content-around">
        <div>
            <!-- Remember me -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>
            <!-- Forgot password -->
            <a href="">Forgot password?</a>
        </div>
    </div>

    <!-- Sign in button -->
    <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

    <!-- Register -->
    <p>Not a member?
        <nuxt-link to="/home/register">Register</nuxt-link>
    </p>

    <!-- Social login -->
    <p>or sign in with:</p>

    <a href="#" class="mx-2" role="button"><i class="fab fa-facebook-f light-blue-text"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-twitter light-blue-text"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-linkedin-in light-blue-text"></i></a>
    <a href="#" class="mx-2" role="button"><i class="fab fa-github light-blue-text"></i></a>

</form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            token:null,
        }
    },
    methods:{
        async login (){
            await this.$store.dispatch('user/login',{email:this.email,password:this.password});
            this.username= this.$store.state.user.username;
            this.token = this.$store.state.user.token;
            this.$router.push('/home')
        }
    }
}
</script>
<style scoped>
.container{
    margin-top: 40px;
}
</style>