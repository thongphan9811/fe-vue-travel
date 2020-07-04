<template>
  <mdb-navbar expand="large" dark color="indigo">
    <mdb-navbar-brand href="#">
      Traveler
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right class="navbar">
        <mdb-nav-item href="#" active>Home</mdb-nav-item>
        <mdb-nav-item href="#">liên hệ</mdb-nav-item>
        
        <mdb-dropdown tag="li" class="nav-item"  v-if="GET_STATUS_LOGIN" >
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>{{GET_USERNAME}}</mdb-dropdown-toggle>
          <mdb-dropdown-menu >
            <mdb-dropdown-item>Quản lý tài khoản</mdb-dropdown-item>
            <mdb-dropdown-item>quản lý bài đăng</mdb-dropdown-item>
            <mdb-dropdown-item>quản lý tour</mdb-dropdown-item>
            <mdb-dropdown-item v-on:click="logout" >Đăng Xuất</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
        <template v-else>
          <mdb-nav-item to="/home/login" >đăng nhập</mdb-nav-item>
          <mdb-nav-item to="/home/register" >đăng ký</mdb-nav-item>
        </template>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>
<script>
  import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue';
  import { mapGetters } from "vuex";
  export default {
    name: 'Navbar',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbContainer,
      mdbDropdown,
      mdbDropdownToggle,
      mdbDropdownMenu,
      mdbDropdownItem
    },
    computed:{
      ...mapGetters('user',['GET_USERNAME','GET_STATUS_LOGIN'])
    },
    methods:{
      async logout(){
        await this.$store.dispatch('user/logout');
        this.$router.push('/home')
      }
    }
  }
</script>
<style  scoped>
.nav-item{
  margin-right: 50px;
}
</style>
