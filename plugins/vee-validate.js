import Vue from 'vue'
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'
/* eslint-disable */
import { required, email, alpha_spaces, numeric, regex, min } from 'vee-validate/dist/rules'
/* eslint-enable */

// Add a rule.
extend('email', {
  ...email,
  message: '{_field_} phải có dạng xxx-@-yyy.zzz'
})
extend('regex', (value) => {
  const reGex = new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
  console.log(value)
  if (reGex.test(value) === true) {
    return true
  }
  return 'Mật khẩu phải bao gồm ít nhất: 8 kí tự, một kí tự in hoa, một kí tự in thường, một số'
})

/* eslint-disable */
extend('alpha_spaces', {
  ...alpha_spaces,
  message: '{_field_} không được chứa kí tự đặc biệt '
})
/* eslint-enable */

extend('required', {
  ...required,
  message: '{_field_} không được để trống'
})

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'Nhập lại mật khẩu không chính xác. Vui lòng nhập lại !'
})
extend('numeric', {
  ...numeric,
  message: '{_field_} chỉ bao gồm số. Vui lòng nhập lại !'
})

// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
