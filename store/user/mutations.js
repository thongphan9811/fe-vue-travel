export default {
    async SET_USER(state,data,status){
        state.username = data.user.username;
        state.token = data.token;
        state.login = status;
    }
}