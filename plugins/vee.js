
import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  
} from 'vee-validate';

import { required, email, min, confirmed } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
})
extend('email', {...email ,message:'is not an email'})
extend('min', (val)=>{
    if(val >=8){
        return true
    }
    return 'not be less than 8 characters'
})
extend('confirmed', confirmed)
extend('phone',(val)=>{
    if(typeof(val) != Number || val >=10){
        return true;
    }
    return 'phone not be a string or less than 10 number';
})
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver) 