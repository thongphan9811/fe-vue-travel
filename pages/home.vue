<template>
    <div>
        <div > 
          <nuxt-child v-on:set-profile="middle_profile" v-on:finished_profile="register_profile"/>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            user:null
        }
    },
    components:{
        
    },
    methods:{
        middle_profile(e){
            this.user = e;
        },
        register_profile(e){
            this.user = Object.assign({},this.user,e);
        }
    }
}
</script>
