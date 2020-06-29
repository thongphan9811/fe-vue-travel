export default {
   async login ({commit},{email , password}) {
        try{
            const status_login = true;
            const data = await this.$axios.$post('/users/login',{email,password});
            console.log(data)
            commit('SET_USER',data,status_login);
        }catch(err){
            console.log(err);
            throw err;
        }
    },
    async logout({commit}){
        try{
            const data = { user:{
                username: ''
                },
                token:''
            }
            const status_login = false
            commit('SET_USER',data,status_login)
        }catch(err){
            throw err;
        }
    }
  }