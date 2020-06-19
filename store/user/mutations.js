export default {
    async SET_USER(state,data){
        state.username = data.user.username;
        state.token = data.token;
        state.login = true;
    }
}