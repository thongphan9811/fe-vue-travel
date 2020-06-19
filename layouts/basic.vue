<template>
    <div>
        <mdb-container fluid>
            <nuxt />
        <!-- Content here -->
        </mdb-container>
    </div>
</template>
<script>
  import {mdbContainer} from 'mdbvue';
  export default {
    components: {
      mdbContainer
    }
  }
</script>