<template>
    <div class="container" >
  <mdb-row >
    <mdb-col md="8">
      <mdb-card class="purple-text">
        <mdb-card-header class="pt-4 grey lighten-4">
          <mdb-card-title><strong>hồ sơ của hướng dẫn viên</strong></mdb-card-title>
        </mdb-card-header>
        <mdb-card-body>
          <mdb-row class="mb-4 pb-3">
            <mdb-col >
               <mdb-input outline label="số chứng chỉ" icon="user" v-model="certificate"/>
               <mdb-input outline label="nơi cấp" icon="user" v-model="place_of_certification" />
               <div class="v-date">
                   <label for="data-start" class="label-date">ngày cấp chứng chỉ</label>
                    <v-date-picker v-model="start_date" > </v-date-picker>
               </div>
               <div class="v-date">
                   <label for="data-end" class="label-date">ngày hết hạng chứng chỉ</label>
                    <v-date-picker v-model="expiration_date" > </v-date-picker>
               </div>
               <mdb-input outline label="nơi theo học du lịch" icon="user" v-model="learn_from" />
               <mdb-input outline label="số chứng minh nhân dân" icon="user" v-model="identify_numbers" />
                <mdb-input type="textarea" outline :rows="4" label="địa chỉ tạm trú" icon="comment" v-model="permanent_address"/>
              <mdb-input type="textarea" outline :rows="4" label="địa chỉ thường trú" icon="comment" v-model="temporary_address"/>
            </mdb-col>
          </mdb-row>
        </mdb-card-body>
        <mdb-card-footer class="d-flex grey lighten-4 justify-content-end">
          <mdb-btn outline="purple" icon="paper-plane" v-on:click="register_tourGuide()" >Reserve table</mdb-btn>
        </mdb-card-footer>
      </mdb-card>
    </mdb-col>
  </mdb-row>
  </div>
</template>
<script>
  import { mdbRow, mdbCol, mdbInput, mdbTextarea, mdbBtn, mdbCard, mdbCardHeader, mdbCardTitle, mdbCardFooter, mdbCardBody } from 'mdbvue';

  export default {
    name: 'FormsPage',
    components: {
      mdbRow,
      mdbCol,
      mdbInput,
      mdbTextarea,
      mdbBtn,
      mdbCard,
      mdbCardBody,
      mdbCardHeader,
      mdbCardFooter,
      mdbCardTitle ,
      
    },
    data() {
      return {
        expiration_date:new Date(),
        start_date:new Date(),
        certificate:'',
        place_of_certification:'',
        learn_from:'',
        permanent_address:'',
        temporary_address:'',
        identify_numbers:''
      };
    },
    methods:{
        register_tourGuide(even){
            this.$emit('finished_profile',{
                certificate:this.certificate,
                place_of_certification:this.place_of_certification,
                learn_from:this.learn_from,
                start_date:this.start_date,
                expiration_date:this.expiration_date,
                permanent_address:this.permanent_address,
                temporary_address:this.temporary_address,
                identify_numbers:this.identify_numbers
            })

        }
    },
    
  };
</script>
<style  scoped>
.container{
    margin-top: 40px;
}
.v-date{
    margin-top: 10px;
    margin-left: 30px;
}
.label-date{
    color: #000;
}
</style>