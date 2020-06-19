export default {
   async login ({commit},{username , password}) {
        try{
            const data = await this.$axios.$post('http://localhost:4000/auth/login',{username,password});
            commit('SET_USER',data);
        }catch(err){
            console.log(err);
        }
    }
  }