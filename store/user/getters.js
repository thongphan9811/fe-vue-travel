export default {
    GET_USERNAME(state){
        console.log(state)
        return state.username;
    },
    GET_STATUS_LOGIN(state){
        return state.login;
    }
   }